import * as actionTypes from "./actionTypes";

const initialState = {
  //START AUTH//
  signed: null,
  newAccount: false,
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
  changeEmailVisible: false,
  changePasswordVisible: false,
  registrationValidation: false,
  loginValidation: false,
  deleteAccountConfirm: false,
  deleteAccount: false,
  changeEmail: false,
  changeEmailBusy: false,
  changePassword: null,
  badPassword: null,
  buy: false,
  animationTiming: {
    enter: 500,
    exit: 400
  },
  //END AUTH//
  disabledDate: null,
  disabledDataValue: null,
  orderAccept: false,
  orderValue: {
    date: null,
    timeDay: null,
    timeNight: null,
    filterArray: null,
    objectName: null
  },
  userOrders: []
};

const save_all_dispatch_array = (state, action) => {
  let allArray = Object.entries(action.response);
  let allArrayValue = Object.values(action.response);
  return {
    ...state,
    disabledDate: allArray,
    disabledDataValue: allArrayValue
  };
};

const user_orders = (state, action) => {
  return {
    ...state,
    userOrders: action.userOrders
  };
};

const add_new_order_reducer = (state, action) => {
  const radomNumber = Math.floor(Math.random() * 100000000) + 1;
  const date = new Date(action.authData.date);
  const month =
    date.getMonth() + 1 < 10 ? "" + date.getMonth() + 1 : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const year = date.getFullYear();
  const newDate = `${year}-${month}-${day}`;
  let newOrder = {};
  if (action.authData.timeDay && action.authData.timeNight) {
    newOrder = {
      date: newDate,
      price: action.authData.price,
      timeDay: action.authData.timeDay,
      timeNight: action.authData.timeNight
    };
  } else {
    if (action.authData.timeDay && !action.authData.timeNight) {
      newOrder = {
        date: newDate,
        price: action.authData.price,
        timeDay: action.authData.timeDay
      };
    } else {
      newOrder = {
        date: newDate,
        price: action.authData.price,
        timeNight: action.authData.timeNight
      };
    }
  }
  const order = {
    [radomNumber]: {
      ...newOrder
    }
  };
  const userOrdersNew = { ...state.userOrders, ...order };
  return {
    ...state,
    userOrders: userOrdersNew
  };
};

const order_accept = (state, action) => {
  return {
    ...state,
    orderAccept: action.value,
    orderVisible: action.orderVisible,
    buy: false
  };
};

const order_value = (state, action) => {
  return {
    ...state,
    orderValue: {
      date: action.date,
      timeDay: action.timeDay,
      timeNight: action.timeNight,
      filterArray: action.filterArray,
      objectName: action.objectName,
      orderAccept: true
    }
  };
};

const buy_bool = (state, action) => {
  return {
    ...state,
    buy: !state.buy
  };
};

const buy_timeout = (state, action) => {
  return {
    ...state,
    buy: false
  };
};

//START AUTH//
const log_out = (state, action) => {
  return {
    ...state,
    signed: null,
    newAccount: false,
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
    changeEmailVisible: false,
    registrationValidation: false,
    loginValidation: false,
    deleteAccountConfirm: false,
    deleteAccount: false,
    changeEmail: false,
    changeEmailBusy: false,
    changePasswordVisible: false,
    changePassword: null,
    badPassword: null,
    buy: false
  };
};

const change_email = (state, action) => {
  return {
    ...state,
    changeEmail: action.value,
    errorNetwork: false
  };
};

const bad_password = (state, action) => {
  return {
    ...state,
    badPassword: action.value,
    changePassword: null
  };
};

const change_password = (state, action) => {
  return {
    ...state,
    changePassword: action.value,
    badPassword: null
  };
};

const change_password_visible = (state, action) => {
  return {
    ...state,
    changePasswordVisible: !state.changePasswordVisible,
    changeEmailVisible: false
  };
};

const change_email_busy = (state, action) => {
  return {
    ...state,
    changeEmailBusy: action.value,
    errorNetwork: false
  };
};

const delete_account = (state, action) => {
  return {
    ...state,
    deleteAccount: action.value
  };
};

const delete_account_confirm = (state, action) => {
  return {
    ...state,
    deleteAccountConfirm: !state.deleteAccountConfirm,
    changeEmail: false,
    errorResetPassword: null
  };
};

const login_validation_change = (state, action) => {
  return {
    ...state,
    loginValidation: action.value
  };
};

const registration_validation_change = (state, action) => {
  return {
    ...state,
    registrationValidation: action.value
  };
};

