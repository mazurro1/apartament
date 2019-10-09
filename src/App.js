import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Section from "./component/section";
import * as actionTypes from "./store/actions";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Header from "./component/header";
import Login from "./component/login";
import Registration from "./component/registration";
import Spinner from "./elements/Spinner/Spinner";
import Orders from "./component/orders";
import AccountSettings from "./component/accountSettings";
import Modal from "./elements/Modal/Modal";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.props.authChechState();
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

    const modalNewAccount = this.props.newAccount ? (
      <Modal
        name="Nowe konto zostało utworzone"
        modalError={false}
        modalOn={true}
        onClickButton={() => this.props.is_newAccount(false)}
      />
    ) : (
      <Modal
        name="Nowe konto zostało utworzone"
        modalError={false}
        modalOn={false}
        onClickButton={() => this.props.is_newAccount(false)}
      />
    );
    return (
      <div className="App">
        {spinner}
        <BrowserRouter>
          <Nav />
          <div className="positionRelative">
            {modalNetwork}
            {modalDeleteAccount}
            {modalNewAccount}
            <Route path="/" component={Login} />
            <Route path="/" component={Registration} />
            <Route path="/" component={Orders} />
            <Route path="/" component={AccountSettings} />
            {/* <Route path="/" exact component={Header} /> */}
            <Route path="/" exact component={Section} />
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
    newAccount: state.newAccount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authChechState: () => dispatch(actionTypes.authChechState()),
    error_network: value => dispatch(actionTypes.error_network(value)),
    delete_account_bool: value =>
      dispatch(actionTypes.delete_account_bool(value)),
    is_newAccount: value => dispatch(actionTypes.is_newAccount(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
