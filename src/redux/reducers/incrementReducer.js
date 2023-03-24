export const incrementReducer = (state, action) => {
  switch (action.payload) {
    case "Session":
      if (state.session < 3600) {
        state.session += 60;
      }
      break;
    case "Break":
      if (state.break < 3600) {
        state.break += 60;
      }

      break;
    default:
      return state;
  }
};
