import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";

import "../css/Expenses.css";

function Expenses(props) {

  const [year, setSelectedYear] = useState("2022");
  const getYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const currentYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />

      {currentYearExpenses.map((expense) => (
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
