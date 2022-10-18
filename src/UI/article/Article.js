import React from "react";

import "./Article.css";

const Article = () => {
  return (
    <form>
      <input placeholder="Enter Title" />
      <textarea rows={10} placeholder="Enter description of your Blog" />
      {/* <img src="" alt=""> */}
      <input placeholder="Add tags"></input>
      {/* {add these tags to Tag array} */}
    </form>
  );
};

export default Article;
