import { useState } from "react";
import "../css/ExpenseItem.css";
import "../css/Card.css";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
import ExpenseForm from "../NewExpense/ExpenseForm";

//Entire expense card component
function ExpenseItem(props) {
  //embbed date and return extracted expense from expenses props
  const [showForm, setShowForm] = useState(false);

  //calls function in expenses that removes
  const removeHandler = () => {
    props.onRemoveItem(props.id);
  };

  const showFormHandler = () => {
    //if editing is in process, click edit to cancel out
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  if (props.editing) {
    return (
      <li>
        <Card className="expense-item">
          <button className="removeBtn" onClick={removeHandler}>
            X
          </button>
          <button className="editBtn" onClick={showFormHandler}>
            edit
          </button>
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
        {showForm && (
          <ExpenseForm
            itemID={props.id}
            date={props.date}
            title={props.title}
            amount={props.amount}
            editing={props.editing}
            onStoreExpense={props.onStoreExpense}
            onCancel={showFormHandler}
          />
        )}
      </li>
    );
  } else {
    return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
      </li>
    );
  }
}

export default ExpenseItem;
