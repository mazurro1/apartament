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

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.add(100)}>dodaj</button>
        {this.props.counter}
        <BrowserRouter>
          <Nav />
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Section} />
          <Footer />
          <Redirect to="/" />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: number => dispatch(actionTypes.counter_add(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
