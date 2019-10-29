import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Redirect } from "react-router-dom";
import Section from "./component/section";
import * as actionTypes from "./store/actions";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Header from "./component/header";
import Spinner from "./elements/Spinner/Spinner";
import Orders from "./component/orders";
import Modal from "./elements/Modal/Modal";
import Summary from "./component/summary";
import MenuMobile from "./component/menuMobile";
import asyncCompontnt from "./elements/asyncComponent/asyncComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import CSSTransition from "react-transition-group/CSSTransition";
const AsyncLogin = asyncCompontnt(() => {
  return import("./component/login");
});
const AsyncRegistration = asyncCompontnt(() => {
  return import("./component/registration");
});
const AsyncAccountSettings = asyncCompontnt(() => {
  return import("./component/accountSettings");
});

const App = () => {
  // const appRef = useRef();
  const spinnerRedux = useSelector(state => state.spinner);
  const errorNetwork = useSelector(state => state.errorNetwork);
  const deleteAccount = useSelector(state => state.deleteAccount);
  const buy = useSelector(state => state.buy);
  const signed = useSelector(state => state.signed);

  const dispatch = useDispatch();
  const error_network = () => {
    dispatch(actionTypes.error_network(false));
  };
  const delete_account_bool = () => {
    dispatch(actionTypes.delete_account_bool(false));
  };
  const buy_bool = () => {
    dispatch(actionTypes.buy_bool());
  };
  const authChechState = () => {
    dispatch(actionTypes.authChechState());
  };

  const buy_timeout = () => {
    dispatch(actionTypes.buy_timeout());
  };

  useEffect(() => {
    authChechState();
  }, []);

  const spinner = spinnerRedux ? <Spinner /> : null;
  const modalNetwork = errorNetwork ? (
    <Modal
      name="Brak internetu"
      modalOn={true}
      onClickButton={() => error_network(false)}
    />
  ) : (
    <Modal
      name="Brak internetu"
      modalOn={false}
      onClickButton={() => error_network(false)}
    />
  );

  const modalDeleteAccount = deleteAccount ? (
    <Modal
      name="Konto zostało usunięte"
      modalOn={true}
      onClickButton={() => delete_account_bool(false)}
      modalError={false}
    />
  ) : (
    <Modal
      name="Konto zostało usunięte"
      modalOn={false}
      onClickButton={() => delete_account_bool(false)}
      modalError={false}
    />
  );

  const modalBuy = buy ? (
    <Modal
      name="Rezerwacja wykonana pomyślnie! Sprawdź szczegóły w zamówieniach."
      modalOn={true}
      onClickButton={() => buy_bool()}
      modalError={false}
    />
  ) : (
    <Modal
      name="Rezerwacja wykonana pomyślnie! Sprawdź szczegóły w zamówieniach."
      modalOn={false}
      onClickButton={() => buy_bool()}
      modalError={false}
    />
  );
  const components = signed ? (
    <>
      <Orders />
      <AsyncAccountSettings />
    </>
  ) : (
    <></>
  );

  const { width, height } = useWindowSize();
  if (buy) {
    setTimeout(() => {
      buy_timeout();
    }, 8000);
  }

  return (
    <div className="App">
      {spinner}
      <BrowserRouter>
        <Nav />

        <div className="">
          <Summary />
        </div>
        <div className="positionRelative">
          <div className="modalMenu">
            <div className="positionRelative">
              {modalNetwork}
              {modalDeleteAccount}
              {modalBuy}
            </div>
          </div>
          <MenuMobile />
          <AsyncLogin />
          <AsyncRegistration />
          {components}
          {/* <Route path="/orders" exact component={Orders} /> */}
          <Header />
          <Section />
        </div>
        {/* {confetti} */}
        <Footer />
        <CSSTransition
          in={buy}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames="animationOpacity"
        >
          <div className="confetti">
            <Confetti width={width} height={height} numberOfPieces={200} />
          </div>
        </CSSTransition>
        <Redirect to="/" />
      </BrowserRouter>
    </div>
  );
};

export default App;
// const mapStateToProps = state => {
//   return {
//     spinner: state.spinner,
//     errorNetwork: state.errorNetwork,
//     deleteAccount: state.deleteAccount,
//     buy: state.buy,
//     loginVisible: state.loginVisible,
//     signed: state.signed
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     authChechState: () => dispatch(actionTypes.authChechState()),
//     error_network: value => dispatch(actionTypes.error_network(value)),
//     delete_account_bool: value =>
//       dispatch(actionTypes.delete_account_bool(value)),
//     is_newAccount: value => dispatch(actionTypes.is_newAccount(value)),
//     buy_bool: () => dispatch(actionTypes.buy_bool())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
