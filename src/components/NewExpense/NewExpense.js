import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "../css/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const storeExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      // Placeholder for now --> will not need this once db is connected
      id: Math.random.toString(),
    };
    //send to App.js
    props.onGetExpense(expense);
    setIsEditing(false);
  };

  const setEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <div>
        {/* TODO: Add editing capabilities to remove */}
          <button>Edit Expense</button>{" "}
          <button onClick={setEditingHandler}>Add Expense</button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onStoreExpense={storeExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
