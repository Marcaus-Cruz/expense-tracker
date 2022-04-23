import { useState, useEffect } from "react";

import Header from "./components/expenses/Header";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import database from "./firebase";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState(false);

  const [userNumber, setUserNumber] = useState();

  const [userName, setUserName] = useState("");

  const [userPass, setUserPass] = useState("");

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

      for (const key in responseData[userNumber]) {
        console.log(key);
        loadedExpenses.push({
          id: responseData[userNumber][key],
          title: responseData[userNumber][key].name,
          amount: responseData[userNumber][key].price,
          date: new Date(
            responseData[userNumber][key].date.year,
            responseData[userNumber][key].date.month,
            responseData[userNumber][key].date.day
          ),
        }); //push
      } //for loop

      setExpenses(loadedExpenses);
      setIsLoading(false);
    }; //fetchExpenses

    fetchExpenses()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [userNumber, userName]); //useEffect

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
    setUserNumber();
    setUserName("");
    setUserPass("");
  };

  const signInHandler = (enteredUser, enteredPass) => {
    console.log(enteredUser + " " + enteredPass);

    enteredUser = enteredUser.trim();
    enteredPass = enteredPass.trim();
    //validate
    if(enteredUser === "" || enteredPass === ""){
      alert("Please make sure you enter a username and password");
      return;
    }


    setUserName(enteredUser);
    setUserPass(enteredPass);

    const fetchUsers = async () => {
      setIsLoading(true);

      //Grab users from db
      const response = await fetch(
        "https://exp-track-bdba3-default-rtdb.firebaseio.com/users.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong when fetching users!");
      }

      //convert response to json format
      const responseData = await response.json();

      //check to see if user exists
      for (const key in responseData) {
        console.log(responseData[key].user + " " + responseData[key].pass);
        if (
          responseData[key].user === enteredUser &&
          responseData[key].pass === enteredPass
        ) {
          setUserNumber(key);
          return;
        }//endif
      }//end for
      
      //user doesn't exist
      alert("Invalid log in, please try again");
      setUserName("");
      setUserPass("");
      console.log("Sign in Failed");
    };

    fetchUsers()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  };

  const signUpHandler = (enteredUser, enteredPass) => {
    console.log(enteredUser + " " + enteredPass);
    
    enteredUser = enteredUser.trim();
    enteredPass = enteredPass.trim();
    //validate
    if(enteredUser === "" || enteredPass === ""){
      alert("Please make sure you enter a username and password");
      return;
    }


    setUserName(enteredUser);
    setUserPass(enteredPass);


        // Push Function
        const pushNewUser = (enteredUser, enteredPass, newID) => {
          console.log(newID);      
            database
            .ref(`users/${newID}`)
            .set({
              user: enteredUser,
                pass: enteredPass
            })
            .catch(alert);
        }; //endPushNewUser

      const fetchUsers = async () => {
        console.log("in fetch users");
        setIsLoading(true);

        //Grab users from db
        const response = await fetch(
          "https://exp-track-bdba3-default-rtdb.firebaseio.com/users.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong when fetching users!");
        }

        //convert response to json format
        const responseData = await response.json();

        //check to see if user already exists
        for (const key in responseData) {
          console.log(responseData[key].user + " " + responseData[key].pass);
          if (
            responseData[key].user === enteredUser &&
            responseData[key].pass === enteredPass
          ) {
            setUserName("");
            setUserPass("");
            alert("Try signing in, instead.");
            return;
          }//if
        }//for

        //if user does not exist
        const newID = responseData.length; //auto increment
        //Already set above
        // setUserName(enteredUser);
        // setUserPass(enteredPass);
        setUserNumber(newID);

        //push new user
        pushNewUser(enteredUser, enteredPass, newID);
      };

    fetchUsers()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  };

  return (
    <div>
      <Header
        username={userName}
        onSignOut={signOutHandler}
        onSignIn={signInHandler}
        onSignUp={signUpHandler}
      />
      <NewExpense userID={userNumber} onGetExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {userName === "" && (
        <p style={{ color: "black", textAlign: "center" }}>
          Please sign in to find expenses
        </p>
      )}
    </div>
  );
} //app

export default App;
