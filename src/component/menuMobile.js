import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import ClosePage from "../elements/closePage/closePage";

class MenuMobile extends Component {
  scrollTo = name => {
    this.props.menu_visible();
    window.scrollTo({
      top: this.props[name] - 50
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.menuVisible !== this.props.menuVisible) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        className={
          this.props.menuVisible
            ? "registration registrationDown"
            : "registration"
        }
      >
        <div className="container positionRelative">
          <ClosePage onClick={this.props.menu_visible} />
          <div className="pt-1">
            <Title name="MENU" />
          </div>
          <div className="text-center menuMobileClass">
            <div onClick={() => this.scrollTo("refAbout")}>O NAS</div>
            <div onClick={() => this.scrollTo("refCallendary")}>KALENDARZ</div>
            <div onClick={() => this.scrollTo("refRezervation")}>
              REZERWACJA
            </div>
            {/* <div onClick={() => this.scrollTo("refPrice")}>CENNIK</div> */}
            <div onClick={() => this.scrollTo("refGallery")}>GALERIA</div>
            <div onClick={() => this.scrollTo("refContact")}>KONTAKT</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.menuVisible,
    refContact: state.refContact,
    refGallery: state.refGallery,
    refPrice: state.refPrice,
    refRezervation: state.refRezervation,
    refCallendary: state.refCallendary,
    refAbout: state.refAbout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    error_network: value => dispatch(actionTypes.error_network(value)),
    menu_visible: () => dispatch(actionTypes.menu_visible())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuMobile);
