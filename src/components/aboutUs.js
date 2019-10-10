import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";

export default class AboutUs extends Component {
  render() {
    return (
      <div id="about_us" className="margin-80">
        <Title name="O NAS" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          reiciendis placeat porro, error sed fugit laboriosam? Quasi molestiae
          temporibus ipsum aliquid possimus libero repudiandae unde enim,
          quisquam nulla consequatur nostrum?Illum explicabo quisquam voluptatum
          alias. Earum numquam accusantium minus. Eligendi fugit quod tempora
          rem enim omnis, eos, odio tempore numquam, nobis nam dolore fugiat
          sequi. Distinctio asperiores sint debitis ut!
        </p>
      </div>
    );
  }
}
