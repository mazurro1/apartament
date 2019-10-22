import React from "react";
import FormButton from "../elements/formButton/FormButton";
import Title from "../elements/Title/Title";
import CSSTransition from "react-transition-group/CSSTransition";

const changeEmail = ({
  inputs,
  handleOnClickSave,
  changeEmailVisible,
  change_email_visible,
  animationTiming
}) => {
  return (
    <CSSTransition
      in={changeEmailVisible}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="animationRight"
    >
      <div className="accountSettings">
        <Title name="ZMIEŃ E-MAIL" />
        {inputs}
        <div className="text-center margin-top-40">
          <FormButton
            buttonName="Powrót"
            buttonColor="red"
            buttonInline={true}
            buttonOnClick={change_email_visible}
          />
          <FormButton
            buttonName="Zatwierdź"
            buttonColor="gray"
            buttonInline={true}
            buttonOnClick={handleOnClickSave}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default changeEmail;
