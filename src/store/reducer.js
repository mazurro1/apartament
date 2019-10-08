import * as actionTypes from "./actions";

const initialState = {
  signed: null,
  newAccount: null,
  userToken: null,
  userId: null,
  userName: null,
  userEmail: null,
  errorLogin: false,
  errorAccount: false,
  orderVisible: false,
  settingsAccountVisible: false,
  spinner: false,
  loginVisible: false,
  registrationVisible: false,
  menuVisible: false,
  errorNetwork: false,
  errorNetworkRegistration: false,
  resetPasswordVisible: false,
  errorResetPassword: null,
  changeEmailVisible: false
};

const log_out = (state, action) => {
  return {
    ...state,
    signed: null,
    newAccount: null,
    userToken: null,
    userId: null,
    userName: null,
    userEmail: null,
    errorLogin: false,
    errorAccount: false,
    orderVisible: false,
    settingsAccountVisible: false,
    spinner: false,
    loginVisible: false,
    registrationVisible: false,
    menuVisible: false,
    errorNetwork: false,
    resetPasswordVisible: false,
    errorResetPassword: null,
    changeEmailVisible: false
  };
};

const reset_password_visible = (state, action) => {
  return {
    ...state,
    resetPasswordVisible: !state.resetPasswordVisible,
    errorResetPassword: null
  };
};

const menu_visible = (state, action) => {
  return {
    ...state,
    menuVisible: !state.menuVisible
  };
};

const login_visible = (state, action) => {
  return {
    ...state,
    loginVisible: !state.loginVisible,
    registrationVisible: false,
    errorNetwork: false,
    resetPasswordVisible: false,
    errorResetPassword: null
  };
};

const registration_visible = (state, action) => {
  return {
    ...state,
    registrationVisible: !state.registrationVisible,
    loginVisible: false,
    errorNetwork: false,
    errorResetPassword: null
  };
};

const spinner = (state, action) => {
  return {
    ...state,
    spinner: action.value
  };
};

const order_visible = (state, action) => {
  return {
    ...state,
    orderVisible: !state.orderVisible,
    settingsAccountVisible: false
  };
};

const settings_account_visible = (state, action) => {
  return {
    ...state,
    settingsAccountVisible: !state.settingsAccountVisible,
    orderVisible: false
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

const is_signed = (state, action) => {
  return {
    ...state,
    signed: action.value,
    userEmail: action.email
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
    userEmail: action.email,
    signed: true
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
    userName: userName,
    userEmail: action.userName
  };
};

const error_network = (state, action) => {
  return {
    ...state,
    errorNetwork: action.value
  };
};

const error_reset_password = (state, action) => {
  return {
    ...state,
    errorResetPassword: action.value
  };
};

const change_email_visible = (state, action) => {
  return {
    ...state,
    changeEmailVisible: !state.changeEmailVisible
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_PASSWORD_VISIBLE:
      return reset_password_visible(state, action);

    case actionTypes.MENU_VISIBLE:
      return menu_visible(state, action);

    case actionTypes.LOGIN_VISIBLE:
      return login_visible(state, action);

    case actionTypes.REGISTRATION_VISIBLE:
      return registration_visible(state, action);

    case actionTypes.LOG_OUT:
      return log_out(state, action);

    case actionTypes.IS_ERROR_LOGIN:
      return is_error_login(state, action);

    case actionTypes.IS_ERROR_ACCOUNT:
      return is_error_account(state, action);

    case actionTypes.IS_NEWACCOUNT:
      return is_newAccount(state, action);

    case actionTypes.IS_SIGNED:
      return is_signed(state, action);

    case actionTypes.IS_SIGNED_TOKEN:
      return is_signed_token(state, action);

    case actionTypes.CREATE_USER:
      return create_user(state, action);

    case actionTypes.ORDER_VISIBLE:
      return order_visible(state, action);

    case actionTypes.SETTINGS_ACCOUNT_VISIBLE:
      return settings_account_visible(state, action);

    case actionTypes.SPINNER:
      return spinner(state, action);

    case actionTypes.ERROR_NETWORK:
      return error_network(state, action);

    case actionTypes.ERROR_RESET_PASSWORD:
      return error_reset_password(state, action);

    case actionTypes.CHANGE_EMAIL_VISIBLE:
      return change_email_visible(state, action);

    default:
      return state;
  }
};
export default reducer;
