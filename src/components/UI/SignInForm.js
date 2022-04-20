const SignInForm = (props) => {
  return (
    <form>
      <input
        id="userNameInput"
        className="input"
        placeholder="username"
        type="text"
      />
      <input
        id="passWordInput"
        className="input"
        placeholder="password"
        type="password"
      />
      <div>
        <button onClick={props.onSignIn}>Login</button>
        <button>Register</button>
      </div>
    </form>
  );
};

export default SignInForm;
