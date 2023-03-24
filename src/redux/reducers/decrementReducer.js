export const decrementReducer = (state, action) => {
  switch (action.payload) {
    case "Session":
      if (state.session > 60) {
        state.session -= 60;
      }

      break;
    case "Break":
      if (state.break > 60) {
        state.break -= 60;
      }

      break;
    default:
      return state;
  }
};
