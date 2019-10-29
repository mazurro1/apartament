import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import Calendar from "react-calendar";
import FormButton from "../elements/formButton/FormButton";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Callendary extends Component {
  state = {
    date: null,
    actualDate: new Date(),
    validation: false,
    timeDay: false,
    timeNight: false,
    actualArray: null,
    actualObjectName: null
  };

  componentDidMount() {
    this.props.get_disabled_date();
    const value = this.refs.callendary.offsetTop;
    this.props.refs_add("refCallendary", value);
  }

  onChange = date => {
    let timeDayNewValue = false;
    let timeNightNewValue = false;
    let actualArray = null;
    let actualObjectName = null;

    const getDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
    if (this.props.disabledDate) {
      const allArray = [...this.props.disabledDate];
      const filterArray = allArray.filter(item => item[1].date === getDate);
      if (filterArray.length > 0) {
        timeDayNewValue = filterArray[0][1].timeDay;
        timeNightNewValue = filterArray[0][1].timeNight;
        actualArray = filterArray[0][1];
        actualObjectName = filterArray[0][0];
      }
    }
    this.setState({
      date: date,
      timeDay: timeDayNewValue,
      timeNight: timeNightNewValue,
      actualArray: actualArray,
      actualObjectName: actualObjectName
    });
  };

  renderDisabled = (date, view) => {
    if (this.props.disabledDataValue) {
      const disabledDate = [...this.props.disabledDataValue];
      const getDate = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;
      let dateBool = false;
      disabledDate.map(item => {
        if (
          item.date === getDate &&
          item.timeDay === true &&
          item.timeNight === true
        ) {
          dateBool = true;
        }
        return null;
      });
      return dateBool;
    }
  };
  handleOrder = () => {
    let actualArray = this.state.actualArray;
    let date = this.state.date;
    const month =
      date.getMonth() + 1 < 10 ? "" + date.getMonth() + 1 : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const year = date.getFullYear();
    let validation = true;

    let filterArray = null;
    if (this.state.actualArray) {
      filterArray = this.props.disabledDate.filter(
        item => item[1].date === this.state.actualArray.date
      );
    }
    if (date) {
      const getDate = `${year}-${month}-${day}`;
      if (this.state.actualArray) {
        if (this.state.date && this.state.timeDay && this.state.timeNight) {
          // console.log("1 z tablicy");

          this.props.order_value(
            getDate,
            this.state.timeDay,
            this.state.timeNight,
            filterArray,
            this.state.actualObjectName
          );
          this.props.order_accept(true);
          actualArray = { ...this.state.actualArray };
          actualArray.timeDay = true;
          actualArray.timeNight = true;
          date = null;
          validation = false;
        }
      } else {
        if (this.state.date) {
          if (this.state.timeDay && this.state.timeNight) {
            // console.log("2 bez tablicy");

            this.props.order_value(
              getDate,
              this.state.timeDay,
              this.state.timeNight,
              filterArray,
              this.state.actualObjectName
            );

            this.props.order_accept(true);
            validation = false;
            date = null;
            actualArray = null;
          } else if (this.state.timeDay || this.state.timeNight) {
            // console.log("1 bez tablicy");
            this.props.order_value(
              getDate,
              this.state.timeDay,
              this.state.timeNight,
              filterArray,
              this.state.actualObjectName
            );
            this.props.order_accept(true);

            validation = false;
            date = null;
            actualArray = null;
          }
        }
      }
    }
    this.setState({
      date: date,
      validation: validation,
      actualArray: actualArray
    });
  };

  handleAddTime = (e, name) => {
    if (this.state.date) {
      if (this.state.actualArray) {
        if (this.state.actualArray[name] === false) {
          this.setState(prevState => ({
            [name]: !prevState[name]
          }));
        }
      } else {
        this.setState(prevState => ({
          [name]: !prevState[name]
        }));
      }
    } else {
      this.setState({
        validation: true
      });
    }
  };

  render() {
    let filterArray = null;
    if (this.state.actualArray) {
      filterArray = this.props.disabledDate.filter(
        item => item[1].date === this.state.actualArray.date
      );
    }

    const minDay = new Date();
    let maxYear = minDay.getFullYear();
    let maxMonth = minDay.getMonth() + 4;
    if (minDay.getMonth() + 4 > 12) {
      maxMonth = maxMonth - 12;
      maxYear = maxYear + 1;
    }
    const maxDay = new Date(`${maxYear}-${maxMonth}-${minDay.getDate()}`);

    const noSelectDayClass =
      this.state.validation && !this.state.date ? "goDownText" : "";
    let noSelectHourClass = "";

    let dayDayClass = "gray";
    let dayNightClass = "gray";

    if (this.state.date) {
      if (filterArray) {
        dayDayClass = filterArray[0][1].timeDay
          ? "red"
          : this.state.timeDay
          ? "yellow"
          : "green";
        dayNightClass = filterArray[0][1].timeNight
          ? "red"
          : this.state.timeNight
          ? "yellow"
          : "green";
        noSelectHourClass =
          this.state.validation &&
          this.state.date &&
          !(this.state.timeNight && this.state.timeDay)
            ? "goDownText"
            : "";
      } else {
        dayDayClass =
          this.state.date && this.state.timeDay ? "yellow" : "green";
        dayNightClass =
          this.state.date && this.state.timeNight ? "yellow" : "green";
        noSelectHourClass =
          this.state.validation &&
          this.state.date &&
          !(this.state.timeNight || this.state.timeDay)
            ? "goDownText"
            : "";
      }
    }

    const toOrder =
      this.props.userEmail &&
      this.props.userName &&
      this.props.userId &&
      this.props.userToken ? (
        <div className="text-center positionRelative">
          <div className="buttonIndex">
            <FormButton
              buttonName="Przejdź dalej"
              buttonOnClick={this.handleOrder}
              buttonColor="red"
              buttonInline={true}
            />
          </div>

          <div className={`textSelectDay ${noSelectDayClass}`}>
            Wybierz dzień
          </div>
          <div className={`textSelectDay ${noSelectHourClass}`}>
            Wybierz godzinę
          </div>
        </div>
      ) : (
        <div className="text-center text-danger">
          <h5>Zaloguj się, aby dokonać rezerwacji</h5>
        </div>
      );
    const selectTime =
      this.props.userEmail &&
      this.props.userName &&
      this.props.userId &&
      this.props.userToken ? (
        <h5 className="text-white">Godziny do wyboru</h5>
      ) : null;
    return (
      <div className="margin-80" id="callendary" ref="callendary">
        <Title name="KALENDARZ" />
        <div className="mt-4 mb-4">
          <Calendar
            onChange={this.onChange}
            minDate={minDay}
            maxDate={maxDay}
            activeStartDate={this.state.date}
            value={this.state.date}
            locale="pl-PL"
            tileDisabled={({ date, view }) => this.renderDisabled(date, view)}
          />
        </div>
        <div className="text-center positionRelative">
          {selectTime}
          <div className="selectTime mb-4">
            {/* <button
              className={`btn mr-1 ${dayDayClass}`}
              name="timeDay"
              onClick={e => this.handleAddTime(e, "timeDay")}
              disabled={this.state.date === null}
            >
              9-18
            </button> */}
            <FormButton
              buttonName="9-18"
              buttonOnClick={e => this.handleAddTime(e, "timeDay")}
              buttonColor={dayDayClass}
              buttonInline={true}
              width="60"
            />
            {/* <button
              className={`btn ml-1 ${dayNightClass}`}
              name="timeNight"
              onClick={e => this.handleAddTime(e, "timeNight")}
              disabled={this.state.date === null}
            >
              19-03
            </button> */}
            <FormButton
              buttonName="19-03"
              buttonOnClick={e => this.handleAddTime(e, "timeNight")}
              buttonColor={dayNightClass}
              buttonInline={true}
              width="60"
            />
          </div>
        </div>
        {toOrder}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    disabledDate: state.disabledDate,
    disabledDataValue: state.disabledDataValue,
    orderAccept: state.orderAccept,
    orderValue: state.orderValue,
    userEmail: state.userEmail,
    userName: state.userName,
    userId: state.userId,
    userToken: state.userToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isSigned: value => dispatch(actionTypes.is_signed(value)),
    add_new_disabled_data: (
      date,
      timeDay,
      timeNight,
      actualReservation,
      actualObjectName
    ) =>
      dispatch(
        actionTypes.add_new_disabled_data(
          date,
          timeDay,
          timeNight,
          actualReservation,
          actualObjectName
        )
      ),
    // update_disabled_data: (
    //   date,
    //   timeDay,
    //   timeNight,
    //   actualReservation,
    //   actualObjectName
    // ) =>
    //   dispatch(
    //     actionTypes.update_disabled_data(
    //       date,
    //       timeDay,
    //       timeNight,
    //       actualReservation,
    //       actualObjectName
    //     )
    //   ),
    get_disabled_date: () => dispatch(actionTypes.get_disabled_date()),
    refs_add: (name, refs) => dispatch(actionTypes.refs_add(name, refs)),
    order_accept: value => dispatch(actionTypes.order_accept(value)),
    order_value: (date, timeDay, timeNight, filterArray, objectName) =>
      dispatch(
        actionTypes.order_value(
          date,
          timeDay,
          timeNight,
          filterArray,
          objectName
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callendary);
