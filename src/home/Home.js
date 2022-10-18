import React, { useState } from "react";
import AricleList from "../UI/ArticleList/ArticleList";

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
      <form className="form" onSubmit={inputHandler}>
        <input className="form-control" placeholder="Search Blogs " />
        <input className="form-control" placeholder="Filter By:"></input>
      </form>
      <hr></hr>

      <AricleList></AricleList>
    </React.Fragment>
  );
};

export default Home;
