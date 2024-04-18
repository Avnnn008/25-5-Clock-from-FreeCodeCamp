import React from "react";
import { LengthControl } from "./components/LengthControl.js";
import { Timer } from "./components/Timer.js";
import { TimerControl } from "./components/TimerControl";
import s from './app.module.css'

export default function App() {
  return (
    <div className={s.app}>
      <div className={s.title}>Session & Break Timer</div>
      <div className={s.controllers}>
        <LengthControl name="break" />
        <LengthControl name="session" />
      </div>
      <Timer />
      <TimerControl />
    </div>
  );
}
