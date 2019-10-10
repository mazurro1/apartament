import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import Calendar from "react-calendar";
import FormButton from "../elements/formButton/FormButton";

const disabledAllDate = [
  {
    id: 1,
    disabledDate: "2019-10-12",
    timeDay: true,
    timeNight: true
  },
  {
    id: 2,
    disabledDate: "2019-10-14",
    timeDay: true,
    timeNight: true
  },
  {
    id: 3,
    disabledDate: "2019-10-16",
    timeDay: true,
    timeNight: true
  },
  {
    id: 4,
    disabledDate: "2019-10-18",
    timeDay: true,
    timeNight: false
  },
  {
    id: 5,
    disabledDate: "2019-10-19",
    timeDay: false,
    timeNight: true
  },
  {
    id: 6,
    disabledDate: "2019-10-20",
    timeDay: true,
    timeNight: false
  }
];

export default class Callendary extends Component {
  state = {
    date: null,
    actualDate: new Date(),
    validation: false,
    dataTime: "",
    timeDay: false,
    timeNight: false,
    actualArray: null
  };

  onChange = date => {
    let timeDayNewValue = false;
    let timeNightNewValue = false;
    let actualArray = null;

    const getDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;

    const allArray = [...disabledAllDate];
    const filterArray = allArray.filter(item => item.disabledDate === getDate);
    // console.log(filterArray);
    if (filterArray.length > 0) {
      timeDayNewValue = filterArray[0].timeDay;
      timeNightNewValue = filterArray[0].timeNight;
      actualArray = filterArray;
    }

    this.setState({
      date: date,
      timeDay: timeDayNewValue,
      timeNight: timeNightNewValue,
      actualArray: actualArray
    });
  };

  renderDisabled = (date, view) => {
    const disabledDate = [...disabledAllDate];
    const getDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
    let dateBool = false;

    disabledDate.map(item => {
      if (
        item.disabledDate === getDate &&
        item.timeDay === true &&
        item.timeNight === true
      ) {
        dateBool = true;
      }
    });
    return dateBool;
  };
  handleOrder = () => {
    this.setState({
      validation: true
    });
    if (this.state.actualArray) {
      if (
        this.state.validation &&
        this.state.date &&
        this.state.timeDay &&
        this.state.timeNight
      ) {
        console.log("1 z tablicy");
      }
    } else {
      if (
        this.state.validation &&
        this.state.date &&
        (this.state.timeDay || this.state.timeNight)
      ) {
        if (this.state.timeDay && this.state.timeNight) {
          console.log("2 bez tablicy");
        } else {
          console.log("1 bez tablicy");
        }
      }
    }
  };

  handleAddTime = (e, name) => {
    if (this.state.date) {
      if (this.state.actualArray) {
        if (this.state.actualArray[0][name] === false) {
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
    console.log(this.state.timeDay);
    console.log(this.state.timeNight);
    const minDay = new Date();
    const noSelectDayClass =
      this.state.validation && !this.state.date ? "goDownText" : "";

    const noSelectHourClass =
      this.state.validation &&
      this.state.date &&
      !(this.state.timeNight || this.state.timeDay)
        ? "goDownText"
        : "";

    let dayDayClass = "";
    let dayNightClass = "";

    if (this.state.actualArray) {
      dayDayClass =
        this.state.timeDay && this.state.actualArray[0].timeDay
          ? "btn-danger"
          : this.state.timeDay
          ? "btn-warning"
          : "btn-success";
      dayNightClass =
        this.state.timeNight && this.state.actualArray[0].timeNight
          ? "btn-danger"
          : this.state.timeNight
          ? "btn-warning"
          : "btn-success";
    } else {
      dayDayClass =
        this.state.date && this.state.timeDay ? "btn-warning" : "btn-success";
      dayNightClass =
        this.state.date && this.state.timeNight ? "btn-warning" : "btn-success";
    }

    return (
      <div className="margin-80">
        <Title name="KALENDARZ" />

        <div className="mt-4 mb-4">
          <Calendar
            onChange={this.onChange}
            // value={this.state.date}
            minDate={minDay}
            // maxDate={}
            // maxDate={disabledDate} //przedział jaki okres ma być dostępny
            locale="pl-PL"
            tileDisabled={({ date, view }) => this.renderDisabled(date, view)}
          />
        </div>
        <div className="text-center positionRelative">
          <div className="selectTime mb-4">
            <button
              className={`btn mr-1 ${dayDayClass}`}
              name="timeDay"
              onClick={e => this.handleAddTime(e, "timeDay")}
              // disabled={this.state.timeDay}
            >
              9-18
            </button>
            <button
              className={`btn ml-1 ${dayNightClass}`}
              name="timeNight"
              onClick={e => this.handleAddTime(e, "timeNight")}
              // disabled={this.state.timeNight}
            >
              19-03
            </button>
          </div>
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
      </div>
    );
  }
}
