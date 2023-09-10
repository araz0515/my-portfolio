import React from "react";
import "./AboutMe.css";
import myPhoto from "./myPhoto.jpg";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="row">
        <div className="col-md-6">
          <img src={myPhoto} alt="this is me" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>About Me</h1>
          <p>
            My name is Araz Kubtanjian. I'm a Junior Front-end Developer who's
            passionate about technology. I have an adverse educational
            background, where I've studied in the domains of science as well as
            real estate. However I was never devoted to any career path until
            now. Software development has captured my heart and I'm now a
            devoted aspiring front-end developer hoping to build a career and
            improve my coding skills along the way.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
