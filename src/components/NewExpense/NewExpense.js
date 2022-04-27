import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "../css/NewExpense.css";
import database from "../../firebase";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  let newItemID = null;

  //database insertion
  const storeExpenseHandler = (enteredExpense) => {
    // Push Function
    const pushNewExpense = async (enteredExpense, userID) => {
      let itemID = 0;

      //Grab expenses from db
      const response = await fetch(
        "https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong when fetching expenses!");
      }

      //convert response to json format
      const responseData = await response.json();

      // if no items under this user, leave itemID at 0
      if (!responseData[userID]) {
        //do nothing
      } else {
        // 'auto-increment'
        itemID = Math.max(...Object.keys(responseData[userID])) + 1;
      }

      database
        .ref(`expenses/${userID}/${itemID}`)
        .set({
          name: enteredExpense.title,
          price: enteredExpense.amount,
        })
        .catch(alert);

      //set date
      database
        .ref(`expenses/${userID}/${itemID}/date`)
        .set({
          month: enteredExpense.date.getUTCMonth(),
          day: enteredExpense.date.getUTCDate(),
          year: enteredExpense.date.getUTCFullYear(),
        })
        .catch(alert);

      newItemID = itemID;
    }; //endPushNewItem

    //waits for the push to go through successfully before refreshing list
    pushNewExpense(enteredExpense, props.userID)
      .then(() => {
        setIsAdding(false);

        const expense = {
          ...enteredExpense,
          id: newItemID,
        };

        //send to App.js for page refresh
        props.onGetExpense(expense);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  const setRemoveHandler = () => {
    setIsRemoving(true);
    props.onIsRemoving(true);
  };

  const stopRemoveHandler = () => {
    setIsRemoving(false);
    props.onIsRemoving(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && !isRemoving && (
        <div>
          <button onClick={setRemoveHandler}>Remove Expense</button>{" "}
          <button onClick={setAddingHandler}>Add Expense</button>
        </div>
      )}
      {isAdding && !isRemoving && (
        <ExpenseForm
          onStoreExpense={storeExpenseHandler}
          onCancel={stopAddingHandler}
        />
      )}
      {isRemoving && (
        <div>
          {" "}
          <h3>Which expense would you like to remove?</h3>{" "}
          <button onClick={stopRemoveHandler}>Cancel</button>{" "}
        </div>
      )}
    </div>
  );
};

export default NewExpense;
