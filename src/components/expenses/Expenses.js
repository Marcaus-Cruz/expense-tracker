import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";
import ExpensesChart from "../graphs/ExpensesChart";
import database from "../../firebase";

import "../css/Expenses.css";

function Expenses(props) {
  //State to manage the selected year from filter from filter props
  const [year, setSelectedYear] = useState("2022");
  const getYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  // Use selected year to copy an array to display onto page
  const currentYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

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
    console.log("In editExpenseHandler!");

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
        //2 ways: remove, then add in app || remove and add in same method in app

        //1)
        //remove that item from internal list and refresh
        // removeExpense(props.userID, props.id).then(() => {
        //   props.onRemoveExpense(props.id);
        // });

        // //add item to internal list and refresh
        // props.onRefreshExpenses(enteredExpense);

        //2)
        props.onRefreshExpenses(enteredExpense);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  //return all current year expenses
  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />
      <ExpensesChart expenses={currentYearExpenses} />
      <ExpensesList
        onStoreExpense={editExpenseHandler}
        onRemoveItem={removeItemHandler}
        editing={isEditing}
        items={currentYearExpenses}
        year={year}
      />
    </Card>
  );
}

export default Expenses;
