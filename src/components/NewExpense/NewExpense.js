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
      console.log(responseData);

      if(responseData[userID] === undefined){
          //do nothing
      } else{
         itemID = Object.keys(responseData[userID]).length;
      }
      console.log(responseData[userID]);

      console.log(itemID);

      database
        .ref(`expenses/${userID}/${itemID}`)
        .set({
          name: enteredExpense.title,
          price: enteredExpense.amount,
        })
        .catch(alert);

        console.log("inserted item");

      //set date
      database
        .ref(`expenses/${userID}/${itemID}/date`)
        .set({
          month: enteredExpense.date.getMonth(),
          day: enteredExpense.date.toLocaleString("en-US", { day: "2-digit" }),
          year: enteredExpense.date.getFullYear(),
        })
        .catch(alert);

        console.log("inserted date");

      newItemID = itemID;
      console.log(newItemID);
    }; //endPushNewItem

    pushNewExpense(enteredExpense, props.userID)
      .then(() => {
        setIsAdding(false);
        console.log(newItemID);
        const expense = {
          ...enteredExpense,
          id: newItemID,
        };
        console.log(expense);

        //send to App.js for page refresh
        props.onGetExpense(expense);
      })
      .catch((error) => {
        console.log("Something went wrong");
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
  };

  const stopRemoveHandler = () => {
    setIsRemoving(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && !isRemoving && (
        <div>
          {/* TODO: Add editing capabilities to remove */}
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
