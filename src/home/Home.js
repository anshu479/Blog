import React, { useState } from "react";

import "./home.css";

const Home = () => {
  const [input, setInput] = useState({ searchText: "", filter: "" });

  const inputHandler = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value); input
    // console.log(event.target[1].value); filter
  };

  return (
    <React.Fragment>
      <form className="main-home" onSubmit={inputHandler}>
        <input placeholder="Enter text to seach for " />
        <label>Filter By:</label>
        <select>
          <option>All</option>
          <option>Education</option>
          <option>Travel</option>
          <option>IT</option>
          <option>Food</option>
        </select>
        <button>Search</button>
      </form>
    </React.Fragment>
  );
};

export default Home;
