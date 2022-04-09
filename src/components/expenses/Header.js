import "../css/Header.css";
import logoUrl from "../UI/favicon.ico";

//Header component for entire page
function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={logoUrl} alt="MC logo" style={{ width: "100px" }} />
        <h2 style={{ color: "white", lineHeight: "50px", padding: "0px 20px" }}>Expense Tracker</h2>
      </div>
      <div className="right">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Header;
