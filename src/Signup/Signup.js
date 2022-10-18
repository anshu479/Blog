import React from "react";

import "./Signup.css";

const Signup = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <div className="header-article">
        <h2>Login</h2>
      </div>
      <form className="form" onSubmit={submitHandler}>
        <input className="form-control" placeholder="Enter your name"></input>
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

        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default Signup;
