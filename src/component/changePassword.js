import React from "react";
import FormButton from "../elements/formButton/FormButton";
import Title from "../elements/Title/Title";

const changePassword = ({
  inputs,
  handleOnClickSavePassword,
  changePasswordVisible,
  change_password_visible
}) => {
  return (
    <div
      className={
        changePasswordVisible === true
          ? "loginAccount loginAccountDown "
          : "loginAccount"
      }
    >
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
  );
};

export default changePassword;
