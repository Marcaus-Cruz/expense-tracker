import { useState } from "react";

import "../css/ExpenseForm.css";

//TODO: Get data from props to start form
//getting props from NewExpense
const ExpenseForm = (props) => {
  //Title event listener
  const [enteredTitle, setEnteredTitle] = useState(props.editing ? props.title : "");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //Amount event listener
  const [enteredAmount, setEnteredAmount] = useState(props.editing ? props.amount : "");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  
  //Date event listener
  const [enteredDate, setEnteredDate] = useState(props.editing ? props.date : "");
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

    //create object with all data entered
    const newExpenseData = {
      id: itemID,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //validate more here
    if(!enteredDate){
      alert("Please enter a date");
      return false;
    }

    if(enteredAmount < .01){
      alert("Enter an amount")
      return false;
    }

    //checks if title is entered. If not, prevent submission.
    if(newExpenseData.title.trim() === ''){
      alert("Must enter a title for this expense");
      return false;
    }

    if(props.editing){
      props.onCancel();
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
          required={true}
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
          required={true}
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
          required={true}
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
