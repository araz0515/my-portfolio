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
      <header className="App-header">
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
          <li>Home</li>
          <li>My Projects</li>
          <li>About me</li>
          <li>My Resume</li>
        </ul>
        <ul className="d-flex justify-content-center socials">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
