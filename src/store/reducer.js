import * as actionTypes from "./actions";

const initialState = {
  counter: null
};

const counter_add = (state, action) => {
  return {
    ...state,
    counter: state.counter + action.number
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_ADD:
      return counter_add(state, action);

    default:
      return state;
  }
};
export default reducer;
