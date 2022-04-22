import { useState } from "react";

const SignInForm = (props) => {

    const [enteredUser, setEnteredUser] = useState("");
    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    };

    const [enteredPass, setEnteredPass] = useState("");
    const passChangeHandler= (event) => {
        setEnteredPass(event.target.value);
    };

     const submitHandler = (event) =>{
         event.preventDefault();

         let inOrUp = event.target.value;

         //validate here

         //sign in
          if(inOrUp === "in"){
              console.log("Signing in");
              props.onSignIn(enteredUser,enteredPass);
          } 
        //  //sign up
          else if (inOrUp === "up"){
              console.log("Signing up");
              props.onSignUp(enteredUser, enteredPass);
          } else {
              console.log("ERROR SIGNING IN OR UP");
             return;
          }
        
     }


  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={userChangeHandler}
        value={enteredUser}
        className="input"
        placeholder="username"
        type="text"
      />
      <input
        onChange={passChangeHandler}
        value={enteredPass}
        className="input"
        placeholder="password"
        type="password"
      />
      <div>
        <button value="in" onClick={submitHandler} type="button" >Login</button>
        <button value="up" onClick={submitHandler} type="button" >Register</button>
      </div>
    </form>
  );
};

export default SignInForm;
