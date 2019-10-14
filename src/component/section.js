import React, { Component } from "react";
import "../scss/section.scss";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import Callendary from "../components/callendary";
import Reservation from "../components/reservation";
import Contact from "../components/contact";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Section extends Component {
  render() {
    return (
      <section>
        <div className="jumbotron-fluid sectionBg">
          <div className="container">
            <AboutUs />

            <Callendary />

            <Reservation />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);
