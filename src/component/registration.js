import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import { Redirect } from "react-router-dom";
import Modal from "../elements/Modal/Modal";
import ClosePage from "../elements/closePage/closePage";
import FormItem from "../elements/formElement/formElement";
import FormButton from "../elements/formButton/FormButton";
import CSSTransition from "react-transition-group/CSSTransition";

class Registration extends Component {
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
    // validation: false,
    message: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
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
    // this.setState({
    //   validation: true
    // });
    this.props.registration_validation_change(true);
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
        modalOn={true}
      />
    ) : (
      <Modal
        name="Podany e-mail już istnieje."
        onClickButton={() => this.props.is_error_account(false)}
        modalOn={false}
      />
    );

    const formInputs = [
      {
        id: 1,
        formName: "Adres e-mail:",
        itemFalseName: "Niepoprawny e-mail",
        formValidation: this.props.registrationValidation,
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
        formValidation: this.props.registrationValidation,
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
        formValidation: this.props.registrationValidation,
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
        formValidation: this.props.registrationValidation,
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
      <CSSTransition
        in={this.props.registrationVisible}
        timeout={this.props.animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="animationLeft"
      >
        <div className="pagePosition">
          {changePage}
          {errorMessage}

          <div className="container positionRelative">
            <ClosePage onClick={this.props.registration_visible} />
            <div className="pt-1">
              <Title name="ZAŁÓŻ KONTO" />
              {formInputsMap}
            </div>
            <div className="text-center ">
              <FormButton
                buttonName="Utwórz konto"
                buttonOnClick={this.handleOnClickSave}
                buttonColor="gray"
                buttonInline={true}
              />
            </div>
          </div>
        </div>
      </CSSTransition>
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
    errorNetwork: state.errorNetwork,
    registrationValidation: state.registrationValidation,
    animationTiming: state.animationTiming
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actionTypes.auth(email, password, isSignUp)),
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    is_error_account: value => dispatch(actionTypes.is_error_account(value)),
    registration_visible: () => dispatch(actionTypes.registration_visible()),
    error_network: value => dispatch(actionTypes.error_network(value)),
    registration_validation_change: value =>
      dispatch(actionTypes.registration_validation_change(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
