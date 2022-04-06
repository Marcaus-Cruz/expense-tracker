import { useState } from "react";

import ExpensesList from "./ExpensesList";
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

  //return all current year expenses
  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />
      <ExpensesList items={currentYearExpenses} year={year}/>
    </Card>
  );
}

export default Expenses;
