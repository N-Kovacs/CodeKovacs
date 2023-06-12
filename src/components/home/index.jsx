import { useState, useEffect } from "react";

// import reactLogo from "../../assets/react.svg";

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
        <h2 id="title">
          A WIP collection website for the projects of Nicholas Kovacs
        </h2>
        <h3 id="title">Content shown here is in an early progress state</h3>
      </div>
      <div id="menu" className="menu" style={divStyle}>
        <div id="menu-items">
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
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
              setHoverImageState("url('./links.png')");
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
              setHoverImageState("url('./tools.png')");
              setBtnState("TOOLS");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            Tools
          </a>
        </div>
      </div>

      <h3>Built with Vite + React</h3>
    </div>
  );
}
