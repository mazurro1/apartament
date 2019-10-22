import React from "react";
import Title from "../elements/Title/Title";
import FormElement from "../elements/formElement/formElement";
import FormButton from "../elements/formButton/FormButton";
import CSSTransition from "react-transition-group/CSSTransition";

const resetPassword = ({
  resetPasswordVisible,
  reset_password_visible,
  resetPassword,
  resetPasswordValidation,
  handleInputOnChangePassword,
  handleOnClickResetPassword,
  animationTiming
}) => {
  return (
    <CSSTransition
      in={resetPasswordVisible}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="animationRight"
    >
      <div className="accountSetting">
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
    </CSSTransition>
  );
};

export default resetPassword;
