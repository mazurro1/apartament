import React from "react";
import Title from "../elements/Title/Title";
import FormButton from "../elements/formButton/FormButton";
import CSSTransition from "react-transition-group/CSSTransition";

const loginAccount = ({
  inputs,
  handleResetPassword,
  handleOnClickSave,
  resetPasswordVisible,
  animationTiming
}) => {
  return (
    <CSSTransition
      in={resetPasswordVisible === false}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="animationLeft"
    >
      <div className="accountSetting">
        <div className="container">
          <Title name="LOGOWANIE" />
          {inputs}

          <div className="row margin-top-40">
            <div className="col-12">
              <div className="text-center ">
                <FormButton
                  buttonName="Odzyskaj hasło"
                  buttonOnClick={handleResetPassword}
                  buttonColor="red"
                  buttonInline={true}
                />
                <FormButton
                  buttonName="Zaloguj"
                  buttonOnClick={handleOnClickSave}
                  buttonColor="gray"
                  buttonInline={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default loginAccount;
