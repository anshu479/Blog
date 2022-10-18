import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="mycard">{props.children}</div>
    </>
  );
};

export default Card;
