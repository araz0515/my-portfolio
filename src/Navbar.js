import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-expand-lg  custom-navbar"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#topHeader">
            Araz Kubtanjian
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="#topHeader">
                Home
              </a>
              <a className="nav-link" href="/Projects.js #projectsLink">
                My Projects
              </a>
              <a className="nav-link" href="/AboutMe #aboutMe">
                About Me
              </a>
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1ZPI20fPr7MiKdBpo8FzqN6Y-AjVFh7OO/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
