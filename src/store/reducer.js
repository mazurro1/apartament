import * as actionTypes from "./actions";

const initialState = {
  login: null,
  signed: null,
  newAccount: null,
  token: null,
  userId: null,
  error: false
};

const log_out = (state, action) => {
  return {
    ...state,
    login: null,
    signed: null,
    newAccount: null,
    token: null,
    userId: null,
    error: false
  };
};

const is_error = (state, action) => {
  return {
    ...state,
    error: action.value
  };
};

const is_login = (state, action) => {
  return {
    ...state,
    login: true
  };
};

const is_signed = (state, action) => {
  return {
    ...state,
    signed: action.value
  };
};

const is_registration = (state, action) => {
  return {
    ...state,
    login: false
  };
};

const is_newAccount = (state, action) => {
  return {
    ...state,
    newAccount: action.value
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return is_login(state, action);

    case actionTypes.LOG_OUT:
      return log_out(state, action);

    case actionTypes.IS_ERROR:
      return is_error(state, action);

    case actionTypes.IS_NEWACCOUNT:
      return is_newAccount(state, action);

    case actionTypes.IS_SIGNED:
      return is_signed(state, action);

    case actionTypes.IS_REGISTRATION:
      return is_registration(state, action);
    default:
      return state;
  }
};
export default reducer;
