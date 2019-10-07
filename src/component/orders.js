import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
// import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormButton from "../elements/formButton/FormButton";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.orderVisible !== this.props.orderVisible ||
      nextState !== this.state
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        className={
          this.props.orderVisible
            ? "registration registrationDown scrollbar scrollbar-primary"
            : "registration scrollbar scrollbar-primary"
        }
      >
        <div className="closePage" onClick={this.props.order_visible}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div className="container">
          <Title name="ZAMÓWIENIA" />
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
    orderVisible: state.orderVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    order_visible: () => dispatch(actionTypes.order_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
