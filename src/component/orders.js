import React, { Component } from "react";
import Title from "../elements/Title/Title";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
// import { Redirect } from "react-router-dom";
import FormButton from "../elements/formButton/FormButton";
import ClosePage from "../elements/closePage/closePage";
import CSSTransition from "react-transition-group/CSSTransition";

class Orders extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.orderVisible !== this.props.orderVisible ||
      nextProps.userOrders !== this.props.userOrders
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const userOrdersReducer = Object.values(this.props.userOrders);
    userOrdersReducer.sort((a, b) => {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });
    let mapOrders = null;
    if (userOrdersReducer.length > 0) {
      mapOrders = userOrdersReducer.map((item, index) => (
        <tr key={index} className="text-center">
          <th scope="row">{index + 1}</th>
          <td>{item.date}</td>
          <td>
            {item.timeDay && item.timeNight
              ? "10:00"
              : item.timeDay
              ? "10:00"
              : "18:00"}
          </td>
          <td>
            {item.timeDay && item.timeNight
              ? "03:00"
              : item.timeDay
              ? "17:00"
              : "03:00"}
          </td>
          <td>{item.price} zł</td>
        </tr>
      ));
    }
    return (
      <CSSTransition
        in={this.props.orderVisible}
        timeout={this.props.animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="animationLeft"
      >
        <div className="pagePosition scrollbar scrollbar-primary">
          <div className="container positionRelative">
            <ClosePage onClick={this.props.order_visible} />
            <div className="pt-1">
              <Title name="ZAMÓWIENIA" />

              <div className="table-responsive">
                <table className="table table-hover table-dark table-width">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">#</th>
                      <th scope="col">Data</th>
                      <th scope="col">Godzina rozpoczęcia</th>
                      <th scope="col">Godzina zakończenia</th>
                      <th scope="col">Cena (bez kaucji)</th>
                    </tr>
                  </thead>
                  <tbody>{mapOrders}</tbody>
                </table>
              </div>
              <div className="text-center margin-90">
                <FormButton
                  buttonName="Zamknij"
                  buttonOnClick={this.props.order_visible}
                  buttonColor="red"
                  buttonInline={true}
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderVisible: state.orderVisible,
    userId: state.userId,
    userToken: state.userToken,
    animationTiming: state.animationTiming,
    userOrders: state.userOrders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    order_visible: () => dispatch(actionTypes.order_visible()),
    get_order: userId => dispatch(actionTypes.get_order(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
