import React from "react";
import Btn from "../../Components/Btn";
const CourseCards = (props) => {
  return (
    <div class="card mx-4 mt-5 Regular shadow" style={{ width: "30rem" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h1 class="card-title">{props.heading}</h1>
        <p class="card-text fs-3">{props.paragraph}</p>
        <Btn name="Buy Course" />
        <br />
        <br />
        <img src="/Assets/calendar-outline 2.png" alt="" />
        <span className="ms-2 fs-4">{props.date}</span>
        <img class="people" src="/Assets/people-outline 2.png" alt="" />
        <span className="ms-2 fs-4">{props.seats}</span>
      </div>
    </div>
  );
};

export default CourseCards;
