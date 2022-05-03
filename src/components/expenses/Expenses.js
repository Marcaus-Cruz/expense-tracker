import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";
import ExpensesChart from "../graphs/ExpensesChart";
import NewExpense from "../NewExpense/NewExpense";

import database from "../../firebase";

import "../css/Expenses.css";

function Expenses(props) {
  //State to manage the selected year from filter from filter props
  const [year, setSelectedYear] = useState("2022");
  const getYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  //State to manage selected months
  const [currentlySelectedMonths, setCurrentlySelectedMonths] = useState([]);

  const getMonthHandler = (monthNum) => {

    //deselect month
    if (currentlySelectedMonths.includes(monthNum)) {
      setCurrentlySelectedMonths((prevMonths) => {
        const newMonths = prevMonths.filter(month => {
          return month !== monthNum;
        });
        return newMonths;
      });
    } 
    //select month
    else {
      setCurrentlySelectedMonths((prevMonths) => {
        return [...prevMonths, monthNum];
      });
    }

  };

  // Use selected year to copy an array to display onto page
  const currentYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  var currentMonthExpenses;

  if (currentlySelectedMonths.length > 0) {
    currentMonthExpenses = props.items.filter((expense) => {
      return (
        currentlySelectedMonths.includes(expense.date.getUTCMonth()) &&
        expense.date.getFullYear().toString() === year
      );
    });
  } else {
    // Use selected year to copy an array to display onto page
    currentMonthExpenses = currentYearExpenses;
  }

  //passed from App, pass to ExpensesList
  const isEditing = props.editing;

  const removeItemHandler = (itemID) => {
    //do removal here
    const removeExpense = async (userID, itemID) => {
      database
        .ref(`expenses/${userID}/${itemID}`)
        .remove()
        .then(() => {
          console.log("remove successful");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    //add call to props.onRemoveExpense to refresh list
    removeExpense(props.userID, itemID).then(() => {
      props.onRemoveExpense(itemID);
    });
  };

  //push edit here
  const editExpenseHandler = (enteredExpense) => {
    //add new expense here
    const pushChangedItem = async (enteredExpense, userID) => {
      //set new fields
      database
        .ref(`expenses/${userID}/${enteredExpense.id}`)
        .set({
          name: enteredExpense.title,
          price: enteredExpense.amount,
        })
        .catch(alert);

      //set date
      database
        .ref(`expenses/${userID}/${enteredExpense.id}/date`)
        .set({
          month: enteredExpense.date.getUTCMonth(),
          day: enteredExpense.date.getUTCDate(),
          year: enteredExpense.date.getUTCFullYear(),
        })
        .catch(alert);
    }; //end pushChangedItem

    //call pushChangedItem and refresh page
    pushChangedItem(enteredExpense, props.userID)
      .then(() => {
        props.onRefreshExpenses(enteredExpense);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //return all current year expenses
  return (
    <Card className="expenses">
      {props.userID && <NewExpense
          onIsEditing={props.onIsEditing}
          userID={props.userID}
          onGetExpense={props.onGetExpense}
        />}
      <Filter selected={year} onGetYear={getYearHandler} />
      <ExpensesChart
        expenses={currentYearExpenses}
        onSelectMonth={getMonthHandler}
        currentlySelectedMonths={currentlySelectedMonths}
      />
      <ExpensesList
        onStoreExpense={editExpenseHandler}
        onRemoveItem={removeItemHandler}
        editing={isEditing}
        items={currentMonthExpenses}
        year={year}
        months={currentlySelectedMonths}
      />
    </Card>
  );
}

export default Expenses;
