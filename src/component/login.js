import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
    validation: false
  };

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

  render() {
    const { form } = this.state;
    const changePage = this.props.signed ? <Redirect to="/" /> : null;
    const errorMessage = this.props.errorLogin ? (
      <Modal
        name="Zły login lub hasło."
        onClickButton={() => this.props.is_error_login(false)}
      />
    ) : null;

    return (
      <div className={this.props.loginVisible ? "login loginDown" : "login"}>
        {changePage}
        {errorMessage}
        <div className="closePage" onClick={this.props.login_visible}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container">
          <Title name="LOGOWANIE" />

          <div className="row">
            <div className="col-2 offset-3">Adres e-mail:</div>
            <div className="col-4">
              <input
                className={
                  this.state.validation && !form.email.validated
                    ? "formInvalid"
                    : null
                }
                type="email"
                value={form.email.value}
                onChange={this.handleInputOnChange}
                name="email"
              />
            </div>
            <div className="col-2 offset-3">Hasło:</div>
            <div className="col-4">
              <input
                className={
                  this.state.validation && !form.password.validated
                    ? "formInvalid"
                    : null
                }
                type="password"
                value={form.password.value}
                onChange={this.handleInputOnChange}
                name="password"
              />
            </div>
            <div className="col-12">
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  disabled={false}
                  onClick={this.handleOnClickSave}
                >
                  Zaloguj
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
    errorLogin: state.errorLogin,
    loginVisible: state.loginVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    is_error_login: value => dispatch(actionTypes.is_error_login(value)),
    login_visible: () => dispatch(actionTypes.login_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
