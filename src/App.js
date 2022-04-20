import { useState, useEffect } from "react";

import Header from "./components/expenses/Header";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);

      //Grab expenses from db
      const response = await fetch(
        "https://exp-track-bdba3-default-rtdb.firebaseio.com/expenses.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong when fetching expenses!");
      }

      //convert response to json format
      const responseData = await response.json();

      const loadedExpenses = [];

      for (const key in responseData) {
        loadedExpenses.push({
          id: responseData[key].id,
          title: responseData[key].name,
          amount: responseData[key].amount,
          date: new Date(
            responseData[key].date.year,
            responseData[key].date.month,
            responseData[key].date.day
          )
        }); //push
        console.log(loadedExpenses);
      } //for loop

      setExpenses(loadedExpenses);
      setIsLoading(false);
      setUser("Marcaus");
    };

    fetchExpenses().then().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

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
      <Header username={user}/>
      <NewExpense onGetExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}//app

export default App;
