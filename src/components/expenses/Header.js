import { useState } from "react";

import SignInForm from "../UI/SignInForm";

import "../css/Header.css";
import logoUrl from "../UI/favicon.ico";

//Header component for entire page
function Header(props) {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="header">
      <div className="left">
        <img src={logoUrl} alt="MC logo" style={{ width: "100px" }} />
        <h2 style={{ color: "white", lineHeight: "50px", padding: "0px 20px" }}>
          Expense Tracker
        </h2>
      </div>
      {signedIn && (
        <div className="right">
          <p>{props.username}</p>{" "}
          <button onClick={props.onSignOut}>Sign Out</button>
        </div>
      )}
      {!signedIn && (
        <div className="right">
          <SignInForm onSignIn={props.onSignIn} />
        </div>
      )}
    </div>
  );
}

export default Header;
