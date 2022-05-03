import { useState, useEffect } from "react";

import Header from "./components/UI/Header";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import database from "./firebase";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [httpError, setHttpError] = useState(false);

  const [userNumber, setUserNumber] = useState(6);

  const [userName, setUserName] = useState("dummydata");

  const [userPass, setUserPass] = useState("dummydata");

  const [isEditing, setIsEditing] = useState(false);

  // persistent data upon page refresh
  //
  // var getInitialUser = () => {
  //   var prevUser = localStorage.getItem('prevUser') || "";
  //   var prevPass = localStorage.getItem('prevPass') || "";
  //   return {
  //     prevUser: prevUser,
  //     prevPass: prevPass
  //   };
  // };

  // var setUser = (userName, userPass) => {
  //   localStorage.setItem('prevUser',userName);
  //   localStorage.setItem('prevPass', userPass);
  //   setUserName(userName);
  //   setUserPass(userPass);
  // };

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
        if (responseData[userNumber][key]) {
          loadedExpenses.push({
            id: key,
            title: responseData[userNumber][key].name,
            amount: responseData[userNumber][key].price,
            date: new Date(
              responseData[userNumber][key].date.year,
              responseData[userNumber][key].date.month,
              responseData[userNumber][key].date.day
            ),
          }); //push
        }
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

  const removeExpenseHandler = (expenseID) => {
    setExpenses((prevExpenses) => {
      var filtered = prevExpenses.filter((expense) => {
        return expense.id !== expenseID;
      });
      return [...filtered];
    });
  };

  //combines removeExpenseHandler and addExpenseHandler to refresh internal list
  //when changing an exspense but keeping the same id
  const changeExpenseHandler = (expense) => {
      removeExpenseHandler(expense.id);
      addExpenseHandler(expense);
  };


  const validate = (enteredUser,enteredPass) => {
    //validate
    if (enteredUser === "" || enteredPass === "") {
      alert("Please make sure you enter a username and password");
      return false;
    }

    if(enteredUser.length > 29 || enteredPass.length > 29){
      alert("Username or password cannot exceed 30 characters");
      return false;
    }

    return true;
  }

  const signOutHandler = () => {
    setUserNumber();
    setUserName("");
    setUserPass("");
  };

  const signInHandler = (enteredUser, enteredPass) => {
    enteredUser = enteredUser.trim();
    enteredPass = enteredPass.trim();
    
    if(!validate(enteredUser, enteredPass)){
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
        if (responseData[key] === null) {
          //do nothing - else it will fail to read
        } else {
          if (
            responseData[key].user === enteredUser &&
            responseData[key].pass === enteredPass
          ) {
            setUserNumber(key);
            return;
          } //if
        } //endif
      } //end for

      //user doesn't exist
      alert("Invalid log in, please try again");
      setUserName("");
      setUserPass("");
    };

    fetchUsers()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  };

  const signUpHandler = (enteredUser, enteredPass) => {
    enteredUser = enteredUser.trim();
    enteredPass = enteredPass.trim();
    
    if(!validate(enteredUser, enteredPass)){
      return;
    }

    setUserName(enteredUser);
    setUserPass(enteredPass);

    // Push Function
    const pushNewUser = (enteredUser, enteredPass, newID) => {
      database
        .ref(`users/${newID}`)
        .set({
          user: enteredUser,
          pass: enteredPass,
        })
        .catch(alert);
    }; //endPushNewUser

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

      //check to see if user already exists
      for (const key in responseData) {
        if (!responseData[key]) {
          //do nothing
        } else {
          if (
            responseData[key].user === enteredUser &&
            responseData[key].pass === enteredPass
          ) {
            setUserName("");
            setUserPass("");
            alert("Try signing in, instead.");
            return;
          } //if
        } //if
      } //for

      //if user does not exist
      const newID = Math.max(...Object.keys(responseData)) + 1; //auto increment

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

  //passed from NewExpense, pass to Expenses
  const isEditingHandler = (editing) => {
    if (editing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  return (
    <div>
      <Header
        username={userName}
        onSignOut={signOutHandler}
        onSignIn={signInHandler}
        onSignUp={signUpHandler}
      />
      <Expenses
        onRemoveExpense={removeExpenseHandler}
        userID={userNumber}
        editing={isEditing}
        onRefreshExpenses={changeExpenseHandler}
        items={expenses}

        onIsEditing={isEditingHandler}
        onGetExpense={addExpenseHandler}
      />
      {userName === "" && (
        <p style={{ color: "black", textAlign: "center" }}>
          Please sign in to find expenses
        </p>
      )}
    </div>
  );
} //app

export default App;
