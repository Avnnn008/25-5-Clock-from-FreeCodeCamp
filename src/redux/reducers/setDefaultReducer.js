export const setDefaultReducer = (state, action) => {
  switch (action.payload) {
    case "Session":
      state.session = 1500;
      break;
    case "Break":
      state.break = 300;
      break;
    default:
      return state;
  }
};
