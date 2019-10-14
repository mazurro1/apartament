/////////////////////////////AUTH///////////////////////////////////
import * as axios from "axios";
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
export const CHANGE_EMAIL_VISIBLE = "CHANGE_EMAIL_VISIBLE";
export const SPINNER = "SPINNER";
export const LOGIN_VISIBLE = "LOGIN_VISIBLE";
export const REGISTRATION_VISIBLE = "REGISTRATION_VISIBLE";
export const MENU_VISIBLE = "MENU_VISIBLE";
export const ERROR_NETWORK = "ERROR_NETWORK";
export const RESET_PASSWORD_VISIBLE = "RESET_PASSWORD_VISIBLE";
export const ERROR_RESET_PASSWORD = "ERROR_RESET_PASSWORD";
export const REGISTRATION_VALIDATION_CHANGE = "REGISTRATION_VALIDATION_CHANGE";
export const LOGIN_VALIDATION_CHANGE = "LOGIN_VALIDATION_CHANGE";
export const DELETE_ACCOUNT_CONFIRM = "DELETE_ACCOUNT_CONFIRM";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_EMAIL_BUSY = "CHANGE_EMAIL_BUSY";
/////////////////////////////END AUTH///////////////////////////////////

export const SAVE_ALL_DISPATCH_ARRAY = "SAVE_ALL_DISPATCH_ARRAY";
export const ORDER_ACCEPT = "ORDER_ACCEPT";
export const ORDER_VALUE = "ORDER_VALUE";

/////////////////////////////AUTH///////////////////////////////////
export const log_out = () => {
  localStorage.removeItem("token"); //usuwanie z przeglądarki tokena
  localStorage.removeItem("expirationDate"); //usuwanie z przeglądarki tokena
  localStorage.removeItem("userId");
  return {
    type: LOG_OUT
  };
};

export const delete_account_confirm = () => {
  return {
    type: DELETE_ACCOUNT_CONFIRM
  };
};

export const change_email_bool = value => {
  return {
    type: CHANGE_EMAIL,
    value: value
  };
};

export const change_email_busy = value => {
  return {
    type: CHANGE_EMAIL_BUSY,
    value: value
  };
};

export const delete_account_bool = value => {
  return {
    type: DELETE_ACCOUNT,
    value: value
  };
};

export const login_validation_change = value => {
  return {
    type: LOGIN_VALIDATION_CHANGE,
    value: value
  };
};

export const registration_validation_change = value => {
  return {
    type: REGISTRATION_VALIDATION_CHANGE,
    value: value
  };
};

