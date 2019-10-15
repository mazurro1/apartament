import React from "react";
import Title from "../elements/Title/Title";
import FormButton from "../elements/formButton/FormButton";

const loginAccount = ({
  inputs,
  handleResetPassword,
  handleOnClickSave,
  resetPasswordVisible
}) => {
  return (
    <div
      className={
        resetPasswordVisible === false
          ? "loginAccount loginAccountDown "
          : "loginAccount"
      }
    >
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
  );
};

export default loginAccount;
