import { useState, useEffect, useRef } from "react";
import useVisualMode from "../hooks/useVisualMode";

import Home from "./home"
import Tools from "./tools"

export default function Index() {
  const HOME = "HOME"
  const TOOLS = "TOOLS"
  const { mode, transition } = useVisualMode(TOOLS);

  return (
    <div>
      Index
      {mode === HOME && (<Home />)}
      {mode === TOOLS && (<Tools />)}
    </div>
  )

}