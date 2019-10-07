import React from "react";
import Title from "../elements/Title/Title";

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
        {/* <FormButton
            buttonName="Zaloguj"
            buttonOnClick={this.handleOnClickSave}
          /> */}
        {/* <FormButton
            buttonName="Odzyskaj hasło"
            buttonOnClick={this.handleOnClickSave}
          /> */}
        <div className="row mt-2 margin-60">
          <div className="col-12">
            <div className="text-center mt-4">
              <button
                className="btn btn-danger mr-2"
                onClick={handleResetPassword}
              >
                Odzyskaj hasło
              </button>
              <button className="btn btn-primary" onClick={handleOnClickSave}>
                Zaloguj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginAccount;
