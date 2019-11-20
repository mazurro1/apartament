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
        <div className="margin-320">
          <Title name="KONTAKT" />
          <div className="text-white">
            <h5 className="text-center">Słoneczny Apartament</h5>
            <div className="contactWidth">
              <div className="row mt-4">
                <div className="col-6 text-right">
                  <h6>Miejscowość:</h6>
                </div>
                <div className="col-6 text-left">
                  <h6>26-600 Radom</h6>
                </div>
                <div className="col-6 text-right">
                  <h6>Ulica:</h6>
                </div>
                <div className="col-6  text-left">
                  <h6>Struga 18</h6>
                </div>
                <div className=" col-6 text-right">
                  <h6>Telefon:</h6>
                </div>
                <div className="col-6 text-left">
                  <h6>666-196-075</h6>
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
