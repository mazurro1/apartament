import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "../scss/nav.scss";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/formButton/FormButton";
import { Link, scrollSpy } from "react-scroll";

// import logo from "../img/logo.png";
import logoOnly from "../img/logoOnly.png";

class Nav extends Component {
  state = {
    olValue: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    scrollSpy.update();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const newValue = window.pageYOffset;
    const nav = this.refs.nav;
    const menuNav = this.refs.menuNav;
    const navClass = nav.classList.contains("navdUp");
    const menuClass = menuNav.classList.contains("menuNavUp");
    // const navElement = document.querySelector(".navBacgdround"); 1
    // navElement.classList.remove("navBacgdroundDown"); 1
    // navElement.classList.add("navBacgdroundUp"); 1
    if (this.props.signed) {
      menuNav.classList.add("menuNavUp");
      menuNav.classList.remove("menuNavDown");
    }

    if (window.pageYOffset - window.innerHeight + 76 > 0) {
      if (
        !this.props.signed &&
        !this.props.registrationVisible &&
        !this.props.loginVisible
      ) {
        if (
          this.state.oldValue - newValue < 0 &&
          !navClass &&
          !this.props.menuVisible
        ) {
          nav.classList.add("navdUp");
          nav.classList.remove("navDown");
        } else if (this.state.oldValue - newValue > 0 && navClass) {
          nav.classList.remove("navdUp");
          nav.classList.add("navDown");
        }
      }

      if (this.props.signed) {
        if (this.state.oldValue - newValue < 0 && !menuClass) {
          menuNav.classList.remove("menuNavDown");
          menuNav.classList.add("menuNavUp");
        } else if (this.state.oldValue - newValue > 0 && menuClass) {
          menuNav.classList.remove("menuNavDown");
          menuNav.classList.add("menuNavUp");
        }
      } else {
        if (
          (this.props.registrationVisible || this.props.loginVisible) &&
          !menuClass
        ) {
          menuNav.classList.add("menuNavUp");
          menuNav.classList.remove("menuNavDown");
        }
      }
      // navElement.classList.add("navBacgdroundDown");  1
      // navElement.classList.remove("navBacgdroundUp"); 1
    }
    this.setState({
      oldValue: newValue
    });
  };

  // scrollToBottom = () => {
  //   scroll.scrollToBottom();
  //   console.log("xd");
  // };
  render() {
    const classLogoNav =
      this.props.menuVisible ||
      this.props.registrationVisible ||
      this.props.loginVisible
        ? "transformNavLogoUp animation d-none d-md-block"
        : "transformNavLogo animation d-none d-md-block";
    const buttonsLogin = this.props.signed ? (
      <>
        <div className="user">
          <div className="ml-3">{this.props.userName}</div>
        </div>
        <div className="dropDownMenu text-right" ref="xd">
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
        <div className={classLogoNav}>
          <div className="logoNav">
            <div className="logoCircle">
              <img src={logoOnly} alt="logo" />
            </div>
            <div className="textLogo">SŁONECZNY APARTAMENT</div>
          </div>
        </div>
        {/* <div className="logoImage">
          <img src={logo} />
        </div> */}
        <div className="row">
          <div className="col-6 d-none">
            <FormButton
              buttonName="Rejestracja"
              buttonOnClick={this.props.registration_visible}
              buttonColor="gray"
              buttonInline={true}
              width="120"
              className="buttonEffectIndex"
            />
          </div>
          <div className="col-6 text-right d-none">
            <FormButton
              buttonName="Logowanie"
              buttonOnClick={this.props.login_visible}
              buttonColor="red"
              buttonInline={true}
              width="120"
              className="buttonEffectIndex"
            />
          </div>
        </div>
      </div>
    );
    const navBgClass = this.props.signed
      ? "navBacgdround navBacgdroundDown"
      : "navBacgdround navBacgdroundDown";

    const menuNavClass = this.props.signed
      ? "menuNav menuNavUp menuNavUpMobile"
      : this.props.registrationVisible ||
        this.props.loginVisible ||
        this.props.menuVisible
      ? "menuNav menuNavUp"
      : "menuNav menuNavDown";

    const menuMobileClass = !this.props.menuVisible
      ? "menuMobile"
      : "menuMobile menuMobileActive";

    const navClass =
      this.props.menuVisible ||
      this.props.registrationVisible ||
      this.props.loginVisible ||
      this.props.signed
        ? "navDown"
        : "navUp";
    return (
      <nav className={navClass} ref="nav">
        <div className={navBgClass}></div>
        {buttonsLogin}
        <div className={menuNavClass} ref="menuNav">
          <div
            className="d-lg-none menuMobilePosition"
            onClick={this.props.menu_visible}
          >
            <div className={menuMobileClass}>
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
          </div>
          <ul className="m-0 p-0 d-none d-lg-block">
            <li>
              <Link
                activeClass="elementNavActive"
                className="elementNav"
                to="about"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                O NAS
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="elementNavActive"
                className="elementNav"
                to="callendary"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                KALENDARZ
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="elementNavActive"
                className="elementNav"
                to="rezervation"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                REZERWACJA
              </Link>
            </li>
            <li>
              <Link
                activeClass="elementNavActive"
                className="elementNav"
                to="priceList"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                CENNIK
              </Link>
            </li>
            <li>
              <Link
                activeClass="elementNavActive"
                className="elementNav"
                to="gallery"
                spy={true}
                offset={-100}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                GALERIA
              </Link>
            </li>
            <li>
              <Link
                className="elementNav"
                activeClass="elementNavActive"
                to="contact"
                spy={true}
                offset={-150}
                duration={500}
                // onClick={this.scrollToBottom}
              >
                KONTAKT
              </Link>
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
    settingsAccountVisible: state.settingsAccountVisible,
    menuVisible: state.menuVisible
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
