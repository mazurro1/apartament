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
  state = {
    olValue: 0
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps === this.props) {
  //     if (nextState.olValue !== this.state.olValue) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  handleScroll = e => {
    const newValue = window.pageYOffset;
    const navElement = document.querySelector(".navBacgdround");
    const nav = document.querySelector("nav");
    const menuNav = document.querySelector(".menuNav");
    // console.log(window.innerHeight);

    navElement.classList.remove("navBacgdroundDown");
    navElement.classList.add("navBacgdroundUp");
    if (this.props.signed) {
      menuNav.classList.add("menuNavUp");
      menuNav.classList.remove("menuNavDown");
    }
    if (window.pageYOffset - window.innerHeight + 76 > 0) {
      if (
        !this.props.signed &&
        !this.props.registrationVisible &&
        !this.props.loginVisible
        // !this.props.settingsAccountVisible
      ) {
        // console.log(navElement);

        if (this.state.oldValue - newValue < 0) {
          nav.classList.add("navdUp");
          nav.classList.remove("navDown");
          // console.log("down");
          // firstElement.classList.add("classNavDown");
          // firstElement.classList.remove("classNavUp");
        } else if (this.state.oldValue - newValue > 0) {
          nav.classList.remove("navdUp");
          nav.classList.add("navDown");
          // console.log("up");
          // firstElement.classList.add("classNavUp");
          // firstElement.classList.remove("classNavDown");
        }
      }
      if (this.props.signed) {
        if (this.state.oldValue - newValue < 0) {
          menuNav.classList.remove("menuNavDown");
          menuNav.classList.add("menuNavUp");
        } else if (this.state.oldValue - newValue > 0) {
          menuNav.classList.remove("menuNavDown");
          menuNav.classList.add("menuNavUp");
        }
      } else {
        menuNav.classList.remove("menuNavUp");
        menuNav.classList.add("menuNavDown");
      }

      navElement.classList.add("navBacgdroundDown");
      navElement.classList.remove("navBacgdroundUp");
    }
    this.setState({
      oldValue: newValue
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

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
      <div className="paddingNav">
        {/* <div className=" text-left"> */}
        {/* <NavLink to="/"> */}
        <FormButton
          buttonName="Rejestracja"
          buttonOnClick={this.props.registration_visible}
          buttonColor="gray"
          buttonInline={true}
          width="120"
        />
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        {/* <FormButton
          buttonName="Logowanie"
          buttonOnClick={this.props.login_visible}
          buttonColor="red"
          buttonInline={true}
          width="120"
        /> */}
        {/* </NavLink> */}
        {/* </div> */}
        <div className="buttonLoginClass text-right">
          {/* <NavLink to="/"> */}
          {/* <FormButton
        buttonName="Rejestracja"
        buttonOnClick={this.props.registration_visible}
        buttonColor="gray"
        buttonInline={true}
        width="120"
      /> */}
          {/* </NavLink> */}
          {/* <NavLink to="/"> */}
          <FormButton
            buttonName="Logowanie"
            buttonOnClick={this.props.login_visible}
            buttonColor="red"
            buttonInline={true}
            width="120"
          />
          {/* </NavLink> */}
        </div>
      </div>
    );
    const navBgClass = this.props.signed
      ? "navBacgdround navBacgdroundDown"
      : "navBacgdround navBacgdroundDown";

    const menuNavClass = this.props.signed
      ? "menuNav menuNavUp"
      : "menuNav menuNavDown";
    return (
      <nav className="">
        {/* <div className="logo">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={this.props.menu_visible}
          />
        </div> */}
        <div className={navBgClass}></div>
        {buttonsLogin}
        <div className={menuNavClass}>
          <ul className="m-0 p-0">
            <li>
              <NavLink to="/" className="elementNav">
                O NAS
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="elementNav">
                KALENDARZ
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="elementNav">
                REZERWACJA
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="elementNav">
                CENNIK
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="elementNav">
                GALERIA
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="elementNav">
                KONTAKT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    signed: state.signed,
    userName: state.userName,
    registrationVisible: state.registrationVisible,
    loginVisible: state.loginVisible,
    settingsAccountVisible: state.settingsAccountVisible
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