export const reset_password_visible = () => {
  return {
    type: RESET_PASSWORD_VISIBLE
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

export const change_email_visible = () => {
  return {
    type: CHANGE_EMAIL_VISIBLE
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

export const is_signed = (value, email) => {
  return {
    type: IS_SIGNED,
    value: value,
    email: email
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

export const error_reset_password = value => {
  return {
    type: ERROR_RESET_PASSWORD,
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
          // new Date().getTime() + 300 * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(checkAuthTimeout(response.data.expiresIn)); //przechwytuje nasz token, który powoduje nam zalogowanie przez godzine przez nasza funkcje
        // dispatch(checkAuthTimeout(300));
        if (!isSignUp) {
          dispatch(is_signed(true, email));
          dispatch(is_error_login(false));
          dispatch(login_visible());
        } else {
          dispatch(is_error_account(false));
          dispatch(login_visible());
          dispatch(is_newAccount(true));
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
          dispatch(is_signed(false, null));
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

export const onAuth_Reset_Password = email => {
  return dispatch => {
    dispatch(spinner(true));

    const authData = {
      requestType: "PASSWORD_RESET",
      email: email
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

    axios
      .post(url, authData)
      .then(response => {
        dispatch(error_reset_password(true));
        dispatch(spinner(false));
      })
      .catch(error => {
        console.log(error.message);
        if (error.request.status === 0) {
          dispatch(error_network(true));
        } else {
          dispatch(error_reset_password(false));
        }
        dispatch(spinner(false));
      });
  };
};

export const delete_account = userToken => {
  return dispatch => {
    dispatch(spinner(true));

    const authData = {
      idToken: userToken
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

    axios
      .post(url, authData)
      .then(response => {
        // console.log(response);
        // dispatch(error_reset_password(true));
        dispatch(spinner(false));
        dispatch(log_out());
        dispatch(delete_account_bool(true));
      })
      .catch(error => {
        // console.log(error);
        if (error.request.status === 0) {
          dispatch(error_network(true));
        } else {
          // dispatch(error_reset_password(false));
        }
        dispatch(spinner(false));
      });
  };
};

export const change_email = (userId, newEmail, email) => {
  return dispatch => {
    dispatch(spinner(true));
    // console.log(userId);
    // console.log(newEmail);
    const authData = {
      idToken: userId,
      email: newEmail,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDcjwHqCvXKM7R0UJN_GjfxrL6NNSjPjGc";

    axios
      .post(url, authData)
      .then(response => {
        // console.log(response);
        dispatch(spinner(false));
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
          // new Date().getTime() + 300 * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(checkAuthTimeout(response.data.expiresIn));
        // dispatch(checkAuthTimeout(300));
        dispatch(
          create_user(
            response.data.idToken,
            response.data.localId,
            response.data.email
          )
        );
        dispatch(change_email_visible());
        dispatch(change_email_bool(true));
        dispatch(change_email_busy(false));
      })
      .catch(error => {
        console.log(error.message);
        if (error.request.status === 0) {
          dispatch(error_network(true));
        } else {
          dispatch(change_email_busy(true));
        }
        dispatch(spinner(false));
      });
  };
};

/////////////////////////////END AUTH///////////////////////////////////
export const order_value = (
  date,
  timeDay,
  timeNight,
  filterArray,
  objectName
) => {
  return {
    type: ORDER_VALUE,
    date: date,
    timeDay: timeDay,
    timeNight: timeNight,
    filterArray: filterArray,
    objectName: objectName
  };
};

export const order_accept = value => {
  return {
    type: ORDER_ACCEPT,
    value: value
  };
};

export const save_all_dispatch_array = response => {
  return {
    type: SAVE_ALL_DISPATCH_ARRAY,
    response: response
  };
};

export const get_disabled_date = () => {
  return dispatch => {
    dispatch(spinner(true));

    let url = "https://apartment-3c7b9.firebaseio.com/disabledAllDate.json";

    axios
      .get(url)
      .then(response => {
        // console.log(response);
        // dispatch(error_reset_password(true));
        dispatch(spinner(false));
        // console.log(response.data);
        dispatch(save_all_dispatch_array(response.data));
      })
      .catch(error => {
        // console.log(error);
        // if (error.request.status === 0) {
        dispatch(error_network(true));
        // } else {
        // dispatch(error_reset_password(false));
        // }
        dispatch(spinner(false));
      });
  };
};

export const add_new_disabled_data = (
  date,
  timeDay,
  timeNight,
  actualReservation,
  actualObjectName
) => {
  return dispatch => {
    dispatch(spinner(true));

    const authData = {
      date: date,
      timeDay: timeDay,
      timeNight: timeNight
      // actualReservation: actualReservation
    };
    if (actualObjectName) {
      let url = `https://apartment-3c7b9.firebaseio.com/disabledAllDate/${actualObjectName}.json`;
      axios
        .put(url, authData)
        .then(response => {
          dispatch(get_disabled_date());
          dispatch(spinner(false));
        })
        .catch(error => {
          // console.log(error);
          if (error.request.status === 0) {
            dispatch(error_network(true));
          } else {
            // dispatch(error_reset_password(false));
          }

          dispatch(spinner(false));
        });
    } else {
      let url = "https://apartment-3c7b9.firebaseio.com/disabledAllDate.json";
      axios
        .post(url, authData)
        .then(response => {
          // console.log(response);
          // dispatch(error_reset_password(true));
          dispatch(get_disabled_date());
          dispatch(spinner(false));
        })
        .catch(error => {
          // console.log(error);
          if (error.request.status === 0) {
            dispatch(error_network(true));
          } else {
            // dispatch(error_reset_password(false));
          }
          dispatch(spinner(false));
        });
    }
  };
};

// export const update_disabled_data = (
//   date,
//   timeDay,
//   timeNight,
//   actualReservation,
//   actualObjectName
// ) => {
//   return dispatch => {
//     dispatch(spinner(true));

//     const authData = {
//       date: date,
//       timeDay: timeDay,
//       timeNight: timeNight
//       // actualReservation: actualReservation
//     };
//     let url = `https://apartment-3c7b9.firebaseio.com/disabledAllDate/${actualObjectName}.json`;
//     axios
//       .put(url, authData)
//       .then(response => {
//         dispatch(get_disabled_date());
//         dispatch(spinner(false));
//       })
//       .catch(error => {
//         // console.log(error);
//         if (error.request.status === 0) {
//           dispatch(error_network(true));
//         } else {
//           // dispatch(error_reset_password(false));
//         }

//         dispatch(spinner(false));
//       });
//   };
// };
