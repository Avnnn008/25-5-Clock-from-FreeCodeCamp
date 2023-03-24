import React from "react";
import { LengthControl } from "./components/LengthControl.js";
import { Timer } from "./components/Timer.js";
import { TimerControl } from "./components/TimerControl";

export default function App() {
  return (
    <div id="app">
      <div id="title">Session & Break Timer</div>
      <LengthControl name="break" />
      <LengthControl name="session" />
      <Timer />
      <TimerControl />
    </div>
  );
}
