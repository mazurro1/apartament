import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
// import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import { Element } from "react-scroll";

class Contact extends Component {
  render() {
    return (
      <Element name="contact">
        <div className="margin-50">
          <Title name="KONTAKT" />
          <div className="text-white">
            <div className="firstTextWidth text-center">
              <p>
                W przypadku jakichkolwiek pytań serdecznie zapraszamy do
                kontaktu. Jesteśmy do Waszej dyspozycji 24h na dobę - w
                ekstremalnych godziach prosimy o wiadomość SMS.
              </p>
            </div>
            <div className="contactWidth">
              <div className="row mt-4">
                <div className=" col-6 text-right">
                  <h6>Adres:</h6>
                </div>
                <div className="col-6 text-left">
                  <h6>26-600 Radom, ul. Struga 18</h6>
                </div>
                <div className="col-6 text-right">
                  <h6>Telefon:</h6>
                </div>
                <div className="col-6 text-left">
                  <h6>666-196-075</h6>
                </div>
                <div className="col-6 text-right">
                  <h6>Adres e-mail:</h6>
                </div>
                <div className="col-6  text-left">
                  <h6>slonecznyradom@gmail.com</h6>
                </div>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
