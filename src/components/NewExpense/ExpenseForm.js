import { useState } from "react";

import "../css/ExpenseForm.css";

//getting props from NewExpense
const ExpenseForm = (props) => {
  //Title event listener
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //Amount event listener
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //Date event listener
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //Submit event handler
  const submitHandler = (event) => {
    //prevents HTTP request from server
    event.preventDefault();

    let itemID = -1;

    if(props.editing){
      itemID = props.itemID
    }

    console.log(itemID);

    //create object with all data entered
    const newExpenseData = {
      id: itemID,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(newExpenseData.id);

    //validate more here

    //checks if title is entered. If not, prevent submission.
    if(newExpenseData.title.trim() === ''){
      alert("Must enter a title for this expense");
      return false;
    }

    if(props.editing){
      console.log("editing");
      props.onCancel();
    } else{
      console.log("adding");
      //props.onStoreExpense(newExpenseData)
    }
    
    //Send to NewExpense by calling that prop function associated with expense form
    // or send to Expense item -> expensesList -> expenses to update item if editing
    props.onStoreExpense(newExpenseData);

    //Reset form for new expense
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-title">
        <h2>New Expense</h2>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
          placeholder="Expense Name"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          ${" "}
          <input
            type="number"
            value={enteredAmount}
            min=".01"
            step=".01"
            placeholder="0.00"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2030-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/*  */}
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
