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
              Jak na ten moment możliwa jest rezerwacja telefoniczna pod numerem 666-196-075. Kwotę za najem lokalu należy uiścić niezwłocznie po jego rezerwacji. Akceptujemy płatność kartą, przelewem lub gotówką (płatną na miejscu). Wszystkie niezbędne dane do przelewu będą mieli Państwo podane w umowie.
            </p>
            <p>
              A już wkrótce.. będziecie mogli dokonać jej również on-line! Wyczekujcie i odwiedzajcie naszą stronę!
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
