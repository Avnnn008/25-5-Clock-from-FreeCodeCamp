import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, setTimer } from "../redux/appSlice";
import s from './lengthControl.module.css'

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
    <div>
      <div className={s.label}>
        {props.name} Length
      </div>
      <div className={s.buttonsLine}>
        <button
        onClick={decrementHandler}
      >
        <i className="fa-solid fa-arrow-down" />
      </button>
      <div className={s.length}>
        {props.name === "session" ? selector.session / 60 : selector.break / 60}
      </div>
      <button
        onClick={incrementHandler}
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
      </div>
      
    </div>
  );
};
