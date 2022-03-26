import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 25th 2022</div>
      <div className="expense-item__description">
        <h2>Udemy React Course</h2>
        <div className="expense-item__price">$98.10</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
