import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
// import { Redirect } from "react-router-dom";
import FormButton from "../elements/formButton/FormButton";
import ClosePage from "../elements/closePage/closePage";

class Login extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
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
        <div className="container positionRelative">
          <ClosePage onClick={this.props.order_visible} />
          <Title name="ZAMÓWIENIA" />

          <div className="text-center">
            <FormButton
              buttonName="Zatwierdź"
              // buttonOnClick={handleOnClickSave}
              buttonColor="gray"
              buttonInline={true}
            />
          </div>
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
