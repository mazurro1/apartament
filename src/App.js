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

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.props.authChechState();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="positionRelative">
            <Route path="/" exact component={Header} />
            <Route path="/" exact component={Section} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </div>
          <Footer />
          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
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
