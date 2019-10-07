import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/formButton/FormButton";
import FormItem from "../elements/formElement/formElement";

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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.settingsAccountVisible !== this.props.settingsAccountVisible ||
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
        itemType: "email",
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
    console.log(this.props.userEmail);
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
        <div className="container">
          <Title name="USTAWIENIA KONTA" />
          {formInputsMap}
          <FormButton
            buttonName="Zatwierdź"
            buttonOnClick={() => {
              console.log("click");
            }}
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
    userEmail: state.userEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    is_error_login: value => dispatch(actionTypes.is_error_login(value)),
    settings_account_visible: () =>
      dispatch(actionTypes.settings_account_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
