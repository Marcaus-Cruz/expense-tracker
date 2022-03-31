import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";

import "../css/Expenses.css";

function Expenses(props) {
  const [year, setSelectedYear] = useState("2020");
  const getYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
