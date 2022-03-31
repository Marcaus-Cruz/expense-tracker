import { useState } from "react";

import Header from "./components/expenses/Header";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const db = [
  {
    id: "e1",
    title: "React Udemy Course",
    amount: 94.12,
    date: new Date(2022, 2, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(db);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <Header />
      <NewExpense onGetExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
