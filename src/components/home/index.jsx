import { useState } from "react";

import reactLogo from "../../assets/react.svg";

import "./Home.css";

export default function Home(props) {
  const [btnState, setBtnState] = useState("TOOLS");

  const clicked = () => {
    props.transition(btnState);
  };

  return (
    <div>
      <div>
        <h1>CodeKovacs</h1>
      </div>
      <div id="menu">
        <div id="menu-items">
          <a className="menu-item">Projects</a>
          <a className="menu-item" onclick={clicked}>
            Tools
          </a>
          <a className="menu-item" onClick={clicked}>
            Links
          </a>
        </div>
      </div>

      <h3>Built with Vite + React</h3>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}