const reset_password_visible = (state, action) => {
  return {
    ...state,
    resetPasswordVisible: !state.resetPasswordVisible,
    errorResetPassword: null,
    loginValidation: false,
    error_network: false
  };
};

const menu_visible = (state, action) => {
  return {
    ...state,
    menuVisible: !state.menuVisible,
    registrationVisible: false,
    loginVisible: false,
    settingsAccountVisible: false,
    orderVisible: false
  };
};

const login_visible = (state, action) => {
  return {
    ...state,
    loginVisible: !state.loginVisible,
    registrationVisible: false,
    errorNetwork: false,
    resetPasswordVisible: false,
    errorResetPassword: null,
    loginValidation: false,
    errorLogin: false,
    errorAccount: false,
    deleteAccount: false,
    newAccount: false,
    menuVisible: false
  };
};

const registration_visible = (state, action) => {
  return {
    ...state,
    registrationVisible: !state.registrationVisible,
    loginVisible: false,
    errorNetwork: false,
    errorResetPassword: null,
    registrationValidation: false,
    errorLogin: false,
    errorAccount: false,
    deleteAccount: false,
    newAccount: false,
    menuVisible: false
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
    settingsAccountVisible: false,
    deleteAccountConfirm: false,
    changeEmailVisible: false,
    changeEmail: false,
    errorResetPassword: null,
    changeEmailBusy: false,
    changePassword: null,
    buy: false,
    menuVisible: false
  };
};

const settings_account_visible = (state, action) => {
  return {
    ...state,
    settingsAccountVisible: !state.settingsAccountVisible,
    orderVisible: false,
    changeEmailVisible: false,
    deleteAccountConfirm: false,
    changeEmail: false,
    errorResetPassword: null,
    changeEmailBusy: false,
    changePasswordVisible: false,
    changePassword: null,
    buy: false,
    menuVisible: false
  };
};

const is_error_login = (state, action) => {
  return {
    ...state,
    errorLogin: action.value,
    errorNetwork: false
  };
};

const is_error_account = (state, action) => {
  return {
    ...state,
    errorAccount: action.value,
    errorNetwork: false
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
    newAccount: action.value,
    errorNetwork: false
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
    errorNetwork: action.value,
    errorAccount: false,
    errorLogin: false,
    errorResetPassword: null,
    changeEmail: null,
    changeEmailBusy: false,
    newAccount: false,
    changePassword: null,
    buy: false
  };
};

const error_reset_password = (state, action) => {
  return {
    ...state,
    errorResetPassword: action.value,
    errorNetwork: false,
    changeEmail: false
  };
};

const change_email_visible = (state, action) => {
  return {
    ...state,
    changeEmailVisible: !state.changeEmailVisible,
    changeEmail: false,
    errorResetPassword: null,
    changeEmailBusy: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //START AUTH//
    case actionTypes.RESET_PASSWORD_VISIBLE:
      return reset_password_visible(state, action);

    case actionTypes.BAD_PASSWORD:
      return bad_password(state, action);

    case actionTypes.CHANGE_PASSWORD_VISIBLE:
      return change_password_visible(state, action);

    case actionTypes.DELETE_ACCOUNT:
      return delete_account(state, action);

    case actionTypes.CHANGE_EMAIL_BUSY:
      return change_email_busy(state, action);

    case actionTypes.CHANGE_EMAIL:
      return change_email(state, action);

    case actionTypes.REGISTRATION_VALIDATION_CHANGE:
      return registration_validation_change(state, action);

    case actionTypes.DELETE_ACCOUNT_CONFIRM:
      return delete_account_confirm(state, action);

    case actionTypes.LOGIN_VALIDATION_CHANGE:
      return login_validation_change(state, action);

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

    case actionTypes.CHANGE_PASSWORD:
      return change_password(state, action);

    //END AUTH//
    case actionTypes.SAVE_ALL_DISPATCH_ARRAY:
      return save_all_dispatch_array(state, action);

    case actionTypes.ORDER_ACCEPT:
      return order_accept(state, action);

    case actionTypes.ORDER_VALUE:
      return order_value(state, action);

    case actionTypes.BUY_BOOL:
      return buy_bool(state, action);

    case actionTypes.BUY_TIMEOUT:
      return buy_timeout(state, action);

    case actionTypes.ADD_NEW_ORDER_REDUCER:
      return add_new_order_reducer(state, action);

    case actionTypes.USER_ORDERS:
      return user_orders(state, action);

    default:
      return state;
  }
};
export default reducer;
