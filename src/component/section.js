import React, { Component } from "react";
import "../scss/section.scss";
import AboutUs from "../components/aboutUs";
import Gallery from "../components/gallery";
import Callendary from "../components/callendary";
import Reservation from "../components/reservation";
import Contact from "../components/contact";

export default class Section extends Component {
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
