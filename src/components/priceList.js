import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import { Element } from "react-scroll";

class Reservation extends Component {
  render() {
    return (
      <Element name="priceList">
        <div className="margin-80">
          <Title name="CENNIK" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            reiciendis placeat porro, error sed fugit laboriosam? Quasi
            molestiae temporibus ipsum aliquid possimus libero repudiandae unde
            enim, quisquam nulla consequatur nostrum?Illum explicabo quisquam
            voluptatum alias. Earum numquam accusantium minus. Eligendi fugit
            quod tempora rem enim omnis, eos, odio tempore numquam, nobis nam
            dolore fugiat sequi. Distinctio asperiores sint debitis ut!
          </p>
        </div>
      </Element>
    );
  }
}

export default Reservation;
