export const setTimerReducer = (state, action) => {
  if (action.payload.time > 0 && action.payload.time <= 3600) {
    state.name = action.payload.name;
    state.timer = action.payload.time;
  }
};
