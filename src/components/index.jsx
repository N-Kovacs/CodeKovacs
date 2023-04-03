import { useState, useEffect, useRef } from "react";
import useVisualMode from "../hooks/useVisualMode";

import Home from "./home";
import Tools from "./tools";
import Projects from "./projects";

export default function Index() {
  const HOME = "HOME";
  const PROJECTS = "PROJECTS";
  const LINKS = "LINKS";
  const TOOLS = "TOOLS";

  const { mode, transition } = useVisualMode(HOME);

  return (
    <div>
      {mode === HOME && <Home transition={transition} />}
      {mode === PROJECTS && <Projects transition={transition} />}
      {mode === LINKS && <Links transition={transition} />}
      {mode === TOOLS && <Tools transition={transition} />}
    </div>
  );
}
