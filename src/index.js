import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const breakSlice = createSlice({
  name: "break",
  initialState: {
    time: 300,
  },
  reducers: {
    increment: (state) => {
      if (state.time < 3600) {
        state.time += 60;
      }
    },
    decrement: (state) => {
      if (state.time > 60) {
        state.time -= 60;
      }
    },
    set: (state) => {
      state.time = 300;
    },
  },
});

export const breakActions = breakSlice.actions;

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    time: 1500,
  },
  reducers: {
    increment: (state) => {
      if (state.time < 3600) {
        state.time += 60;
      }
    },
    decrement: (state) => {
      if (state.time > 60) {
        state.time -= 60;
      }
    },
    set: (state) => {
      state.time = 1500;
    },
  },
});
export const sessionActions = sessionSlice.actions;

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    name: "Session",
    time: 1500,
  },
  reducers: {
    start: (state) => {
      state.name = state.name;
      state.time -= 1;
    },
    set: (state, action) => {
      if (action.payload.time > 0 && action.payload.time <= 3600) {
        state.name = action.payload.name;
        state.time = action.payload.time;
      }
    },
  },
});

export const timerActions = timerSlice.actions;



const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: "Session",
  },
  reducers: {
    set: (state, action) => {
      state.status= action.payload
    },
  },
});

export const statusActions = statusSlice.actions;



const store = configureStore({
  reducer: {
    breakSliceReducer: breakSlice.reducer,
    sessionSliceReducer: sessionSlice.reducer,
    timerSliceReducer: timerSlice.reducer,
    statusSliceReducer: statusSlice.reducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
