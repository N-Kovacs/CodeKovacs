import { useState } from "react";
import Madcap from "./madcap";

import "./projects.css";

export default function Projects(props) {
  const [btnState, setBtnState] = useState("HOME");
  const [hoverImageState, setHoverImageState] = useState("");
  const [display, setDisplay] = useState("");

  const MADCAP = "MADCAP";
  const clicked = () => {
    props.transition(btnState);
  };
  const clickedcontent = () => {
    setDisplay(btnState);
  };
  const divStyle = {
    backgroundImage: hoverImageState,
  };

  return (
    <div>
      <div id="menu" className="menu" style={divStyle}>
        <div id="menu-items">
          <a
            className="menu-item"
            onClick={clickedcontent}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("MADCAP");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            MadCap
          </a>
          {display === MADCAP && <Madcap />}
          <a
            className="menu-item"
            onClick={clickedcontent}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("MADCAP");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            CodeKovacs
          </a>
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("HOME");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            Back
          </a>
        </div>
      </div>
      ;
    </div>
  );
}
