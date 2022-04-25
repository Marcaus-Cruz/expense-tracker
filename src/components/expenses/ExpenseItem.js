import "../css/ExpenseItem.css";
import "../css/Card.css";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

//Entire expense card component
function ExpenseItem(props) {
  //embbed date and return extracted expense from expenses props
  
  //call in expenses list which calls to expenses
   const removeItemHandler = () => {
     props.onRemoveItem(props.id);
   };

  //TODO: onclick for removing
  return (
    <li>
      <Card className="expense-item">
        {props.removing && <button onClick={removeItemHandler} className="removeBtn">X</button>}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
