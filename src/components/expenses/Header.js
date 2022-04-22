//import { useState } from "react";

import SignInForm from "../UI/SignInForm";

import "../css/Header.css";
import logoUrl from "../UI/favicon.ico";

//Header component for entire page
//possibly move fetching users and signing in/up into this component
function Header(props) {

  return (
    <div className="header">
      <div className="left">
        <img src={logoUrl} alt="MC logo" style={{ width: "100px" }} />
        <h2 style={{ color: "white", lineHeight: "50px", padding: "0px 20px" }}>
          Expense Tracker
        </h2>
      </div>
      {props.username !== "" && (
        <div className="right">
          <p>{props.username}</p>{" "}
          <button onClick={props.onSignOut}>Sign Out</button>
        </div>
      )}
      {props.username === "" && (
        <div className="right">
          <SignInForm onSignIn={props.onSignIn} onSignUp={props.onSignUp} />
        </div>
      )}
    </div>
  );
}

export default Header;
