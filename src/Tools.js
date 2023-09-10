import React from "react";
import "./Tools.css";
import GitHubIcon from "./github-icon.jpeg";
import VSCodeLogo from "./VSCode-logo.png";
import NetlifyLogo from "./netlify-logo.png";

export default function Tools() {
  return (
    <div className="Tools">
      <h1> The tools I use</h1>
      <p>The online tools I use in order to create my projects are:</p>
      <ul>
        <li>
          <img src={VSCodeLogo} alt="VSCode logo" width="100px" />
          <div className="text-center">VS Code</div>
        </li>
        <li>
          <img src={GitHubIcon} alt="Github logo" width="100px" />
          <div className="text-center">GitHub</div>
        </li>
        <li>
          <img src={NetlifyLogo} alt="Netlify logo " width="100px" />
          <div className="text-center">Netlify</div>
        </li>
      </ul>
    </div>
  );
}
