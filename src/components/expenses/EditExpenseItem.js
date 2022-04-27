import "../css/ExpenseItem.css";
import "../css/Card.css";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

import { useState } from "react";

//Entire expense card component
function EditExpenseItem(props) {
  //embbed date and return extracted expense from expenses props

  //call in expenses list which calls to expenses
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  //Title event listener
  const [enteredTitle, setEnteredTitle] = useState(props.title);
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //Amount event listener
  const [enteredAmount, setEnteredAmount] = useState(props.amount);
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //Date event listener
  const [enteredDate, setEnteredDate] = useState(props.date);
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <li>
        <form>
      <Card className="expense-item">
        {
          <button onClick={removeItemHandler} className="removeBtn">
            X
          </button>
        }
        <ExpenseDate date={props.date} />
        <input
          type="date"
          value={enteredDate}
          min="2020-01-01"
          max="2030-12-31"
          onChange={dateChangeHandler}
        />
        <div className="expense-item__description">
            <label>Name</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
           <div className="expense-item__price">
               <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min=".01"
              step=".01"
              placeholder={enteredAmount}
              onChange={amountChangeHandler}
            />
           </div> 
        </div>
      </Card>
      </form>
    </li>
  );
}

export default EditExpenseItem;
