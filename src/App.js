import React from "react";
import Section from "./components/section";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Header from "./components/header";

export default class App extends React.Component {
  state = {
    menuBool: false
  };

  menuHandleClick = () => {
    this.setState(prevState => ({
      menuBool: !prevState.menuBool
    }));
  };

  render() {
    const { menuBool } = this.state;
    const { menuHandleClick } = this;
    return (
      <div className="App">
        <Nav menuBool={menuBool} menuHandleClick={menuHandleClick} />
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}
