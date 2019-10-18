import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Contact extends Component {
  componentDidMount() {
    const value = this.refs.contact.offsetTop;
    this.props.refs_add("refContact", value);
  }
  render() {
    return (
      <div className="" id="contact" ref="contact">
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
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    refs_add: (name, refs) => dispatch(actionTypes.refs_add(name, refs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
