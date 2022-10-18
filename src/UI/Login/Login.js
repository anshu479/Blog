import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Login.css";

const Login = () => {
  const auth = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    
  };
  return (
    <React.Fragment>
      <div className="header-article">
        <h2>Login</h2>
      </div>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="form-control"
          placeholder="Enter your email"
          type="email"
        ></input>
        <input
          className="form-control"
          placeholder="Enter your password"
          type="password"
        ></input>

        <button type="submit" onClick={auth.login}>
          Login
        </button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
