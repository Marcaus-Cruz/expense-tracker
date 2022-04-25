import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for {props.year}
      </h2>
    );
  }

  //sort expenses in ascending order 
  props.items.sort((a,b) => 
    a.date - b.date
  );

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
