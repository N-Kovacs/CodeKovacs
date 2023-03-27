import { useState } from "react";

export default function Projects(props) {
  const [btnState, setBtnState] = useState("HOME");
  const clicked = () => {
    props.transition(btnState);
  };

  return (
    <div>
      Hello There
      <div id="menu-items">
        <a
          className="menu-item"
          onClick={clicked}
          onMouseEnter={(ev) => {
            setHoverImageState("url('./projects.png')");
            setBtnState("MADCAP");
            // console.log("Projects");
          }}
          onMouseLeave={() => setHoverImageState("")}
        >
          MadCap
        </a>
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
          Back
        </a>
      </div>
      ;
    </div>
  );
}
