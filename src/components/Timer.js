import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { setTimer } from "../redux/appSlice";

export const Timer = () => {
  const selector = useSelector((state) => state.appSliceReducer);
  const dispatch = useDispatch();
  const audio = document.getElementById("beep");

  useEffect(() => {
    if (selector.timer < 1) {
      audio.play();
    }

    if (selector.timer < 0) {
      if (selector.name === "Session") {
        dispatch(setTimer({ name: "Break", time: selector.break }));
      } else {
        dispatch(setTimer({ name: "Session", time: selector.session }));
      }
    }
  });

  const min = Math.floor(selector.timer / 60);
  const sec = selector.timer - min * 60;
  return (
    <div id="timer">
      <div id="timer-label">{selector.name}</div>
      <div id="time-left">
        {`${min >= 10 ? min : `0${min}`}:${sec >= 10 ? sec : `0${sec}`}`}
      </div>
    </div>
  );
};
