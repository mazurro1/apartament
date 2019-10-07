import React from "react";
import Title from "../elements/Title/Title";
import FormElement from "../elements/formElement/formElement";

const resetPassword = ({
  resetPasswordVisible,
  reset_password_visible,
  resetPassword,
  resetPasswordValidation,
  handleInputOnChangePassword,
  handleOnClickResetPassword
}) => {
  return (
    <div
      className={
        resetPasswordVisible === true
          ? "resetPassword resetPasswordDown"
          : "loginAccount "
      }
    >
      <div className="container">
        <Title name="ODZYSKIWANIE HASŁA" />
        <FormElement
          formName="Twój adres e-mail"
          itemFalseName="Nie poprawny e-mail"
          formValidation={resetPasswordValidation}
          itemValidation={resetPassword.email.validated}
          itemOnChange={handleInputOnChangePassword}
          itemValue={resetPassword.email.value}
          itemName="email"
          itemType="email"
          itemPlaceholder=""
        />
        <div className="row mt-2 margin-60">
          <div className="col-12">
            <div className="text-center mt-4">
              <button
                className="btn btn-danger mr-2"
                onClick={reset_password_visible}
              >
                Powrót
              </button>
              <button
                className="btn btn-primary"
                onClick={handleOnClickResetPassword}
              >
                Dalej
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resetPassword;
