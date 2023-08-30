import React from "react";
import "./Home.css";
import Btn from "../../Components/Btn";
const Home = () => {
  return (
    <div class="container-fluid parrot">
      <div className="container">
        <div class="row">
          <div class="col-12 col-md-6 text-center text-md-start">
            <h6 class="ready">are you ready to Learn?</h6>
            <h1 class="scedule">Learn With fun on</h1>
            <span class="any"> Any Scedule</span>
            <p class="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatem iure eaque aliquid velit aut sint?
            </p>
            <Btn name="Get Started" />
          </div>
          <div class="col-12 col-md-6">
            <img class="frame img-fluid" src="/Assets/Frame.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
