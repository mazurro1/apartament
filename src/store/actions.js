import * as actionTypes from "./actionTypes";

export const log_out = () => {
  return {
    type: actionTypes.LOG_OUT_SAGA
  };
};

export const log_out_success = () => {
  return {
    type: actionTypes.LOG_OUT
  };
};

export const delete_account_confirm = () => {
  return {
    type: actionTypes.DELETE_ACCOUNT_CONFIRM
  };
};

export const bad_password = value => {
  return {
    type: actionTypes.BAD_PASSWORD,
    value: value
  };
};

export const change_password_bool = value => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    value: value
  };
};

export const change_password_visible = () => {
  return {
    type: actionTypes.CHANGE_PASSWORD_VISIBLE
  };
};

export const change_email_bool = value => {
  return {
    type: actionTypes.CHANGE_EMAIL,
    value: value
  };
};

export const change_email_busy = value => {
  return {
    type: actionTypes.CHANGE_EMAIL_BUSY,
    value: value
  };
};

export const delete_account_bool = value => {
  return {
    type: actionTypes.DELETE_ACCOUNT,
    value: value
  };
};

export const login_validation_change = value => {
  return {
    type: actionTypes.LOGIN_VALIDATION_CHANGE,
    value: value
  };
};

export const registration_validation_change = value => {
  return {
    type: actionTypes.REGISTRATION_VALIDATION_CHANGE,
    value: value
  };
};

export const reset_password_visible = () => {
  return {
    type: actionTypes.RESET_PASSWORD_VISIBLE
  };
};

export const menu_visible = () => {
  return {
    type: actionTypes.MENU_VISIBLE
  };
};

export const login_visible = () => {
  return {
    type: actionTypes.LOGIN_VISIBLE
  };
};

export const registration_visible = () => {
  return {
    type: actionTypes.REGISTRATION_VISIBLE
  };
};

export const spinner = value => {
  return {
    type: actionTypes.SPINNER,
    value: value
  };
};

export const order_visible = () => {
  return {
    type: actionTypes.ORDER_VISIBLE
  };
};

export const settings_account_visible = () => {
  return {
    type: actionTypes.SETTINGS_ACCOUNT_VISIBLE
  };
};

export const change_email_visible = () => {
  return {
    type: actionTypes.CHANGE_EMAIL_VISIBLE
  };
};

export const is_error_login = value => {
  return {
    type: actionTypes.IS_ERROR_LOGIN,
    value: value
  };
};

export const is_error_account = value => {
  return {
    type: actionTypes.IS_ERROR_ACCOUNT,
    value: value
  };
};

export const is_signed_token = (token, userId, email) => {
  return {
    type: actionTypes.IS_SIGNED_TOKEN,
    token: token,
    userId: userId,
    email: email
  };
};

export const is_signed = (value, email) => {
  return {
    type: actionTypes.IS_SIGNED,
    value: value,
    email: email
  };
};

export const is_newAccount = value => {
  return {
    type: actionTypes.IS_NEWACCOUNT,
    value: value
  };
};

export const create_user = (userToken, userId, userName) => {
  return {
    type: actionTypes.CREATE_USER,
    userToken: userToken,
    userId: userId,
    userName: userName
  };
};

export const error_network = value => {
  return {
    type: actionTypes.ERROR_NETWORK,
    value: value
  };
};

export const error_reset_password = value => {
  return {
    type: actionTypes.ERROR_RESET_PASSWORD,
    value: value
  };
};

export const checkAuthTimeout = experationTime => {
  return {
    type: actionTypes.CHECK_TIMEOUT_SAGA,
    experationTime: experationTime
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_SAGA,
    email: email,
    password: password,
    isSignUp: isSignUp
  };
};

export const authChechState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE_SAGA
  };
};

export const authCheckPassword = (
  email,
  password,
  userToken,
  newEmail,
  newPassword
) => {
  return {
    type: actionTypes.AUTH_CHECK_PASSWORD_SAGA,
    email: email,
    password: password,
    userToken: userToken,
    newEmail: newEmail,
    newPassword: newPassword
  };
};

export const onAuth_Reset_Password = email => {
  return {
    type: actionTypes.ON_AUTH_RESET_PASSWORD_SAGA,
    email: email
  };
};

export const delete_account = userToken => {
  return {
    type: actionTypes.DELETE_ACCOUNT_SAGA,
    userToken: userToken
  };
};

export const change_email = (userId, newEmail) => {
  return {
    type: actionTypes.CHANGE_EMAIL_SAGA,
    userId: userId,
    newEmail: newEmail
  };
};

export const change_password = (userId, newPassword) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_SAGA,
    userId: userId,
    newPassword: newPassword
  };
};

/////////////////////////////END AUTH///////////////////////////////////

export const user_orders = userOrders => {
  return {
    type: actionTypes.USER_ORDERS,
    userOrders: userOrders
  };
};

export const order_value = (
  date,
  timeDay,
  timeNight,
  filterArray,
  objectName
) => {
  return {
    type: actionTypes.ORDER_VALUE,
    date: date,
    timeDay: timeDay,
    timeNight: timeNight,
    filterArray: filterArray,
    objectName: objectName
  };
};

export const order_accept = value => {
  return {
    type: actionTypes.ORDER_ACCEPT,
    value: value
  };
};

export const refs_add = (name, refs) => {
  return {
    type: actionTypes.REFS_ADD,
    name: name,
    refs: refs
  };
};

export const buy_bool = () => {
  return {
    type: actionTypes.BUY_BOOL
  };
};

export const buy_timeout = () => {
  return {
    type: actionTypes.BUY_TIMEOUT
  };
};

export const save_all_dispatch_array = response => {
  return {
    type: actionTypes.SAVE_ALL_DISPATCH_ARRAY,
    response: response
  };
};

export const get_disabled_date = () => {
  return {
    type: actionTypes.GET_DISABLED_DATA_SAGA
  };
};

export const get_order = (userId, userToken) => {
  return {
    type: actionTypes.GET_ORDER_SAGA,
    userId: userId,
    userToken: userToken
  };
};

export const add_new_disabled_data = (
  date,
  timeDay,
  timeNight,
  actualReservation,
  actualObjectName,
  userId,
  disabledDataValue,
  price
) => {
  return {
    type: actionTypes.ADD_NEW_DISABLED_DATA_SAGA,
    date: date,
    timeDay: timeDay,
    timeNight: timeNight,
    actualReservation: actualReservation,
    actualObjectName: actualObjectName,
    userId: userId,
    disabledDataValue: disabledDataValue,
    price: price
  };
};

export const add_new_order = (
  price,
  date,
  timeDay,
  timeNight,
  actualReservation,
  actualObjectName,
  userId,
  disabledDataValue
) => {
  return {
    type: actionTypes.ADD_NEW_ORDER_SAGA,
    price: price,
    date: date,
    timeDay: timeDay,
    timeNight: timeNight,
    actualReservation: actualReservation,
    actualObjectName: actualObjectName,
    userId: userId,
    disabledDataValue: disabledDataValue
  };
};

export const add_new_order_reducer = authData => {
  return {
    type: actionTypes.ADD_NEW_ORDER_REDUCER,
    authData: authData
  };
};
