import React from "react";

import "./Article.css";

const Article = () => {
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <>
      <div className="header-article">
        <h2>Create your article</h2>
      </div>
      <form className="form" onSubmit={formHandler}>
        <input className="form-control" placeholder="Enter Title" />
        <textarea
          rows={10}
          className="form-control"
          placeholder="Enter description of your Blog"
        />
        <input placeholder="Enter image url" className="form-control"></input>
        <input placeholder="Add tags" className="form-control"></input>
        {/* {add these tags to Tag array} */}
        <button className="btn btn-warning" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Article;
