import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card.js";
import Filter from "../graphs/Filter";
import ExpensesChart from "../graphs/ExpensesChart";
import database from '../../firebase';

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

  //passed from App, pass to ExpensesList
  const isRemoving = props.removing;

  const removeItemHandler = (itemID) => {
    console.log(itemID);

    //do removing here.
    //add call to props.onRemoveExpense to refresh list
  };

  //return all current year expenses
  return (
    <Card className="expenses">
      <Filter selected={year} onGetYear={getYearHandler} />
      <ExpensesChart expenses={currentYearExpenses} />
      <ExpensesList onRemoveItem={removeItemHandler} removing={isRemoving} items={currentYearExpenses} year={year}/>
    </Card>
  );
}

export default Expenses;
