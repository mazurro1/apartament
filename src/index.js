import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import App from "./App";

const logger = store => {
  return next => {
    return action => {
      console.log("Action: ", action); //pokazuje akcję, która została wykonana przy zmianie stanu w redux
      console.log("New state:", store.getState()); //Pokazuje zaktualizowany stan w redux, jeżeli zmienimy wynik jakieś zmiennej
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
