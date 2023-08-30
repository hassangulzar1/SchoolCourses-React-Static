import React from "react";
import CourseCards from "./CourseCards";
import "./Courses.css";
const Courses = () => {
  return (
    <div>
      <h1 class="Courses">Online courses</h1>

      <div class="container d-flex flex-wrap justify-content-center mt-4">
        <CourseCards
          img="/Assets/Rectangle 6.png"
          heading="Modern Sycology"
          paragraph="Designation"
          date="Start 20 April,2023"
          seats="60 seats"
        />
        <CourseCards
          img="/Assets/Rectangle 13.png"
          heading="Modern Style"
          paragraph="Designation"
          date="Start 19 june,2023"
          seats="40 seats"
        />
        <CourseCards
          img="/Assets/Rectangle 15.png"
          heading="Modern Technologies"
          paragraph="Designation"
          date="Start 22 june,2023"
          seats="22 seats"
        />
      </div>
    </div>
  );
};

export default Courses;
