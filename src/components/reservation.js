import React, { Component } from "react";
import "../scss/section.scss";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import Title from "../elements/Title/Title";

class Reservation extends Component {
  componentDidMount() {
    const value = this.refs.rezervation.offsetTop;
    this.props.refs_add("refRezervation", value);
  }

  render() {
    return (
      <div className="margin-80" id="rezervation" ref="rezervation">
        <Title name="REZERWACJA" />
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
)(Reservation);
