import React from "react";
import "./AboutMe.css";
import myPhoto from "./myPhoto.jpg";

export default function AboutMe() {
  return (
    <div className="AboutMe container">
      <div className="row">
        <div className="col-md-6">
          <img src={myPhoto} alt="this is me" />
        </div>
        <div className="col-md-6">
          <h1>About Me</h1>
          <p>My name is Araz Kubtanjian. </p>
        </div>
      </div>
    </div>
  );
}
