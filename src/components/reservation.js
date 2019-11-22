import React, { Component } from "react";
import "../scss/section.scss";
// import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import Title from "../elements/Title/Title";
import { Element } from "react-scroll";

class Reservation extends Component {
  render() {
    return (
      <Element name="rezervation">
        <div className="margin-80">
          <Title name="REZERWACJA" />
          <div className="firstTextWidth textColor">
            <p>
              Jak na ten moment o dostępne terminy prosimy dopytywać się
              telefonicznie pod numerem telefonu 666-196-075. Kwotę za najem
              lokalu należy uiścić jak najszybciej po jego rezerwacji - kartą i
              gotówką (na Struga 18) lub przelewem. Wszystkie niezbędne dane do
              przelewu będą mieli Państwo podane w umowie. Nasz programista jest
              na etapie tworzenia aplikacji, dzięki której będziecie widzieli
              kalendarz zarówno z dostępnymi jak i zajętymi terminami. Oprócz
              tego, będziecie mogli tez od razu opłacić rezerwacje, dzięki czemu
              będziecie mieli pewność, ze nikt nie zarezerwuje terminu nagle
              przed Wami. Wszystko już wiecie? Jeśli tak to działamy -
              zapraszamy do współpracy.
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

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
