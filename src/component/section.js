import React, { Component } from "react";
import "../scss/section.scss";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import Reservation from "../components/reservation";
import PriceList from "../components/priceList";
import Contact from "../components/contact";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import asyncCompontnt from "../elements/asyncComponent/asyncComponent";
const AsyncCallendary = asyncCompontnt(() => {
  return import("../components/callendary");
});

class Section extends Component {
  render() {
    return (
      <section>
        <div className="jumbotron-fluid">
          <div className="container">
            <AboutUs />
            {/* <AsyncCallendary /> */}
            <Reservation />
            <PriceList />
          </div>
          <Gallery />
          <div className="container">
            <Contact />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderAccept: state.orderAccept
  };
};

const mapDispatchToProps = dispatch => {
  return {
    menu_visible: () => dispatch(actionTypes.menu_visible())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
