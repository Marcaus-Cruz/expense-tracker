import "../css/ExpenseItem.css";
import "../css/Card.css";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

//Entire expense card component
function ExpenseItem(props) {
  //embbed date and return extracted expense from expenses props

  //calls function in expenses that removes
  const removeHandler = () => {
    props.onRemoveItem(props.id);
  };

  if (props.editing) {
    return (
      <li>
        <Card className="expense-item">
          <button className="removeBtn" onClick={removeHandler}>
            X
          </button>
          <button className="removeBtn">edit</button>
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </Card>
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
