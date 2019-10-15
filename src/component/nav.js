import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/nav.scss";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBars } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/formButton/FormButton";

class Nav extends Component {
  render() {
    const buttonsLogin = this.props.signed ? (
      <>
        <div className="user">
          <div className="ml-3">{this.props.userName}</div>
        </div>
        <div className="dropDownMenu text-right">
          <div className="d-inline-block">
            <DropdownButton
              variant=""
              alignRight
              id="dropdown-menu-align-right"
              title={<FontAwesomeIcon icon={faCog} />}
            >
              <Dropdown.Item
                onClick={this.props.order_visible}
                className="text-center"
              >
                Zamówienia
              </Dropdown.Item>
              <Dropdown.Item
                onClick={this.props.settings_account_visible}
                className="text-center"
              >
                Ustawienia konta
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={this.props.logOut}
                className="text-center pl-1 pr-1"
              >
                <FormButton
                  buttonName="Wyloguj"
                  buttonColor="red"
                  buttonInline={false}
                />
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </>
    ) : (
      <div className="text-right min-height">
        <NavLink to="/">
          <FormButton
            buttonName="Rejestracja"
            buttonOnClick={this.props.registration_visible}
            buttonColor="gray"
            buttonInline={true}
            width="120"
          />
        </NavLink>
        <NavLink to="/">
          <FormButton
            buttonName="Logowanie"
            buttonOnClick={this.props.login_visible}
            buttonColor="blue"
            buttonInline={true}
            width="120"
          />
        </NavLink>
      </div>
    );
    return (
      <nav>
        <div className="logo">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={this.props.menu_visible}
          />
        </div>
        {buttonsLogin}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    signed: state.signed,
    userName: state.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    logOut: () => dispatch(actionTypes.log_out()),
    order_visible: () => dispatch(actionTypes.order_visible()),
    settings_account_visible: () =>
      dispatch(actionTypes.settings_account_visible()),
    login_visible: () => dispatch(actionTypes.login_visible()),
    registration_visible: () => dispatch(actionTypes.registration_visible()),
    menu_visible: () => dispatch(actionTypes.menu_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
