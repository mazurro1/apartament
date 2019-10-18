import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class AboutUs extends Component {
  componentDidMount() {
    const value = this.refs.aboutUs.offsetTop;
    this.props.refs_add("refAbout", value);
  }

  render() {
    return (
      <div id="about_us" className="margin-80" ref="aboutUs">
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

const mapStateToProps = state => {
  return {
    refs: state.refs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refs_add: (name, refs) => dispatch(actionTypes.refs_add(name, refs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
