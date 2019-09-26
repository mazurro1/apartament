import * as actionTypes from "./actions";

const initialState = {
  login: null,
  signed: null,
  newAccount: null,
  userToken: null,
  userId: null,
  userName: null,
  errorLogin: false,
  errorAccount: false
};

const log_out = (state, action) => {
  return {
    ...state,
    login: null,
    signed: null,
    newAccount: null,
    userToken: null,
    userId: null,
    userName: null,
    errorLogin: false,
    errorAccount: false
  };
};

const is_error_login = (state, action) => {
  return {
    ...state,
    errorLogin: action.value
  };
};

const is_error_account = (state, action) => {
  return {
    ...state,
    errorAccount: action.value
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

const is_signed_token = (state, action) => {
  let userName = action.email;
  let index = userName.lastIndexOf("@");
  userName = userName.slice(0, index);
  return {
    ...state,
    userToken: action.token,
    userId: action.userId,
    userName: userName,
    signed: true
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

const create_user = (state, action) => {
  let userName = action.userName;
  let index = userName.lastIndexOf("@");
  userName = userName.slice(0, index);
  return {
    ...state,
    userToken: action.userToken,
    userId: action.userId,
    userName: userName
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGIN:
      return is_login(state, action);

    case actionTypes.LOG_OUT:
      return log_out(state, action);

    case actionTypes.IS_ERROR_LOGIN:
      return is_error_login(state, action);

    case actionTypes.IS_ERROR_ACCOUNT:
      return is_error_account(state, action);

    case actionTypes.RESET_ERROR:
      return is_login(state, action);

    case actionTypes.IS_NEWACCOUNT:
      return is_newAccount(state, action);

    case actionTypes.IS_SIGNED:
      return is_signed(state, action);

    case actionTypes.IS_SIGNED_TOKEN:
      return is_signed_token(state, action);

    case actionTypes.CREATE_USER:
      return create_user(state, action);

    case actionTypes.IS_REGISTRATION:
      return is_registration(state, action);
    default:
      return state;
  }
};
export default reducer;
