import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/nav.scss";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    const buttonsLogin = this.props.signed ? (
      <>
        {this.props.userName}
        <button className="btn btn-danger" onClick={this.props.logOut}>
          Wyloguj
        </button>
      </>
    ) : (
      <>
        <NavLink to="/login">
          <button className="btn btn-primary" onClick={this.props.isLogin}>
            Logowanie
          </button>
        </NavLink>
        <NavLink to="/registration">
          <button
            className="btn btn-primary ml-1"
            onClick={this.props.isRegistration}
          >
            Rejestracja
          </button>
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
    signed: state.signed,
    userName: state.userName
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
