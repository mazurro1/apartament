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

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.props.authChechState();
  }

  render() {
    const spinner = this.props.spinner ? <Spinner /> : null;

    return (
      <div className="App">
        {spinner}
        <BrowserRouter>
          <Nav />
          <div className="positionRelative">
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
    spinner: state.spinner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authChechState: () => dispatch(actionTypes.authChechState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
