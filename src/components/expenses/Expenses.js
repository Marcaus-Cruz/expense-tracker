import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";

import "../css/Expenses.css";

function Expenses(props) {
  //State to manage the selected year from filter from filter props
  const [year, setSelectedYear] = useState("2022");
  const getYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  // Use selected year to copy an array to display onto page
  const currentYearExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  // Default value for expenses
  let content = <h2>No expenses found for {year}</h2>;
  // If stuff, map stuff and store it in content
  if (currentYearExpenses.length > 0) {
    content = currentYearExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  //return all current year expenses
  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />
      {content}
    </Card>
  );
}

export default Expenses;
