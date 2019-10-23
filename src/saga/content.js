// import { delay } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import * as actions from "../store/actions";
import axios from "axios";

export function* getDisabledDataSaga(action) {
  yield put(actions.spinner(true));
  let url = "https://apartment-3c7b9.firebaseio.com/disabledAllDate.json";

  try {
    const response = yield axios.get(url);
    yield put(actions.save_all_dispatch_array(response.data));
    yield put(actions.spinner(false));
  } catch (error) {
    yield put(actions.spinner(false));
  }
}

export function* getOrderSaga(action) {
  //   yield put(actions.spinner(true));
  //   let url =
  //     "https://apartment-3c7b9.firebaseio.com/orders.json?auth=" +
  //     action.userToken +
  //     '&orderBy="userId"&equalTo="' +
  //     action.userId +
  //     '"';
  //   try {
  //     const response = yield axios.get(url);
  //     yield put(actions.save_all_dispatch_array(response.data));
  //     yield put(actions.spinner(false));
  //   } catch (error) {
  //     yield put(actions.spinner(false));
  //   }
}

export function* addNewDisabledDataSaga(action) {
  yield put(actions.spinner(true));
  const authData = {
    date: action.date,
    timeDay: action.timeDay,
    timeNight: action.timeNight
    // actualReservation: action.actualReservation
  };
  if (action.actualObjectName) {
    let url = `https://apartment-3c7b9.firebaseio.com/disabledAllDate/${action.actualObjectName}.json`;

    try {
      yield axios.put(url, authData);
      yield put(actions.get_disabled_date());
      yield put(
        actions.add_new_order(
          action.price,
          action.date,
          action.timeDay,
          action.timeNight,
          action.actualReservation,
          action.actualObjectName,
          action.userId,
          action.disabledDataValue
        )
      );
    } catch (error) {
      yield put(actions.spinner(false));
    }
  } else {
    let url = "https://apartment-3c7b9.firebaseio.com/disabledAllDate.json";
    try {
      yield axios.post(url, authData);
      yield put(actions.get_disabled_date());
      yield put(
        actions.add_new_order(
          action.price,
          action.date,
          action.timeDay,
          action.timeNight,
          action.actualReservation,
          action.actualObjectName,
          action.userId
        )
      );
    } catch (error) {
      yield put(actions.spinner(false));
    }
  }
}

export function* addNewOrderSaga(action) {
  yield put(actions.spinner(true));
  let authData = {
    date: action.date,
    userId: action.userId,
    price: action.price
  };
  if (action.timeDay && action.timeNight) {
    authData = {
      date: action.date,
      timeDay: action.timeDay,
      timeNight: action.timeNight,
      userId: action.userId,
      price: action.price
    };
  } else if (action.timeDay && !action.timeNight) {
    authData = {
      date: action.date,
      timeDay: action.timeDay,
      userId: action.userId,
      price: action.price
    };
  } else if (!action.timeDay && action.timeNight) {
    authData = {
      date: action.date,
      timeNight: action.timeNight,
      userId: action.userId,
      price: action.price
    };
  }

  let filterArray = null;
  if (action.disabledDataValue) {
    filterArray = action.disabledDataValue.filter(
      item => item.date === action.date
    );
  }

  if (filterArray) {
    if (filterArray[0].timeDay) {
      authData = {
        date: action.date,
        timeNight: action.timeNight,
        userId: action.userId,
        price: action.price
      };
    } else if (filterArray[0].timeNight) {
      authData = {
        date: action.date,
        timeDay: action.timeDay,
        userId: action.userId,
        price: action.price
      };
    }
  }

  let url = "https://apartment-3c7b9.firebaseio.com/orders.json";
  try {
    yield axios.post(url, authData);
    yield put(actions.order_accept(false));
    yield put(actions.buy_bool());
    yield put(actions.spinner(false));
  } catch (error) {
    yield put(actions.spinner(false));
  }
}
