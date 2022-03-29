import { useState } from 'react';

import '../css/ExpenseItem.css';
import '../css/Card.css';

import ExpenseDate from './ExpenseDate.js';
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>edit</button>
    </Card>
  );
}

export default ExpenseItem;
