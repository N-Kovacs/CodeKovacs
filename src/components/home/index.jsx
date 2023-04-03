import { useState } from "react";

import reactLogo from "../../assets/react.svg";

import "./Home.css";

export default function Home(props) {
  const [btnState, setBtnState] = useState("TOOLS");
  const [hoverImageState, setHoverImageState] = useState("url('./madcap.png')")

  const clicked = () => {
    props.transition(btnState);
  };

  const divStyle = {
    backgroundImage: hoverImageState
  };

  return (
    <div>
      <div>
        <h1>CodeKovacs</h1>
      </div>
      <div id="menu" className="menu" style = {divStyle}>
        <div id="menu-items">
          <a className="menu-item" onMouseEnter = {() => setHoverImageState("url('./madcap.png')")}>Projects</a>
          <a className="menu-item" onClick={clicked} onMouseEnter = {() => setHoverImageState("url('./github.png')")} >
            Tools
          </a>
          <a className="menu-item" onClick={clicked}>
            Links
          </a>
        </div>
      </div>

      <h3>Built with Vite + React</h3>
    </div>
  );
}
