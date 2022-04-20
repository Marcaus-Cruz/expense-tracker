import { useState, useEffect } from "react";

import Header from "./components/expenses/Header";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState(false);

  const [user, setUser] = useState(1);

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

      for (const key in responseData[user]) {
        loadedExpenses.push({
          id: responseData[user][key],
          title: responseData[user][key].name,
          amount: responseData[user][key].price,
          date: new Date(
            responseData[user][key].date.year,
            responseData[user][key].date.month,
            responseData[user][key].date.day
          )
        }); //push
        console.log(loadedExpenses);
      } //for loop

      setExpenses(loadedExpenses);
      setIsLoading(false);
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

  const signOutHandler = () => {
    setUser();
  };

  return (
    <div>
      <Header username={user} onSignOut={signOutHandler}/>
      <NewExpense onGetExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {!user && <p style={{color: "black", textAlign: "center"}}>Please sign in to find expenses</p>}
    </div>
  );
}//app

export default App;
