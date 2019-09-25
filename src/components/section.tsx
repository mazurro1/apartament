import * as React from "react";
import "../scss/section.scss";
import AboutUs from "./aboutUs";
import Gallery from "./gallery";
import Callendary from "./callendary";
import Reservation from "./reservation";
import Contact from "./contact";

export interface SectionProps {}

export default class Section extends React.Component<SectionProps, {}> {
  render() {
    return (
      <section>
        <div className="jumbotron-fluid sectionBg">
          <div className="container">
            <AboutUs />
            <Gallery />
            <Callendary />
            <Reservation />
            <Contact />
          </div>
        </div>
      </section>
    );
  }
}
