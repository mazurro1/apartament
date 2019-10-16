import React from "react";
import FormButton from "../elements/formButton/FormButton";
import Title from "../elements/Title/Title";

const changePassword = ({
  inputs,
  handleOnClickSave,
  changeEmailVisible,
  change_email_visible
}) => {
  return (
    <div
    // className={
    //   changeEmailVisible === true
    //     ? "loginAccount loginAccountDown "
    //     : "loginAccount"
    // }
    >
      <Title name="ZMIEŃ HASŁO" />
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
  );
};

export default changePassword;
