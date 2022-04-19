import { useState, useEffect } from "react";

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
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);

      //Grab expenses from db
      const response = await fetch(
        "https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json"
      );

      if (response.ok) {
        throw new Error("Something went wrong when fetching expenses!");
      }

      //convert response to json format
      const responseData = await response.json();

      const loadedExpenses = [];

      for (const key in responseData) {
        loadedExpenses.push({
          id: key,
          title: responseData[key].name,
          amount: responseData[key].amount,
          date: new Date(
            responsesData[key].date.year,
            `${responsesData[key].date.month}`,
            responseData[key].date.day
          ),
        }); //push
      } //for loop

      setExpenses(loadedExpenses);
      setIsLoading(false);
    };

    fetchExpenses().then().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    })

  }, []);//use effect

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
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
}//app

export default App;
