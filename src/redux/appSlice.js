import { createSlice } from "@reduxjs/toolkit";
import { incrementReducer } from "./reducers/incrementReducer";
import { decrementReducer } from "./reducers/decrementReducer";
import { setDefaultReducer } from "./reducers/setDefaultReducer";
import { startCountdownReducer } from "./reducers/startCountdownReducer";
import { setTimerReducer } from "./reducers/setTimerReducer";
import { statusReducer } from "./reducers/statusReducer";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    name: "Session",
    session: 1500,
    break: 300,
    timer: 1500,
    status: "Session",
  },
  reducers: {
    increment: (state, action) => incrementReducer(state, action),
    decrement: (state, action) => decrementReducer(state, action),
    setDefault: (state, action) => setDefaultReducer(state, action),
    startCountdown: (state) => startCountdownReducer(state),
    setTimer: (state, action) => setTimerReducer(state, action),
    status: (state, action) => statusReducer(state, action),
  },
});

export const {
  decrement,
  increment,
  setDefault,
  startCountdown,
  setTimer,
  status,
} = appSlice.actions;
