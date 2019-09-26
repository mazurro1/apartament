import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/nav.scss";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    const buttonsLogin = this.props.signed ? (
      <>
        <button onClick={this.props.logOut}>Wyloguj</button>
      </>
    ) : (
      <>
        <NavLink to="/login" className="mr-4">
          <button onClick={this.props.isLogin}>Logowanie</button>
        </NavLink>
        <NavLink to="/registration" className="mr-4">
          <button onClick={this.props.isRegistration}>Rejestracja</button>
        </NavLink>
      </>
    );
    return (
      <nav>
        <div className="container">
          <NavLink to="/" className="mr-4">
            Img
          </NavLink>
          <NavLink
            className="mr-4"
            to={{
              hash: "#about_us"
            }}
          >
            O nas
          </NavLink>
          <NavLink
            className="mr-4"
            to={{
              hash: "#reserwation"
            }}
          >
            Rezerwacja
          </NavLink>
          <NavLink
            className="mr-4"
            to={{
              hash: "#callendary"
            }}
          >
            Kalendarz
          </NavLink>
          <NavLink
            className="mr-4"
            to={{
              hash: "#gallery"
            }}
          >
            Galeria
          </NavLink>
          <NavLink
            className="mr-4"
            to={{
              hash: "#contact"
            }}
          >
            Kontakt
          </NavLink>
          {buttonsLogin}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    signed: state.signed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLogin: () => dispatch(actionTypes.is_login()),
    isRegistration: () => dispatch(actionTypes.is_registration()),
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    logOut: () => dispatch(actionTypes.log_out())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
