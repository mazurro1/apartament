import axios from "axios";
export const IS_SIGNED = "IS_SIGNED";
export const IS_SIGNED_TOKEN = "IS_SIGNED_TOKEN";
export const AUTH_START = "AUTH_START";
export const IS_NEWACCOUNT = "IS_NEWACCOUNT";
export const LOG_OUT = "LOG_OUT";
export const IS_ERROR_LOGIN = "IS_ERROR_LOGIN";
export const IS_ERROR_ACCOUNT = "IS_ERROR_ACCOUNT";
export const RESET_ERROR = "RESET_ERROR";
export const CREATE_USER = "CREATE_USER";
export const ORDER_VISIBLE = "ORDER_VISIBLE";
export const SETTINGS_ACCOUNT_VISIBLE = "SETTINGS_ACCOUNT_VISIBLE";
export const SPINNER = "SPINNER";
export const LOGIN_VISIBLE = "LOGIN_VISIBLE";
export const REGISTRATION_VISIBLE = "REGISTRATION_VISIBLE";
export const MENU_VISIBLE = "MENU_VISIBLE";
export const ERROR_NETWORK = "ERROR_NETWORK";

export const log_out = () => {
  localStorage.removeItem("token"); //usuwanie z przeglądarki tokena
  localStorage.removeItem("expirationDate"); //usuwanie z przeglądarki tokena
  localStorage.removeItem("userId");
  return {
    type: LOG_OUT
  };
};

export const menu_visible = () => {
  return {
    type: MENU_VISIBLE
  };
};

export const login_visible = () => {
  return {
    type: LOGIN_VISIBLE
  };
};

export const registration_visible = () => {
  return {
    type: REGISTRATION_VISIBLE
  };
};

export const spinner = value => {
  return {
    type: SPINNER,
    value: value
  };
};

export const order_visible = () => {
  return {
    type: ORDER_VISIBLE
  };
};

export const settings_account_visible = () => {
  return {
    type: SETTINGS_ACCOUNT_VISIBLE
  };
};

export const is_error_login = value => {
  return {
    type: IS_ERROR_LOGIN,
    value: value
  };
};

export const is_error_account = value => {
  return {
    type: IS_ERROR_ACCOUNT,
    value: value
  };
};

export const is_signed_token = (token, userId, email) => {
  return {
    type: IS_SIGNED_TOKEN,
    token: token,
    userId: userId,
    email: email
  };
};

export const is_signed = value => {
  return {
    type: IS_SIGNED,
    value: value
  };
};

export const is_newAccount = value => {
  return {
    type: IS_NEWACCOUNT,
    value: value
  };
};

export const create_user = (userToken, userId, userName) => {
  return {
    type: CREATE_USER,
    userToken: userToken,
    userId: userId,
    userName: userName
  };
};

export const error_network = value => {
  return {
    type: ERROR_NETWORK,
    value: value
  };
};

// export const reset

////////////////////////////////////////////////////

export const checkAuthTimeout = experationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(log_out());
    }, experationTime * 1000);
  };
};
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(spinner(true));
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = //link, jeżeli uzytkownik chce zrobić konto
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";
    if (!isSignUp) {
      url = //link jeżeli uzytkownik chce się zalogować
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";
    }
    axios
      .post(url, authData)
      .then(response => {
        // console.log(response);
        dispatch(spinner(false));
        // const expirationDate = 3600 * 1000;
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(checkAuthTimeout(response.data.expiresIn)); //przechwytuje nasz token, który powoduje nam zalogowanie przez godzine przez nasza funkcje
        if (!isSignUp) {
          dispatch(is_signed(true));
          dispatch(is_error_login(false));
          dispatch(login_visible());
        } else {
          dispatch(is_newAccount(true));
          dispatch(is_error_account(false));
          dispatch(login_visible());
        }
        dispatch(
          create_user(
            response.data.idToken,
            response.data.localId,
            response.data.email
          )
        );
      })
      .catch(error => {
        dispatch(error_network(false));
        dispatch(spinner(false));
        if (!isSignUp) {
          dispatch(is_signed(false));
          if (error.request.status === 0) {
            dispatch(error_network(true));
          } else {
            dispatch(is_error_login(true));
          }
        } else {
          dispatch(is_newAccount(false));
          if (error.request.status === 0) {
            dispatch(error_network(true));
            // dispatch(error_network_registration(true));
          } else {
            dispatch(is_error_account(true));
          }
        }
        // }
      });
  };
};

export const authChechState = () => {
  return dispatch => {
    dispatch(spinner(true));
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(log_out());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        dispatch(log_out());
      } else {
        const userId = localStorage.getItem("userId");

        const authData = {
          idToken: token
        };
        let url =
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

        axios
          .post(url, authData)
          .then(response => {
            const email = response.data.users[0].email;
            dispatch(is_signed_token(token, userId, email));
            dispatch(spinner(false));
          })
          .catch(error => {
            dispatch(spinner(false));
          });

        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

///////////////////////////////////////////////////
