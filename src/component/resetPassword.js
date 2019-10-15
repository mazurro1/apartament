import React from "react";
import Title from "../elements/Title/Title";
import FormElement from "../elements/formElement/formElement";
import FormButton from "../elements/formButton/FormButton";

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

        <div className="text-center margin-top-40">
          <FormButton
            buttonName="Powrót"
            buttonColor="red"
            buttonInline={true}
            buttonOnClick={reset_password_visible}
          />
          <FormButton
            buttonName="Wyślij"
            buttonColor="gray"
            buttonInline={true}
            buttonOnClick={handleOnClickResetPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default resetPassword;
