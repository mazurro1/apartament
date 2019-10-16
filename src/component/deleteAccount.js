import React from "react";
import FormButton from "../elements/formButton/FormButton";
import Title from "../elements/Title/Title";
import FormElement from "../elements/formElement/formElement";

const deleteAccount = ({
  deleteAccountConfirm,
  validationDeleteAccount,
  validated,
  handleInputOnChange,
  value,
  delete_account_confirm,
  handleOnClickSaveDeleteAccount
}) => {
  return (
    <div
      className={
        deleteAccountConfirm
          ? "loginAccount loginAccountDown mt-3"
          : "loginAccount mt-3"
      }
    >
      <Title name="USUŃ KONTO" />
      <div className="container">
        <FormElement
          formName="Podaj hasło"
          itemFalseName="Błędne hasło"
          formValidation={validationDeleteAccount}
          itemValidation={validated}
          itemOnChange={handleInputOnChange}
          itemValue={value}
          itemName="password"
          itemType="password"
          itemPlaceholder=""
          itemChecked={null}
          disabled={false}
        />
      </div>
      <div className="text-center margin-top-40">
        <FormButton
          buttonName="Wróć"
          buttonColor="green"
          buttonInline={true}
          buttonOnClick={delete_account_confirm}
        />
        <FormButton
          buttonName="Usuń"
          buttonColor="red"
          buttonInline={true}
          buttonOnClick={
            // this.props.delete_account(this.props.userToken)
            handleOnClickSaveDeleteAccount
          }
        />
      </div>
    </div>
  );
};

export default deleteAccount;
