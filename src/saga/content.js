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
  // yield put(actions.spinner(true));
  let url =
    "https://apartment-3c7b9.firebaseio.com/orders.json?auth=" +
    action.userToken +
    '&orderBy="userId"&equalTo="' +
    action.userId +
    '"';
  try {
    const response = yield axios.get(url);
    yield put(actions.user_orders(response.data));
    // yield put(actions.spinner(false));
  } catch (error) {
    // yield put(actions.spinner(false));
  }
}

export function* addNewDisabledDataSaga(action) {
  yield put(actions.spinner(true));
  const date = new Date(action.date);
  const day = Number(date.getDate());
  const month = Number(date.getMonth() + 1);
  const year = date.getFullYear();
  const newDate = `${year}-${month}-${day}`;
  const authData = {
    date: newDate,
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
  const date = yield new Date(action.date);
  const month =
    date.getMonth() + 1 < 10 ? "" + date.getMonth() + 1 : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const year = date.getFullYear();
  const newDate = `${year}-${month}-${day}`;
  yield put(actions.spinner(true));
  let authData = {
    date: newDate,
    userId: action.userId,
    price: action.price
  };
  if (action.timeDay && action.timeNight) {
    authData = {
      date: newDate,
      timeDay: action.timeDay,
      timeNight: action.timeNight,
      userId: action.userId,
      price: action.price
    };
  } else {
    if (action.timeDay) {
      authData = {
        date: newDate,
        timeDay: action.timeDay,
        userId: action.userId,
        price: action.price
      };
    }
    if (action.timeNight) {
      authData = {
        date: newDate,
        timeNight: action.timeNight,
        userId: action.userId,
        price: action.price
      };
    }
  }
  let filterArray = null;
  if (action.disabledDataValue) {
    filterArray = action.disabledDataValue.filter(item => {
      const date = new Date(item.date);
      const day = Number(date.getDate());
      const month = Number(date.getMonth() + 1);
      const year = date.getFullYear();
      const newDate = `${year}-${month}-${day}`;
      return item.date === newDate;
    });
  }

  if (filterArray) {
    if (filterArray[0].timeDay) {
      authData = {
        date: newDate,
        timeNight: action.timeNight,
        userId: action.userId,
        price: action.price
      };
    } else if (filterArray[0].timeNight) {
      authData = {
        date: newDate,
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
    yield put(actions.add_new_order_reducer(authData));
    yield put(actions.spinner(false));
  } catch (error) {
    yield put(actions.spinner(false));
  }
}
