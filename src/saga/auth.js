import { delay } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";
import * as actions from "../store/actions";
import axios from "axios";

export function* logOutSaga(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "userId");
  // yield localStorage.removeItem("token");
  // yield localStorage.removeItem("expirationDate");
  // yield localStorage.removeItem("userId");
  yield put(actions.log_out_success());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.experationTime * 1000);
  yield put(actions.log_out());
}

export function* authSaga(action) {
  yield put(actions.spinner(true));
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url = //link, jeżeli uzytkownik chce zrobić konto
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  if (!action.isSignUp) {
    url = //link jeżeli uzytkownik chce się zalogować
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";
  }
  try {
    const response = yield axios.post(url, authData);

    yield put(actions.spinner(false));
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield call([localStorage, "setItem"], "token", response.data.idToken);
    yield call([localStorage, "setItem"], "expirationDate", expirationDate);
    yield call([localStorage, "setItem"], "userId", response.data.localId);

    // yield localStorage.setItem("token", response.data.idToken);
    // yield localStorage.setItem("expirationDate", expirationDate);
    // yield localStorage.setItem("userId", response.data.localId);

    yield put(actions.checkAuthTimeout(response.data.expiresIn));
    if (!action.isSignUp) {
      yield put(actions.is_signed(true, action.email));
      yield put(actions.is_error_login(false));
      yield put(actions.login_visible());
    } else {
      yield put(actions.is_error_account(false));
      yield put(actions.login_visible());
      yield put(actions.is_newAccount(true));
    }
    yield put(
      actions.create_user(
        response.data.idToken,
        response.data.localId,
        response.data.email
      )
    );
    yield put(actions.get_order(response.data.localId, response.data.idToken));
  } catch (error) {
    yield put(actions.error_network(false));
    yield put(actions.spinner(false));
    if (!action.isSignUp) {
      yield put(actions.is_signed(false, null));
      if (error.request.status === 0) {
        yield put(actions.error_network(true));
      } else {
        yield put(actions.is_error_login(true));
      }
    } else {
      yield put(actions.is_newAccount(false));
      if (error.request.status === 0) {
        yield put(actions.error_network(true));
      } else {
        yield put(actions.is_error_account(true));
      }
    }
  }
}

export function* authChechStateSaga(action) {
  yield put(actions.spinner(true));

  const token = yield call([localStorage, "getItem"], "token");
  if (!token) {
    yield put(actions.log_out());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );

    if (expirationDate <= new Date()) {
      yield put(actions.log_out());
    } else {
      const userId = yield call([localStorage, "getItem"], "userId");
      const authData = {
        idToken: token
      };
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

      try {
        const response = yield axios.post(url, authData);
        const email = yield response.data.users[0].email;
        yield put(actions.is_signed_token(token, userId, email));
        yield put(actions.spinner(false));
        yield put(actions.get_order(userId, token));
      } catch (error) {
        yield put(actions.spinner(false));
      }
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}

export function* authCheckPasswordSaga(action) {
  yield put(actions.spinner(true));
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };

  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  try {
    const response = yield axios.post(url, authData);

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );

    yield call([localStorage, "setItem"], "token", response.data.idToken);
    yield call([localStorage, "setItem"], "expirationDate", expirationDate);
    yield call([localStorage, "setItem"], "userId", response.data.localId);
    yield put(actions.checkAuthTimeout(response.data.expiresIn));

    yield put(
      actions.create_user(
        response.data.idToken,
        response.data.localId,
        response.data.email
      )
    );
    if (action.newPassword || action.newEmail) {
      if (action.newPassword) {
        yield put(
          actions.change_password(response.data.idToken, action.newPassword)
        );
      } else {
        yield put(actions.change_email(response.data.idToken, action.newEmail));
      }
    } else {
      yield put(actions.delete_account(response.data.idToken));
    }
  } catch (error) {
    yield put(actions.bad_password(true));
    yield put(actions.spinner(false));
  }
}

export function* onAuthResetPasswordSaga(action) {
  yield put(actions.spinner(true));

  const authData = {
    requestType: "PASSWORD_RESET",
    email: action.email
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  try {
    yield axios.post(url, authData);
    yield put(actions.error_reset_password(true));
    yield put(actions.spinner(false));
  } catch (error) {
    if (error.request.status === 0) {
      yield put(actions.error_network(true));
    } else {
      yield put(actions.error_reset_password(false));
    }
    yield put(actions.spinner(false));
  }
}

export function* deleteAccountSaga(action) {
  yield put(actions.spinner(true));

  const authData = {
    idToken: action.userToken
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  try {
    yield axios.post(url, authData);
    yield put(actions.spinner(false));
    yield put(actions.log_out());
    yield put(actions.delete_account_bool(true));
  } catch (error) {
    if (error.request.status === 0) {
      yield put(actions.error_network(true));
    } else {
    }
    yield put(actions.spinner(false));
  }
}

export function* changeEmailSaga(action) {
  yield put(actions.spinner(true));

  const authData = {
    idToken: action.userId,
    email: action.newEmail,
    returnSecureToken: true
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield call([localStorage, "setItem"], "token", response.data.idToken);
    yield call([localStorage, "setItem"], "expirationDate", expirationDate);
    yield call([localStorage, "setItem"], "userId", response.data.localId);

    yield put(actions.checkAuthTimeout(response.data.expiresIn));
    yield put(
      actions.create_user(
        response.data.idToken,
        response.data.localId,
        response.data.email
      )
    );
    yield put(actions.change_email_visible());
    yield put(actions.change_email_bool(true));
    yield put(actions.change_email_busy(false));
    yield put(actions.spinner(false));
  } catch (error) {
    if (error.request.status === 0) {
      yield put(actions.error_network(true));
    } else {
      yield put(actions.change_email_busy(true));
    }
    yield put(actions.spinner(false));
  }
}

export function* changePasswordSaga(action) {
  yield put(actions.spinner(true));
  const authData = {
    idToken: action.userId,
    password: action.newPassword,
    returnSecureToken: true
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

  try {
    const response = yield axios.post(url, authData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );

    yield call([localStorage, "setItem"], "token", response.data.idToken);
    yield call([localStorage, "setItem"], "expirationDate", expirationDate);
    yield call([localStorage, "setItem"], "userId", response.data.localId);
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
    yield put(actions.change_password_bool(true));
    yield put(actions.change_password_visible());
    yield put(actions.spinner(false));
  } catch (error) {
    yield put(actions.change_password_bool(false));
    if (error.request.status === 0) {
      yield put(actions.error_network(true));
    } else {
    }
    yield put(actions.spinner(false));
  }
}
