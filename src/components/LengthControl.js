import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setTimer } from "../redux/appSlice";

export const LengthControl = (props) => {
  const selector = useSelector((state) => state.appSliceReducer);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    if (selector.status !== "on") {
      if (props.name === "session") {
        dispatch(decrement("Session"));
        if (selector.status === "Session") {
          dispatch(
            setTimer({
              name: "Session",
              time: selector.session - 60,
            })
          );
        }
      } else {
        dispatch(decrement("Break"));
        if (selector.status === "Break") {
          dispatch(
            setTimer({
              name: "Break",
              time: selector.break - 60,
            })
          );
        }
      }
    }
  };

  const incrementHandler = () => {
    if (selector.status !== "on") {
      if (props.name === "session") {
        dispatch(increment("Session"));
        if (selector.status === "Session") {
          dispatch(
            setTimer({
              name: "Session",
              time: selector.session + 60,
            })
          );
        }
      } else {
        dispatch(increment("Break"));
        if (selector.status === "Break") {
          dispatch(
            setTimer({
              name: "Break",
              time: selector.break + 60,
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
        {props.name === "session" ? selector.session / 60 : selector.break / 60}
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
