import types from "./contact-types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD: {
      console.log("add");
      return state;
    }
    case types.DELETE:
      console.log("delete");
      return state;
    default:
      return state;
  }
};

export default reducer;
