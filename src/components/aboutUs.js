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
              Poszujesz lokalu, gdzie nie będziesz musiał płacić "od talerzyka"?
              Chciałabyś/byś zorganizować:
            </p>
            <ul>
              <li>imprezę,</li>
              <li>urdziny,</li>
              <li>spotkanie rodzinne,</li>
              <li>event biznesowy,</li>
              <li>konferencję?</li>
            </ul>
            <p className="">
              Jeśli na któreś z tych pytań odpowiedziałeś tak, to trafiłeś
              idealnie! Umów się i zobacz nowoczesny, luksusowy lokal tuż w
              centrum Radomia! Wynajmujemy apartament o powierzchni 150m2, w
              którego w skład wchodzą:
            </p>
            <ul>
              <li>1 łazienka,</li>
              <li>VIP ROOM - pokój o powierzchni ... (za dodatkową opłatą),</li>
              <li>
                projektor (jeśli będziesz chciał/a, aby był razem z Wami podczas
                organizowanego wydarzenia pobierana jest dodatkowa kaucja),
              </li>
              <li>
                niezbędne wyposażenie, takie jak stoły, krzesła, czy wieszaki na
                ubrania.{" "}
              </li>
            </ul>
            <p>
              Słoneczny Apartament znajduje się w Radomiu na Struga 18 (II
              piętro bez windy) tuż obok Galerii Słonecznej. Wszystkich
              zainteresowanych zapraszamy serdecznie na spotkanie, w celu
              zobacznia oferowanego przez nas miejsca. Liczba osób, jaką będzie
              mógł pomieścić lokal to 50 osób.
            </p>
            <p>
              Masz więcej pytań? Chciałabyś porozmawiać o szczegółach?
              Zapraszamy do kontaktu. Z chęcią odpowiemy na wszystkie pytania.
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
