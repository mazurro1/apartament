import axios from "axios";
export const IS_REGISTRATION = "IS_REGISTRATION";
export const IS_LOGIN = "IS_LOGIN";
export const IS_SIGNED = "IS_SIGNED";
export const AUTH_START = "AUTH_START";
export const IS_NEWACCOUNT = "IS_NEWACCOUNT";
export const LOG_OUT = "LOG_OUT";
export const IS_ERROR = "IS_ERROR";

export const log_out = () => {
  localStorage.removeItem("token"); //usuwanie z przeglądarki tokena
  localStorage.removeItem("expirationTime"); //usuwanie z przeglądarki tokena
  return {
    type: LOG_OUT
  };
};

export const is_error = value => {
  return {
    type: IS_ERROR,
    value: value
  };
};

export const is_login = () => {
  return {
    type: IS_LOGIN
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

export const is_registration = () => {
  return {
    type: IS_REGISTRATION
  };
};

////////////////////////////////////////////////////

// export const checkAuthTimeout = experationTime => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(is_signed());
//     }, experationTime * 1000);
//   };
// };
export const auth = (email, password, isSignUp) => {
  return dispatch => {
    // dispatch(authStart());
    const authData = {
      email: email,
      password: password
      // returnSecureToken: true
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
        console.log(response);
        // const expirationDate = new Date(
        //   new Date().getTime() + response.data.expiresIn * 1000
        // );
        // localStorage.setItem("token", response.data.idToken); //dodawaie do przegladarki tokena
        // localStorage.setItem("expirationDate", expirationDate); //dodawaie do przegladarki tokena
        // dispatch(authSuccess(response.data.idToken, response.data.localId)); //przechwytuje id uzytkownika oraz token
        // dispatch(checkAuthTimeout(response.data.expiresIn)); //przechwytuje nasz token, który powoduje nam zalogowanie przez godzine przez nasza funkcje
        dispatch(is_error(false));
        if (!isSignUp) {
          dispatch(is_signed(true));
        } else {
          dispatch(is_newAccount(true));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(is_error(true));
        if (!isSignUp) {
          dispatch(is_signed(false));
        } else {
          dispatch(is_newAccount(false));
        }
      });
  };
};
///////////////////////////////////////////////////
