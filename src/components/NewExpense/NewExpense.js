import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "../css/NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const storeExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      // Placeholder for now --> will not need this once db is connected
      id: Math.random.toString(),
    };
    //send to App.js
    props.onGetExpense(expense);
    setIsAdding(false);
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
          <h3>
            Which expense would you like to remove?
          </h3> <button onClick={stopRemoveHandler}>Cancel</button>{" "}
        </div>
      )}
    </div>
  );
};

export default NewExpense;
