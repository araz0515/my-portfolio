import React from "react";
import "./Skills.css";
import BootstrapIcon from "./bootstrap-icon.png";
import ReactIcon from "./react-icon.png";
import FigmaIcon from "./figma-icon.png";
import ResponsiveIcon from "./responsive-icon.png";

export default function Skills() {
  return (
    <div className="Skills">
      <div className="row">
        <div className="col-md-6">
          <h1> My Skills</h1>
          <p>
            Through my coding education with SheCodes, I have developed the
            following skills:{" "}
          </p>
          <ul>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Responsive Development</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <div className="row">
            <div className="col-6">
              <img
                src={BootstrapIcon}
                alt="bootstrap icon"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <img src={ReactIcon} alt="react icon" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={FigmaIcon} alt="figma icon" className="img-fluid" />
            </div>
            <div className="col-6">
              <img
                src={ResponsiveIcon}
                alt="responsive-icon"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
