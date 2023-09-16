import "./App.css";
import Navbar from "./Navbar";
import Tools from "./Tools";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <header className="App-header" id="topHeader">
        <h3 className="intro">Hi👋 My name is</h3>
        <h1>Araz Kubtanjian</h1>
        <h3>Junior Front-end Developer based in Montreal, Quebec</h3>
        <h3 className="about-me">
          Creating functional websites from conceptual ideas is my true vocation
        </h3>
      </header>
      <Tools />
      <AboutMe />
      <Skills />
      <Projects />
      <footer>
        <ul>
          <li>
            <a href="#topHeader">Home</a>
          </li>
          <li>
            {" "}
            <a href="#projectsLink">My Projects</a>
          </li>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1yHK48py_U8LLeP8JwIsaHzWgTg6TIC7S/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </li>
          <li>
            <a
              href="https://www.shecodes.io/graduates/90889-araz-kubtanjian"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes Profile
            </a>
          </li>
        </ul>
        <div className="row">
          <div className="col-md-6">
            <ul className="socials">
              <li>
                <a
                  href="https://github.com/araz0515"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaGithub />
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arazkubtanjian/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="mailto:arazkubtanjian@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="col-md-6">
            <p>
              This project was coded by Araz Kubtanjian and is{" "}
              <a
                href="https://github.com/araz0515/my-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                open-sourced on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
