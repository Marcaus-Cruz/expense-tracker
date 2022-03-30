import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <h2>Expense Tracker!</h2>
      <div className="right">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Header;
