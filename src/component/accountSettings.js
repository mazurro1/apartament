import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import FormButton from "../elements/formButton/FormButton";
import FormElement from "../elements/formElement/formElement";
import ChangeEmail from "./changeEmail";
import ClosePage from "../elements/closePage/closePage";
import ChangePassword from "./changePassword";

class Login extends Component {
  state = {
    formEmail: {
      email: {
        value: "",
        validated: true
      },
      newEmail: {
        value: "",
        validated: null
      },
      password: {
        value: "",
        validated: null
      }
    },
    formPassword: {
      password: {
        value: "",
        validated: true
      },
      newPassword: {
        value: "",
        validated: null
      },
      newPasswordAgain: {
        value: "",
        validated: null
      }
    },

    validationEmail: false,

    validationPassword: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
      return true;
    } else {
      return false;
    }
  }

  checkValidity(value, validated, name) {
    let isValid = false;

    if (name === "password") {
      isValid = value.length >= 6 ? true : false;
    }

    if (name === "newEmail") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && this.props.userEmail !== value;
    }

    return isValid;
  }

  handleInputOnChange = e => {
    const newForm = {
      ...this.state.form
    };
    const updateFormElement = {
      ...newForm[e.target.name]
    };
    if (e.target.type === "checkbox") {
      updateFormElement.value = e.target.checked;
      updateFormElement.validated = e.target.checked;
    } else {
      updateFormElement.value = e.target.value;
      updateFormElement.validated = this.checkValidity(
        updateFormElement.value,
        updateFormElement.validated,
        e.target.name
      );
    }
    newForm[e.target.name] = updateFormElement;

    this.setState({
      form: newForm
    });
  };

  handleInputOnChangeEmail = e => {
    const newForm = {
      ...this.state.formEmail
    };
    const updateFormElement = {
      ...newForm[e.target.name]
    };
    if (e.target.type === "checkbox") {
      updateFormElement.value = e.target.checked;
      updateFormElement.validated = e.target.checked;
    } else {
      updateFormElement.value = e.target.value;
      updateFormElement.validated = this.checkValidity(
        updateFormElement.value,
        updateFormElement.validated,
        e.target.name
      );
    }
    newForm[e.target.name] = updateFormElement;

    this.setState({
      formEmail: newForm
    });
  };

  handleOnClickSave = e => {
    e.preventDefault();
    const validation = this.state.validationEmail ? true : true;
    this.setState({
      validationEmail: validation
    });

    if (
      this.state.formEmail.newEmail.validated &&
      validation &&
      this.state.formEmail.password.validated
    ) {
      // this.props.change_email(
      //   this.props.userToken,
      //   this.state.formEmail.newEmail.value,
      //   this.props.userEmail
      // );
      this.props.authCheckPassword(
        this.props.userEmail,
        this.state.formEmail.password.value,
        this.props.userToken,
        this.state.formEmail.newEmail.value,
        this.props.userEmail
      );
      //?????????????????????????????????????????
      let newForm = { ...this.state.formEmail };
      newForm.newEmail.value = "";
      newForm.newEmail.validated = false;
      newForm.password.value = "";
      newForm.password.validated = false;
      this.setState({
        validationEmail: false
      });
    }
  };

  handleOnClickSavePassword = e => {
    e.preventDefault();
    const validation = this.state.validationPassword ? true : true;
    this.setState({
      validationPassword: validation
    });

    if (
      this.state.formPassword.password.validated &&
      validation &&
      this.state.formPassword.newPassword.validated &&
      this.state.formPassword.password.validated
    ) {
      // this.props.change_email(
      //   this.props.userToken,
      //   this.state.formEmail.newEmail.value,
      //   this.props.userEmail
      // );
      this.props.authCheckPassword(
        this.props.userEmail,
        this.state.formEmail.password.value,
        this.props.userToken,
        this.state.formEmail.newEmail.value,
        this.props.userEmail
      );
      //?????????????????????????????????????????
      let newForm = { ...this.state.formEmail };
      newForm.newEmail.value = "";
      newForm.newEmail.validated = false;
      newForm.password.value = "";
      newForm.password.validated = false;
      this.setState({
        validationPassword: false
      });
    }
  };

  handleEmailVisible = () => {
    this.props.change_email_visible();
    let newForm = { ...this.state.formEmail };
    newForm.newEmail.value = "";
    newForm.newEmail.validated = false;
    newForm.password.value = "";
    newForm.password.validated = false;
    this.setState({
      validationEmail: false
    });
  };

  render() {
    const { formEmail } = this.state;
    const changePage = this.props.signed ? <Redirect to="/" /> : null;
    const modalChangeEmail = this.props.changeEmail ? (
      <Modal
        modalError={false}
        name="Adres e-mail został zmieniony"
        modalOn={true}
        onClickButton={() => this.props.change_email_bool(false)}
      />
    ) : (
      <Modal
        modalError={false}
        name="Adres e-mail został zmieniony"
        modalOn={false}
        onClickButton={() => this.props.change_email_bool(false)}
      />
    );

    const modalChangePassword = this.props.errorResetPassword ? (
      <Modal
        modalError={false}
        name={`Wiadomość z linkiem do zmiany hasła został wysłany na adres ${this.props.userEmail}`}
        modalOn={true}
        onClickButton={() => this.props.error_reset_password(false)}
      />
    ) : (
      <Modal
        modalError={false}
        name={`Wiadomość z linkiem do zmiany hasła został wysłany na adres ${this.props.userEmail}`}
        modalOn={false}
        onClickButton={() => this.props.error_reset_password(false)}
      />
    );

    const modalChangeEmailBusy = this.props.changeEmailBusy ? (
      <Modal
        modalError={true}
        name={`Podany adres e-mail jest juz zajęty`}
        modalOn={true}
        onClickButton={() => this.props.change_email_busy(false)}
      />
    ) : (
      <Modal
        modalError={true}
        name={`Podany adres e-mail jest juz zajęty`}
        modalOn={false}
        onClickButton={() => this.props.change_email_busy(false)}
      />
    );

    const formChangeEmail = [
      {
        id: 1,
        formName: "Aktualny adres e-mail:",
        itemFalseName: "Niepoprawny adres e-mail",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.email.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: this.props.userEmail,
        itemName: "email",
        itemType: "email",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: true
      },
      {
        id: 2,
        formName: "Nowy adres e-mail:",
        itemFalseName: "Niepoprawny adres e-maila",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.newEmail.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.newEmail.value,
        itemName: "newEmail",
        itemType: "email",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: false
      },
      {
        id: 3,
        formName: "Hasło:",
        itemFalseName: "Niepoprawne hasło",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.password.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.password.value,
        itemName: "password",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: false
      }
    ];

    const formChangePassword = [
      {
        id: 1,
        formName: "Nowe hasło:",
        itemFalseName: "Niepoprawne hasło",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.password.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.password.value,
        itemName: "password",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: false
      },
      {
        id: 2,
        formName: "Powtórz nowe hasło:",
        itemFalseName: "Niepoprawne hasło",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.password.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.password.value,
        itemName: "password",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: false
      },
      {
        id: 3,
        formName: "Aktualne hasło:",
        itemFalseName: "Niepoprawne hasło",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.password.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.password.value,
        itemName: "password",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false,
        disabled: false
      }
    ];

    const formEmailsMap = formChangeEmail.map(item => (
      <FormElement
        key={item.id}
        formName={item.formName}
        itemFalseName={item.itemFalseName}
        formValidation={item.formValidation}
        itemValidation={item.itemValidation}
        itemOnChange={item.itemOnChange}
        itemValue={item.itemValue}
        itemName={item.itemName}
        itemType={item.itemType}
        itemPlaceholder={item.itemPlaceholder}
        itemChecked={item.itemChecked}
        disabled={item.disabled}
      />
    ));

    const formPasswordsMap = formChangePassword.map(item => (
      <FormElement
        key={item.id}
        formName={item.formName}
        itemFalseName={item.itemFalseName}
        formValidation={item.formValidation}
        itemValidation={item.itemValidation}
        itemOnChange={item.itemOnChange}
        itemValue={item.itemValue}
        itemName={item.itemName}
        itemType={item.itemType}
        itemPlaceholder={item.itemPlaceholder}
        itemChecked={item.itemChecked}
        disabled={item.disabled}
      />
    ));

    return (
      <div
        className={
          this.props.settingsAccountVisible ? "login loginDown " : "login "
        }
      >
        {changePage}
        {modalChangeEmail}
        {modalChangePassword}
        {modalChangeEmailBusy}

        <div className="container positionRelative">
          <ClosePage onClick={this.props.settings_account_visible} />
          <div
            className={
              this.props.changeEmailVisible === false
                ? "loginAccount loginAccountDown "
                : "loginAccount"
            }
          >
            <Title name="USTAWIENIA KONTA" />
            <div className="text-center">
              <FormButton
                buttonName="Zmień adres e-mail"
                buttonColor="gray"
                buttonInline={true}
                buttonOnClick={this.props.change_email_visible}
              />
            </div>
            <div className="text-center">
              <FormButton
                buttonName="Zmień hasło"
                buttonColor="gray"
                buttonInline={true}
                buttonOnClick={() =>
                  this.props.onAuth_Reset_Password(this.props.userEmail)
                }
              />
            </div>
            <div className="text-center">
              <FormButton
                buttonName="Usuń konto"
                buttonColor="red"
                buttonInline={true}
                buttonOnClick={this.props.delete_account_confirm}
              />
            </div>

            <ChangePassword
              inputs={formPasswordsMap}
              handleOnClickSave={this.handleOnClickSavePassword}
              // changeEmailVisible={this.props.changeEmailVisible}
              // change_email_visible={this.handleEmailVisible}
            />
            <div
              className={
                this.props.deleteAccountConfirm
                  ? "loginAccount loginAccountDown mt-3"
                  : "loginAccount mt-3"
              }
            >
              <h5 className="text-center">Jesteś tego pewien?</h5>
              <div className="text-center">
                <FormButton
                  buttonName="Nie"
                  buttonColor="green"
                  buttonInline={true}
                  buttonOnClick={this.props.delete_account_confirm}
                />
                <FormButton
                  buttonName="Tak"
                  buttonColor="red"
                  buttonInline={true}
                  buttonOnClick={() =>
                    this.props.delete_account(this.props.userToken)
                  }
                />
              </div>
            </div>
          </div>
          <ChangeEmail
            inputs={formEmailsMap}
            handleOnClickSave={this.handleOnClickSave}
            changeEmailVisible={this.props.changeEmailVisible}
            change_email_visible={this.handleEmailVisible}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signed: state.signed,
    errorLogin: state.errorLogin,
    settingsAccountVisible: state.settingsAccountVisible,
    userEmail: state.userEmail,
    userToken: state.userToken,
    userId: state.userId,
    changeEmailVisible: state.changeEmailVisible,
    deleteAccountConfirm: state.deleteAccountConfirm,
    changeEmail: state.changeEmail,
    errorResetPassword: state.errorResetPassword,
    changeEmailBusy: state.changeEmailBusy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    is_error_login: value => dispatch(actionTypes.is_error_login(value)),
    settings_account_visible: () =>
      dispatch(actionTypes.settings_account_visible()),
    delete_account: userToken =>
      dispatch(actionTypes.delete_account(userToken)),
    onAuth_Reset_Password: email =>
      dispatch(actionTypes.onAuth_Reset_Password(email)),
    change_email: (userId, newEmail, email) =>
      dispatch(actionTypes.change_email(userId, newEmail, email)),
    change_email_visible: () => dispatch(actionTypes.change_email_visible()),
    delete_account_confirm: () =>
      dispatch(actionTypes.delete_account_confirm()),
    change_email_bool: value => dispatch(actionTypes.change_email_bool(value)),
    error_reset_password: value =>
      dispatch(actionTypes.error_reset_password(value)),
    change_email_busy: value => dispatch(actionTypes.change_email_busy(value)),
    authCheckPassword: (email, password, userToken, newEmail) =>
      dispatch(
        actionTypes.authCheckPassword(email, password, userToken, newEmail)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
