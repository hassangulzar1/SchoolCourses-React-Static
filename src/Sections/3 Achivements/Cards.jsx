import React from "react";
import "./Cards.css";
const Cards = (props) => {
  return (
    <div className=" text-center  col-6 col-md-4 col-lg-3">
      <img className="img-fluid mx-auto" src={props.img} alt="" />
      <span className="topics">{props.heading}</span> <br />
      <span className="anytihng">learn anything</span>
    </div>
  );
};

export default Cards;
