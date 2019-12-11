import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
// import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import { Element } from "react-scroll";

class AboutUs extends Component {
  render() {
    return (
      <Element name="about">
        <div className="margin-80">
          <Title name="O NAS" />
          <div className="firstTextWidth textColor">
            <p className="">
              Poszukujecie lokalu, gdzie chcielibyście zorganizować:
            </p>
            <ul>
              <li>imprezę,</li>
              <li>urodziny,</li>
              <li>wieczór kawalerski, panieński,</li>
              <li>spotkanie rodzinne,</li>
              <li>rocznicę, jubileusz,</li>
              <li>event biznesowy,</li>
              <li>filmówkę,</li>
              <li>wspólne oglądanie meczów,</li>
              <li>konsolację,</li>
              <li>sesję zdjęciową,</li>
              <li>konferencję?</li>

            </ul>
            <p className="">
              Jeśli tak, to dobrze trafiliście! Zapraszamy Was serdecznie do nowoczesnego, luksusowego i klimatyzowanego apartamentu o powierzchni 150 m2 w centrum Radomia, tuż obok Galerii Słonecznej. Lokal wyposażony jest w: stoły, krzesła, kanapy, łazienkę oraz sprzęt multimedialny i nagłośnieniowy bardzo wysokiej jakości.
              Posiadamy również VIP ROOM (pokój o powierzchni 15m2) - dodatkowo płatny.
              Dodatkowe informacje uzyskacie pod nr telefonu: 666-196-075.

            </p>

          </div>
        </div>
      </Element>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
