import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Input from "../elements/Input/Input";

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
      },
      passwordSecond: {
        value: "",
        validated: null
      },
      regulations: {
        value: false,
        validated: null
      }
    },
    validation: false
  };

  checkValidity(value, validated, name) {
    let isValid = false;

    if (name === "password") {
      isValid = value.length >= 6 ? true : false;
    }

    if (name === "passwordSecond") {
      isValid = this.state.form.password.value === value ? true : false;
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

  handleOnClickSave = e => {
    e.preventDefault();
    this.setState({
      validation: true
    });

    if (
      this.state.form.email.validated &&
      this.state.form.password.validated &&
      this.state.form.passwordSecond.validated &&
      this.state.form.regulations.validated
    ) {
      this.props.isSigned(false);
      this.props.onAuth(
        this.state.form.email.value,
        this.state.form.password.value,
        true
      );
    }
  };

  render() {
    const { form } = this.state;
    const changePage = this.props.newAccount ? <Redirect to="/" /> : null;
    const errorMessage = this.props.errorAccount ? (
      <Modal
        name="Podany e-mail już istnieje."
        onClickButton={() => this.props.is_error_account(false)}
      />
    ) : null;
    return (
      <div
        className={
          this.props.registrationVisible
            ? "login registrationDown"
            : "registration"
        }
      >
        {changePage}
        {errorMessage}
        <div className="closePage" onClick={this.props.registration_visible}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container">
          <Title name="ZAŁÓŻ KONTO" />

          <div className="row">
            <div className="col-2 offset-3">Adres e-mail:</div>
            <div className="col-4">
              <Input
                className={
                  this.state.validation && !form.email.validated
                    ? "formInvalid"
                    : null
                }
                value={form.email.value}
                onChange={this.handleInputOnChange}
                name="email"
                type="text"
                placeholder=""
              />
              {/* <input
                className={
                  this.state.validation && !form.email.validated
                    ? "formInvalid"
                    : null
                }
                type="text"
                value={form.email.value}
                onChange={this.handleInputOnChange}
                name="email"
              /> */}
            </div>
            <div className="col-2 offset-3">Hasło:</div>
            <div className="col-4">
              {/* <input
                className={
                  this.state.validation && !form.password.validated
                    ? "formInvalid"
                    : null
                }
                type="password"
                value={form.password.value}
                onChange={this.handleInputOnChange}
                name="password"
              /> */}
              <Input
                className={
                  this.state.validation && !form.password.validated
                    ? "formInvalid"
                    : null
                }
                value={form.password.value}
                onChange={this.handleInputOnChange}
                name="password"
                type="password"
                placeholder=""
              />
            </div>
            <div className="col-2 offset-3">Powtórz hasło:</div>
            <div className="col-4">
              {/* <input
                className={
                  this.state.validation && !form.passwordSecond.validated
                    ? "formInvalid"
                    : null
                }
                type="password"
                value={form.passwordSecond.value}
                onChange={this.handleInputOnChange}
                name="passwordSecond"
              /> */}
              <Input
                className={
                  this.state.validation && !form.passwordSecond.validated
                    ? "formInvalid"
                    : null
                }
                value={form.passwordSecond.value}
                onChange={this.handleInputOnChange}
                name="passwordSecond"
                type="password"
                placeholder=""
              />
            </div>
            <div className="col-2 offset-3">Regulamin*:</div>
            <div
              className={
                this.state.validation && !form.regulations.validated
                  ? "formInvalid col-4"
                  : "col-4"
              }
            >
              {/* <input
                type="checkbox"
                checked={form.regulations.value}
                onChange={this.handleInputOnChange}
                name="regulations"
              /> */}
              <Input
                checked={form.regulations.value}
                onChange={this.handleInputOnChange}
                name="regulations"
                type="checkbox"
                placeholder=""
              />
            </div>
            <div className="col-12">
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  disabled={false}
                  onClick={this.handleOnClickSave}
                >
                  Zatwierdź
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    signed: state.signed,
    newAccount: state.newAccount,
    errorAccount: state.errorAccount,
    registrationVisible: state.registrationVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    is_error_account: value => dispatch(actionTypes.is_error_account(value)),
    registration_visible: () => dispatch(actionTypes.registration_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
