import React from "react";
import "./Navbar.css";
import Btn from "../../Components/Btn";
const Navbar = () => {
  return (
    <header className="container-fluid d-flex flex-column flex-md-row justify-content-md-around">
      <div id="logo" className="text-center">
        <img src="/Assets/Group 1.png" alt="" />
      </div>
      <ul className=" d-flex my-auto mx-auto">
        <li className=" my-auto">
          <a href="#">Books</a>
        </li>
        <li className="my-auto mx-4 mx-sm-4 mx-md-4 px-md-4 mx-lg-5 px-lg-5">
          <a href="#">Cources</a>
        </li>
        <li className="my-auto">
          <a href="#">Others</a>
        </li>
        <li className="my-auto mx-4 mx-sm-4 mx-md-4 px-md-4 mx-lg-5 px-lg-5">
          <a href="">Blog</a>
        </li>
        <Btn name="Sign in" />
      </ul>
    </header>
  );
};

export default Navbar;
