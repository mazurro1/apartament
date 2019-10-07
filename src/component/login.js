import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../elements/formElement/formElement";
import LoginAccount from "./loginAccount";
import ResetPassword from "./resetPassword";

class Login extends Component {
  state = {
    form: {
      email: {
        value: "",
        validated: null
      },
      password: {
        value: "",
        validated: null
      }
    },
    resetPassword: {
      email: {
        value: "",
        validated: null
      }
    },
    resetPasswordValidation: false,
    validation: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.loginVisible !== this.props.loginVisible ||
      nextProps.resetPasswordVisible !== this.props.resetPasswordVisible ||
      nextProps.errorNetwork !== this.props.errorNetwork ||
      nextProps.errorResetPassword !== this.props.errorResetPassword ||
      nextProps.errorLogin !== this.props.errorLogin ||
      nextState !== this.state
    ) {
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

    if (name === "email") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value);
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

  handleInputOnChangePassword = e => {
    const newForm = {
      ...this.state.resetPassword
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
      resetPassword: newForm
    });
  };

  handleOnClickSave = e => {
    e.preventDefault();
    this.setState({
      validation: true
    });

    if (this.state.form.email.validated && this.state.form.password.validated) {
      this.props.onAuth(
        this.state.form.email.value,
        this.state.form.password.value,
        false
      );
    }
  };

  handleOnClickResetPassword = e => {
    e.preventDefault();
    this.setState({
      resetPasswordValidation: true
    });
    if (this.state.resetPassword.email.validated) {
      this.props.onAuth_Reset_Password(this.state.resetPassword.email.value);
    }
  };

  render() {
    const { form } = this.state;
    const changePage = this.props.signed ? <Redirect to="/" /> : null;
    const errorMessage = this.props.errorLogin ? (
      <Modal
        name="Zły login lub hasło."
        onClickButton={() => this.props.is_error_login(false)}
      />
    ) : null;

    const errorNetwork = this.props.errorNetwork ? (
      <Modal
        name="Brak internetu."
        onClickButton={() => this.props.error_network(false)}
      />
    ) : null;

    const modalErrorEmail = () => {
      if (this.props.errorResetPassword === true) {
        return (
          <Modal
            modalError={false}
            name="Wiadomosć została wysłana na podany adres e-mail"
            onClickButton={() => this.props.error_reset_password(null)}
          />
        );
      } else if (this.props.errorResetPassword === false) {
        return (
          <Modal
            name="Podany e-mail nie istnieje"
            onClickButton={() => this.props.error_reset_password(null)}
          />
        );
      } else {
        return null;
      }
    };

    const formInputs = [
      {
        id: 1,
        formName: "Adres e-mail:",
        itemFalseName: "Niepoprawny e-mail",
        formValidation: this.state.validation,
        itemValidation: form.email.validated,
        itemOnChange: this.handleInputOnChange,
        itemValue: form.email.value,
        itemName: "email",
        itemType: "text",
        itemPlaceholder: "",
        itemChecked: false
      },
      {
        id: 2,
        formName: "Hasło:",
        itemFalseName: "Niepoprawne hasło",
        formValidation: this.state.validation,
        itemValidation: form.password.validated,
        itemOnChange: this.handleInputOnChange,
        itemValue: form.password.value,
        itemName: "password",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false
      }
    ];

    const formInputsMap = formInputs.map(item => (
      <FormItem
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
      />
    ));

    return (
      <div
        className={
          this.props.loginVisible
            ? "login loginDown scrollbar scrollbar-primary"
            : "login scrollbar scrollbar-primary"
        }
      >
        {modalErrorEmail()}
        {changePage}
        {errorMessage}
        {errorNetwork}
        <div className="closePage" onClick={this.props.login_visible}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container">
          <LoginAccount
            inputs={formInputsMap}
            handleResetPassword={this.props.reset_password_visible}
            handleOnClickSave={this.handleOnClickSave}
            resetPasswordVisible={this.props.resetPasswordVisible}
          />

          <ResetPassword
            resetPasswordVisible={this.props.resetPasswordVisible}
            reset_password_visible={this.props.reset_password_visible}
            resetPasswordValidation={this.state.resetPasswordValidation}
            resetPassword={this.state.resetPassword}
            handleInputOnChangePassword={this.handleInputOnChangePassword}
            handleOnClickResetPassword={this.handleOnClickResetPassword}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    signed: state.signed,
    errorLogin: state.errorLogin,
    loginVisible: state.loginVisible,
    errorNetwork: state.errorNetwork,
    resetPasswordVisible: state.resetPasswordVisible,
    errorResetPassword: state.errorResetPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    is_error_login: value => dispatch(actionTypes.is_error_login(value)),
    login_visible: () => dispatch(actionTypes.login_visible()),
    error_network: value => dispatch(actionTypes.error_network(value)),
    reset_password_visible: () =>
      dispatch(actionTypes.reset_password_visible()),
    onAuth_Reset_Password: email =>
      dispatch(actionTypes.onAuth_Reset_Password(email)),
    error_reset_password: value =>
      dispatch(actionTypes.error_reset_password(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
