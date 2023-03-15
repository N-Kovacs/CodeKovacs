import { useState, useEffect } from "react";

import reactLogo from "../../assets/react.svg";

import "./Home.css";

export default function Home(props) {
  const [btnState, setBtnState] = useState("");
  const [hoverImageState, setHoverImageState] = useState("");

  const clicked = () => {
    props.transition(btnState);
  };

  const divStyle = {
    backgroundImage: hoverImageState,
  };

  return (
    <div>
      <div>
        <h1 id="title">CodeKovacs</h1>
      </div>
      <div id="menu" className="menu" style={divStyle}>
        <div id="menu-items">
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./madcap.png')");
              setBtnState("PROJECTS");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            Projects
          </a>
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./github.png')");
              setBtnState("LINKS");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            Links
          </a>
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./github.png')");
              setBtnState("TOOLS");
            }}
          >
            Tools
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
