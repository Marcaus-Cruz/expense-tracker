import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "../css/NewExpense.css";
import database from "../../firebase";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const setEditHandler = () => {
    setIsEditing(true);
    props.onIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
    props.onIsEditing(false);
  };


  //submit edits
  const submitEditHandler = () => {
    setIsEditing(false);
    //props.submitEdits;
  };

  return (
    <div className="new-expense">
      {!isAdding && !isEditing && (
        <div>
          <button onClick={setEditHandler}>Edit</button>{" "}
          <button onClick={setAddingHandler}>Add Expense</button>
        </div>
      )}
      {isAdding && !isEditing && (
        <ExpenseForm
          onStoreExpense={storeExpenseHandler}
          onCancel={stopAddingHandler}
        />
      )}
      {isEditing && (
        <div>
          {" "}
          <h3>Which expense(s) would you like to edit?</h3>{" "}
          <button onClick={stopEditHandler}>Cancel</button>{" "}
          <button onClick={submitEditHandler}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
