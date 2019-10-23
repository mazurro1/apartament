import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../store/actionTypes";
import {
  checkAuthTimeoutSaga,
  logOutSaga,
  authSaga,
  authChechStateSaga,
  authCheckPasswordSaga,
  onAuthResetPasswordSaga,
  deleteAccountSaga,
  changeEmailSaga,
  changePasswordSaga
} from "./auth";

import {
  getDisabledDataSaga,
  getOrderSaga,
  addNewDisabledDataSaga,
  addNewOrderSaga
} from "./content";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.LOG_OUT_SAGA, logOutSaga),
    takeEvery(actionTypes.CHECK_TIMEOUT_SAGA, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_SAGA, authSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE_SAGA, authChechStateSaga),
    takeEvery(actionTypes.AUTH_CHECK_PASSWORD_SAGA, authCheckPasswordSaga),
    takeEvery(actionTypes.ON_AUTH_RESET_PASSWORD_SAGA, onAuthResetPasswordSaga),
    takeEvery(actionTypes.DELETE_ACCOUNT_SAGA, deleteAccountSaga),
    takeEvery(actionTypes.CHANGE_EMAIL_SAGA, changeEmailSaga),
    takeEvery(actionTypes.CHANGE_PASSWORD_SAGA, changePasswordSaga)
  ]);
}

export function* content() {
  yield all([
    takeEvery(actionTypes.GET_DISABLED_DATA_SAGA, getDisabledDataSaga),
    takeEvery(actionTypes.GET_ORDER_SAGA, getOrderSaga),
    takeEvery(actionTypes.ADD_NEW_DISABLED_DATA_SAGA, addNewDisabledDataSaga),
    takeEvery(actionTypes.ADD_NEW_ORDER_SAGA, addNewOrderSaga)
  ]);
}
