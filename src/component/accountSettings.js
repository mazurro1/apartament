import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/formButton/FormButton";
import FormElement from "../elements/formElement/formElement";
import ChangeEmail from "./changeEmail";

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
      }
    },

    validationEmail: false
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

    if (this.state.formEmail.newEmail.validated && validation) {
      this.props.change_email(
        this.props.userToken,
        this.state.formEmail.newEmail.value,
        this.props.userEmail
      );
      //?????????????????????????????????????????
      let newForm = { ...this.state.formEmail };
      newForm.newEmail.value = "";
      newForm.newEmail.validated = false;
      this.setState({
        validationEmail: false
      });
    }
  };

  render() {
    const { formEmail } = this.state;
    const changePage = this.props.signed ? <Redirect to="/" /> : null;
    const errorMessage = this.props.errorLogin ? (
      <Modal
        name="Zły login lub hasło."
        onClickButton={() => this.props.is_error_login(false)}
      />
    ) : null;

    const formChangeEmail = [
      {
        id: 1,
        formName: "Aktualny adres e-mail:",
        itemFalseName: "Niepoprawny e-mail",
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
        itemFalseName: "Niepoprawny e-maila",
        formValidation: this.state.validationEmail,
        itemValidation: formEmail.newEmail.validated,
        itemOnChange: this.handleInputOnChangeEmail,
        itemValue: formEmail.newEmail.value,
        itemName: "newEmail",
        itemType: "email",
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

    return (
      <div
        className={
          this.props.settingsAccountVisible
            ? "login loginDown scrollbar scrollbar-primary"
            : "login scrollbar scrollbar-primary"
        }
      >
        {changePage}
        {errorMessage}
        <div
          className="closePage"
          onClick={this.props.settings_account_visible}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container text-center">
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
            <FormButton
              buttonName="Usuń konto"
              buttonColor="red"
              buttonInline={true}
              buttonOnClick={() =>
                this.props.delete_account(this.props.userToken)
              }
            />
          </div>

          <ChangeEmail
            inputs={formEmailsMap}
            handleOnClickSave={this.handleOnClickSave}
            changeEmailVisible={this.props.changeEmailVisible}
            change_email_visible={this.props.change_email_visible}
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
    changeEmailVisible: state.changeEmailVisible
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
    change_email_visible: () => dispatch(actionTypes.change_email_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
