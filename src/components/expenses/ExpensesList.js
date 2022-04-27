import ExpenseItem from "./ExpenseItem";
import EditExpenseItem from "./EditExpenseItem";
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
  props.items.sort((a, b) => a.date - b.date);

  return (
    <ul className="expenses-list">
      {!props.removing && props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {props.removing && props.items.map((expense) => ( <EditExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          removing={props.removing}
          onRemoveItem={props.onRemoveItem}
        /> ))}
    </ul>
  );
};

export default ExpensesList;
