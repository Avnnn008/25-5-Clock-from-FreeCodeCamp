import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  status,
  startCountdown,
  setDefault,
  setTimer,
} from "../redux/appSlice";
import s from './timerControl.module.css'

export const TimerControl = () => {
  const selector = useSelector((state) => state.appSliceReducer);
  const [isStart, setIsStart] = useState(true);
  const dispatch = useDispatch();
  let timer = useRef(null);
  const audio = document.getElementById("beep");

  const startStopHandler = () => {
    setIsStart((prev) => !prev);
    if (isStart) {
      dispatch(status("on"));
      startTimer();
    } else {
      dispatch(status(selector.name));
      clearInterval(timer.current);
    }
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      dispatch(startCountdown());
    }, 1000);
  };

  const resetHandler = () => {
    audio.pause();
    audio.load();
    dispatch(status("Session"));
    clearInterval(timer.current);
    dispatch(setDefault("Session"));
    dispatch(setDefault("Break"));
    dispatch(setTimer({ name: "Session", time: 1500 }));
    setIsStart(true);
  };

  return (
    <div className={s.timerControl}>
      <button onClick={startStopHandler}>
        {!isStart ? (
          <i className="fa-solid fa-pause" />
        ) : (
          <i className="fa-solid fa-play" />
        )}
      </button>
      <button onClick={resetHandler}>
        <i className="fa-solid fa-arrows-rotate" />
      </button>
    </div>
  );
};
