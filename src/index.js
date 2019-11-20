import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { watchAuth, content } from "./saga/index";

// const logger = store => {
//   return next => {
//     return action => {
//       // console.log("Action: ", action); //pokazuje akcję, która została wykonana przy zmianie stanu w redux
//       // console.log("New state:", store.getState()); //Pokazuje zaktualizowany stan w redux, jeżeli zmienimy wynik jakieś zmiennej
//       const result = next(action);
//       return result;
//     };
//   };
// };
const sagaMiddleware = createSagaMiddleware();

//wersja dla developera
// const composeEnhancers =
//   process.env.NODE_ENV === "developmen"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

//wersja na produkcje
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(content);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
