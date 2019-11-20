import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import ClosePage from "../elements/closePage/closePage";
import CSSTransition from "react-transition-group/CSSTransition";
import { Link } from "react-scroll";

class MenuMobile extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.menuVisible !== this.props.menuVisible) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <CSSTransition
        in={this.props.menuVisible}
        timeout={this.props.animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="animationLeft"
      >
        <div className="pagePosition">
          <div className="container positionRelative">
            <ClosePage onClick={this.props.menu_visible} />
            <div className="pt-1">
              <Title name="MENU" />
            </div>
            <div className="text-center menuMobileClass">
              <Link
                activeClass="elementActive"
                className="menuMobileClassOnly"
                to="about"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
                onClick={this.props.menu_visible}
              >
                <div className="width100">O NAS</div>
              </Link>

              <Link
                activeClass="elementActive"
                className="menuMobileClassOnly"
                to="callendary"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
                onClick={this.props.menu_visible}
              >
                <div className="width100">KALENDARZ </div>
              </Link>

              <Link
                activeClass="elementActive"
                className="menuMobileClassOnly"
                to="rezervation"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
                onClick={this.props.menu_visible}
              >
                <div className="width100">REZERWACJA </div>
              </Link>

              <Link
                activeClass="elementActive"
                className="menuMobileClassOnly"
                to="gallery"
                spy={true}
                offset={-100}
                duration={500}
                onSetActive={this.handleSetActive}
                onClick={this.props.menu_visible}
              >
                <div className="width100">GALERIA </div>
              </Link>

              <Link
                activeClass="elementActive"
                className="menuMobileClassOnly"
                to="contact"
                spy={true}
                offset={-150}
                duration={500}
                onSetActive={this.handleSetActive}
                onClick={this.props.menu_visible}
              >
                <div className="width100">KONTAKT </div>
              </Link>

              {/* <div onClick={this.props.menu_visible}>KALENDARZ</div> */}
              {/* <div onClick={this.props.menu_visible}>REZERWACJA</div> */}
              {/* <div onClick={this.props.menu_visible}>CENNIK</div> */}
              {/* <div onClick={this.props.menu_visible}>GALERIA</div> */}
              {/* <div onClick={this.props.menu_visible}>KONTAKT</div> */}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuVisible: state.menuVisible,
    animationTiming: state.animationTiming
  };
};

const mapDispatchToProps = dispatch => {
  return {
    error_network: value => dispatch(actionTypes.error_network(value)),
    menu_visible: () => dispatch(actionTypes.menu_visible())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile);
