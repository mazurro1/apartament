import React from "react";
import Section from "./Section";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="App">
        <nav>nav</nav>
        <header>header</header>
        <section>
          <Section />
        </section>
        <footer>footer</footer>
      </div>
    );
  }
}
