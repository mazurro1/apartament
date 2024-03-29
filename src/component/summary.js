import React, { Component } from "react";
import FormButton from "../elements/formButton/FormButton";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
import Title from "../elements/Title/Title";
import ClosePage from "../elements/closePage/closePage";
import CSSTransition from "react-transition-group/CSSTransition";

class Summary extends Component {
  handleOrder = price => {
    this.props.add_new_disabled_data(
      this.props.orderValue.date,
      this.props.orderValue.timeDay,
      this.props.orderValue.timeNight,
      "actualReservation",
      this.props.orderValue.objectName,
      this.props.userId,
      this.props.disabledDataValue,
      price
    );
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.orderAccept !== this.props.orderAccept) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let dayMonth = new Date(this.props.orderValue.date);
    dayMonth = dayMonth.getDay() + 1; //6 - piątek, 2- poniedziałek
    let timeStartReservation = "";
    let timeEndReservation = "";
    let price = "";
    let summary = "";
    const bazePrice = 500;
    const weekBazePrice = 1000;
    const rentCost = 1000;

    if (this.props.orderValue.filterArray) {
      if (!this.props.orderValue.filterArray[0][1].timeDay) {
        timeStartReservation = "10:00";
        timeEndReservation = "17:00";
        price = dayMonth < 6 && dayMonth >= 2 ? bazePrice : weekBazePrice;
        summary =
          dayMonth < 6 && dayMonth >= 2
            ? bazePrice + rentCost
            : weekBazePrice + rentCost;
      } else {
        timeStartReservation = "19:00";
        timeEndReservation = "03:00";
        price = dayMonth < 6 && dayMonth >= 2 ? bazePrice : weekBazePrice;
        summary =
          dayMonth < 6 && dayMonth >= 2
            ? bazePrice + rentCost
            : weekBazePrice + rentCost;
      }
    } else {
      if (this.props.orderValue.timeDay && this.props.orderValue.timeNight) {
        timeStartReservation = "10:00";
        timeEndReservation = "03:00";
        price =
          dayMonth < 6 && dayMonth >= 2 ? bazePrice * 2 : weekBazePrice * 2;
        summary =
          dayMonth < 6 && dayMonth >= 2
            ? bazePrice * 2 + rentCost
            : weekBazePrice * 2 + rentCost;
      } else if (this.props.orderValue.timeDay) {
        timeStartReservation = "10:00";
        timeEndReservation = "17:00";
        price = dayMonth < 6 && dayMonth >= 2 ? bazePrice : weekBazePrice;
        summary =
          dayMonth < 6 && dayMonth >= 2
            ? bazePrice + rentCost
            : weekBazePrice + rentCost;
      } else if (this.props.orderValue.timeNight) {
        timeStartReservation = "17:00";
        timeEndReservation = "03:00";
        price = dayMonth < 6 && dayMonth >= 2 ? bazePrice : weekBazePrice;
        summary =
          dayMonth < 6 && dayMonth >= 2
            ? bazePrice + rentCost
            : weekBazePrice + rentCost;
      }
    }
    return (
      <CSSTransition
        in={this.props.orderAccept}
        timeout={this.props.animationTiming}
        mountOnEnter
        unmountOnExit
        classNames="animationLeft"
      >
        <div className="summary scrollbar scrollbar-primary">
          <div className="container positionRelative margin-20 p-0">
            <ClosePage onClick={() => this.props.order_accept(false)} />
            <div className="pt-1">
              <Title name="PODSUMOWANIE" />
            </div>
            <div className="container-fluid">
              <div className="row summaryTableFirst">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8">
                      Dzień rezerwacji:
                    </div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      {this.props.orderValue.date}
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="row summaryTable">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8">
                      Czas rozpoczęcia rezerwacji:
                    </div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      {timeStartReservation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row summaryTable">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8">
                      Czas zakończenia rezerwacji:
                    </div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      {timeEndReservation}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row summaryTable">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8">Cena:</div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      {price} zł
                    </div>
                  </div>
                </div>
              </div>
              <div className="row summaryTable">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8 ">
                      Kaucja(zwrotna przy oddaniu lokalu):
                    </div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      1000 zł
                    </div>
                  </div>
                </div>
              </div>
              <div className="row summaryTable">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-5 col-8 ">Suma:</div>
                    <div className="col-md-5 col-4 text-center font-weight-bold text-success">
                      {summary} zł
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center margin-top-40">
                <FormButton
                  buttonName="Cofnij"
                  buttonOnClick={() => this.props.order_accept(false)}
                  buttonColor="red"
                  buttonInline={true}
                />
                <FormButton
                  buttonName="Zapłać"
                  buttonOnClick={() => this.handleOrder(price)}
                  buttonColor="green"
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
    orderAccept: state.orderAccept,
    orderValue: state.orderValue,
    userId: state.userId,
    disabledDataValue: state.disabledDataValue,
    animationTiming: state.animationTiming
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_disabled_date: () => dispatch(actionTypes.get_disabled_date()),
    order_accept: (value, orderVisible) =>
      dispatch(actionTypes.order_accept(value)),
    add_new_disabled_data: (
      date,
      timeDay,
      timeNight,
      actualReservation,
      actualObjectName,
      userId,
      disabledDataValue,
      price
    ) =>
      dispatch(
        actionTypes.add_new_disabled_data(
          date,
          timeDay,
          timeNight,
          actualReservation,
          actualObjectName,
          userId,
          disabledDataValue,
          price
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
