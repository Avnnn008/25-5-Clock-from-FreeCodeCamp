import { useDispatch, useSelector } from "react-redux";
import { sessionActions, breakActions, timerActions, statusActions } from ".";
import React, { useState, useRef, useEffect } from "react";

export default function App() {
  return (
    <div id="app">
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <>
      <div id="title">Session & Break Timer</div>
      <LengthControl name="break" />
      <LengthControl name="session" />
      <Timer />
      <TimerControl />
    </>
  );
};

const LengthControl = (props) => {
  const sessionSelector = useSelector((state) => state.sessionSliceReducer);
  const breakSelector = useSelector((state) => state.breakSliceReducer);
  const statusSelector = useSelector((state) => state.statusSliceReducer);

  const dispatch = useDispatch();

  const decrementHandler = () => {
    if (statusSelector.status !== "on") {
      if (props.name === "session") {
        dispatch(sessionActions.decrement());
        if (statusSelector.status === "Session") {
          dispatch(
            timerActions.set({
              name: "Session",
              time: sessionSelector.time - 60,
            })
          );
        }
      } else {
        dispatch(breakActions.decrement());
        if (statusSelector.status === "Break") {
          dispatch(
            timerActions.set({
              name: "Break",
              time: breakSelector.time - 60,
            })
          );
        }
      }
    }
  };

  const incrementHandler = () => {
    if (statusSelector.status !== "on") {
      if (props.name === "session") {
        dispatch(sessionActions.increment());
        if (statusSelector.status === "Session") {
          dispatch(
            timerActions.set({
              name: "Session",
              time: sessionSelector.time + 60,
            })
          );
        }
      } else {
        dispatch(breakActions.increment());
        if (statusSelector.status === "Break") {
          dispatch(
            timerActions.set({
              name: "Break",
              time: breakSelector.time + 60,
            })
          );
        }
      }
    }
  };

  return (
    <div id="length-control">
      <div id={`${props.name}-label`} className="label">
        {props.name} Length
      </div>
      <button
        id={`${props.name}-decrement`}
        className="btn-length-control decrement"
        onClick={decrementHandler}
      >
        <i className="fa-solid fa-arrow-down" />
      </button>
      <div id={`${props.name}-length`} className="btn-length-control length">
        {props.name === "session"
          ? sessionSelector.time / 60
          : breakSelector.time / 60}
      </div>
      <button
        id={`${props.name}-increment`}
        className="btn-length-control increment"
        onClick={incrementHandler}
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </div>
    
  );
};

const Timer = () => {
  const timerSelector = useSelector((state) => state.timerSliceReducer);
  const breakSelector = useSelector((state) => state.breakSliceReducer);
  const sessionSelector = useSelector((state) => state.sessionSliceReducer);
  const dispatch = useDispatch();
  const audio = document.getElementById("beep");
 
  useEffect(() => {
   if (timerSelector.time <1) {
    audio.play()
  }

  if (timerSelector.time < 0) {
    if (timerSelector.name === "Session") {
      dispatch(timerActions.set({ name: "Break", time: breakSelector.time }));
    } else {
      dispatch(
        timerActions.set({ name: "Session", time: sessionSelector.time })
      );
    }
  }
  }, );

  
  const min = Math.floor(timerSelector.time / 60);
  const sec = timerSelector.time - min * 60;
  return (
    <div id="timer">
      <div id="timer-label">{timerSelector.name}</div>
      <div id="time-left">
        {`${min >= 10 ? min : `0${min}`}:${sec >= 10 ? sec : `0${sec}`}`}
      </div>
    </div>
  );
};

const TimerControl = () => {
  const timerSelector = useSelector((state) => state.timerSliceReducer)
  const [isStart, setIsStart] = useState(true);
  const dispatch = useDispatch();
  let timer = useRef(null);
  const audio = document.getElementById("beep");

  const startStopHandler = () => {
    setIsStart((prev) => !prev);
    if (isStart) {
      dispatch(statusActions.set('on'));
      startTimer();
    } else {
      dispatch(statusActions.set(timerSelector.name));
      clearInterval(timer.current);
    }
  };

  const startTimer = () => {
    timer.current = setInterval(() => {
      dispatch(timerActions.start());
    }, 1000);
  };

  const resetHandler = () => {
    audio.pause();
    audio.load()
    dispatch(statusActions.set("Session"));
    clearInterval(timer.current);
    dispatch(sessionActions.set());
    dispatch(breakActions.set());
    dispatch(timerActions.set({ name: "Session", time: 1500 }));
    setIsStart(true);
  };

  return (
    <div id="timer-control">
      <button id="start_stop" onClick={startStopHandler}>
        {!isStart ? (
          <i className="fa-solid fa-pause" />
        ) : (
          <i className="fa-solid fa-play" />
        )}
      </button>
      <button id="reset" onClick={resetHandler}>
        <i className="fa-solid fa-arrows-rotate" />
      </button>
    </div>
  );
};
