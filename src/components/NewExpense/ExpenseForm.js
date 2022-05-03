import { useState } from "react";

import "../css/ExpenseForm.css";

//getting props from NewExpense or ExpenseItem
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
  const [enteredDate, setEnteredDate] = useState(props.editing ? `${props.date.getFullYear()}-${('0' + props.date.getUTCMonth()).slice(-2)}-${('0' + props.date.getUTCDate()).slice(-2)}` : "");
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

    //validate here if requires don't work

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

  var heading = "New Expense";
  var submitBtnText = "Add";
  if(props.editing){
    heading = "";
    submitBtnText = "Save";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-title">
        <h2>{heading}</h2>
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
            placeholder={enteredDate}
            min="2020-01-01"
            max="2030-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/*  */}
        <button id="cancelBtn" type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">{submitBtnText}</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
