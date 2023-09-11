import React from "react";
import "./Projects.css";
import PhotographerProject from "./photographer-project.png";
import WorldClockProject from "./world-clock-project.png";
import DictionaryProject from "./dictionary-project.png";
import TravelProject from "./travel-project.png";
import WeatherProject from "./weather-project.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h1>My Projects</h1>
      <ul>
        <li>
          <div className="card">
            <a
              href="https://dictionary-project-123.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DictionaryProject}
                className="card-img-top"
                alt="Dictionary app"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Dictionary App</h5>
              <p className="card-text">
                A responsive dictionary app that displays any word's definition
                as well as images using Pexels API.
              </p>
              <button>React.js</button>
              <button>API</button>
              <br />
              <a
                href="https://dictionary-project-123.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to Dictionary App
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <a
              href="https://weather-forecast-project123.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={WeatherProject}
                class="card-img-top"
                alt="weather forecast app"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                A responsive weather app that displays any city's live weather
                as well as the forecast for the week, with icons.
              </p>
              <button>React.js</button>
              <button>API</button>
              <br />
              <a
                href="https://weather-forecast-project123.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to Weather App
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <a
              href="https://travel-yerevan.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TravelProject}
                class="card-img-top"
                alt="travel project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Travel Project</h5>
              <p classNAme="card-text">
                A responsive website displaying my motherland's capital city,
                Yerevan. This website includes embeds.{" "}
              </p>
              <button>HTML</button>
              <button>Figma</button>
              <br />
              <a
                href="https://travel-yerevan.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to Travel Project
              </a>
            </div>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="card">
            <a
              href="https://world-clock-project-3.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={WorldClockProject}
                className="card-img-top"
                alt="world clock project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">World Clock Project</h5>
              <p className="card-text">
                A responsive world clock app that displays the live timing of a
                few cities. This project uses moment.js.
              </p>
              <button>HTML</button>
              <button>Moment.js</button> <br />
              <a
                href="https://world-clock-project-3.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to World Clock Project
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="card">
            <a
              href="https://photographer-portfolio-project123.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={PhotographerProject}
                className="card-img-top"
                alt="photographer portfolio project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Photographer Portfolio Project</h5>
              <p className="card-text">
                A resonsive website that showcases the portfolio of a
                photographer and includes multiple pages.
              </p>
              <button>HTML</button>
              <button>Figma</button>
              <br />
              <a
                href="https://photographer-portfolio-project123.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to Portfolio Project
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
