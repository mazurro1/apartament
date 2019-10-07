import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormItem from "../elements/formElement/formElement";
import FormButton from "../elements/formButton/FormButton";

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
    validation: false,
    message: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.registrationVisible !== this.props.registrationVisible ||
      nextState !== this.state
    ) {
      return true;
    } else {
      return false;
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = {
      ...prevState
    };
    if (newState.form.password.value.length && nextProps.registrationVisible) {
      if (newState.form.password.value !== newState.form.passwordSecond.value) {
        newState.form.passwordSecond.validated = false;
      } else {
        newState.form.passwordSecond.validated = true;
      }
    }
    return newState;
  }

  checkValidity(value, validated, name, newPassword, newPasswordSecond) {
    let isValid = false;

    if (name === "password") {
      isValid = value.length >= 6 ? true : false;
    }

    if (name === "passwordSecond") {
      isValid = newPassword === value ? true : false;
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
        e.target.name,
        newForm.password.value,
        newForm.passwordSecond.value
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

    const errorNetwork = this.props.errorNetwork ? (
      <Modal
        name="Brak internetu."
        onClickButton={() => this.props.error_network(false)}
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
      },
      {
        id: 3,
        formName: "Powtórz hasło:",
        itemFalseName: "Hasłą nie są identyczne",
        formValidation: this.state.validation,
        itemValidation: this.state.form.passwordSecond
          ? form.passwordSecond.validated
          : this.state.form.passwordSecond.value ===
            this.state.form.password.value,
        itemOnChange: this.handleInputOnChange,
        itemValue: form.passwordSecond.value,
        itemName: "passwordSecond",
        itemType: "password",
        itemPlaceholder: "",
        itemChecked: false
      },
      {
        id: 4,
        formName: "Regulamin*:",
        itemFalseName: "Zaakceptuj regulamin",
        formValidation: this.state.validation,
        itemValidation: form.regulations.validated,
        itemOnChange: this.handleInputOnChange,
        itemValue: false,
        itemName: "regulations",
        itemType: "checkbox",
        itemPlaceholder: "",
        itemChecked: form.regulations.value
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
          this.props.registrationVisible
            ? "login registrationDown scrollbar scrollbar-primary"
            : "registration scrollbar scrollbar-primary"
        }
      >
        {changePage}
        {errorMessage}
        {errorNetwork}
        <div className="closePage" onClick={this.props.registration_visible}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container">
          <Title name="ZAŁÓŻ KONTO" />
          {formInputsMap}
          <FormButton
            buttonName="Zatwierdź"
            buttonOnClick={this.handleOnClickSave}
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
    newAccount: state.newAccount,
    errorAccount: state.errorAccount,
    registrationVisible: state.registrationVisible,
    errorNetwork: state.errorNetwork
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    is_error_account: value => dispatch(actionTypes.is_error_account(value)),
    registration_visible: () => dispatch(actionTypes.registration_visible()),
    error_network: value => dispatch(actionTypes.error_network(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
