import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect } from "react-router-dom";
import Section from "./component/section";
import * as actionTypes from "./store/actions";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Header from "./component/header";
import Spinner from "./elements/Spinner/Spinner";
import Orders from "./component/orders";
import Modal from "./elements/Modal/Modal";
import Summary from "./component/summary";
import MenuMobile from "./component/menuMobile";
import asyncCompontnt from "./elements/asyncComponent/asyncComponent";
// import Confetti from "./elements/confetti/confetti";
const AsyncConfetti = asyncCompontnt(() => {
  return import("./elements/confetti/confetti");
});
const AsyncLogin = asyncCompontnt(() => {
  return import("./component/login");
});
const AsyncRegistration = asyncCompontnt(() => {
  return import("./component/registration");
});
const AsyncAccountSettings = asyncCompontnt(() => {
  return import("./component/accountSettings");
});

class App extends Component {
  componentDidMount() {
    this.props.authChechStateSaga();
  }
  render() {
    const spinner = this.props.spinner ? <Spinner /> : null;
    const modalNetwork = this.props.errorNetwork ? (
      <Modal
        name="Brak internetu"
        modalOn={true}
        onClickButton={() => this.props.error_network(false)}
      />
    ) : (
      <Modal
        name="Brak internetu"
        modalOn={false}
        onClickButton={() => this.props.error_network(false)}
      />
    );

    const modalDeleteAccount = this.props.deleteAccount ? (
      <Modal
        name="Konto zostało usunięte"
        modalOn={true}
        onClickButton={() => this.props.delete_account_bool(false)}
        modalError={false}
      />
    ) : (
      <Modal
        name="Konto zostało usunięte"
        modalOn={false}
        onClickButton={() => this.props.delete_account_bool(false)}
        modalError={false}
      />
    );

    const modalBuy = this.props.buy ? (
      <Modal
        name="Rezerwacja wykonana pomyślnie! Sprawdź szczegóły w zamówieniach."
        modalOn={true}
        onClickButton={() => this.props.buy_bool()}
        modalError={false}
      />
    ) : (
      <Modal
        name="Rezerwacja wykonana pomyślnie! Sprawdź szczegóły w zamówieniach."
        modalOn={false}
        onClickButton={() => this.props.buy_bool()}
        modalError={false}
      />
    );
    const components = this.props.signed ? (
      <>
        <Orders />
        <AsyncAccountSettings />
      </>
    ) : (
      <></>
    );

    if (this.props.buy) {
      setTimeout(() => {
        this.props.buy_timeout();
      }, 5000);
    }

    return (
      <div className="App">
        {spinner}
        <BrowserRouter>
          <AsyncConfetti
            buy={this.props.buy}
            height={window.innerHeight}
            width={window.innerWidth}
          />
          <Nav />

          <div className="">
            <Summary />
          </div>
          <div className="positionRelative">
            <div className="modalMenu">
              <div className="positionRelative">
                {modalNetwork}
                {modalDeleteAccount}
                {modalBuy}
              </div>
            </div>
            <MenuMobile />
            <AsyncLogin />
            <AsyncRegistration />
            {components}
            {/* <Route path="/orders" exact component={Orders} /> */}
            <Header />
            <Section />
          </div>

          <Footer />

          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.spinner,
    errorNetwork: state.errorNetwork,
    deleteAccount: state.deleteAccount,
    buy: state.buy,
    loginVisible: state.loginVisible,
    signed: state.signed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authChechStateSaga: () => dispatch(actionTypes.authChechStateSaga()),
    error_network: value => dispatch(actionTypes.error_network(value)),
    delete_account_bool: value =>
      dispatch(actionTypes.delete_account_bool(value)),
    is_newAccount: value => dispatch(actionTypes.is_newAccount(value)),
    buy_bool: () => dispatch(actionTypes.buy_bool()),

    buy_timeout: () => dispatch(actionTypes.buy_timeout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
