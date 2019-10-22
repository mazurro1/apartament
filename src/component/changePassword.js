import React from "react";
import FormButton from "../elements/formButton/FormButton";
import Title from "../elements/Title/Title";
import CSSTransition from "react-transition-group/CSSTransition";

const changePassword = ({
  inputs,
  handleOnClickSavePassword,
  changePasswordVisible,
  change_password_visible,
  animationTiming
}) => {
  return (
    <CSSTransition
      in={changePasswordVisible}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="animationRight"
    >
      <div className="accountSettings">
        <Title name="ZMIEŃ HASŁO" />
        {inputs}
        <div className="text-center margin-top-40">
          <FormButton
            buttonName="Powrót"
            buttonColor="red"
            buttonInline={true}
            buttonOnClick={change_password_visible}
          />
          <FormButton
            buttonName="Zatwierdź"
            buttonColor="gray"
            buttonInline={true}
            buttonOnClick={handleOnClickSavePassword}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default changePassword;
