import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";

export default class Contact extends Component {
  render() {
    return (
      <div className="">
        <Title name="KONTAKT" />
        <div className="text-center text-white">
          <h5>PC-TECH RADOM</h5>
          <h6>26-600 Radom</h6>
          <h6>Ul. Struga 18</h6>
        </div>
      </div>
    );
  }
}
