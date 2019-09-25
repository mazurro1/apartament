import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Img</NavLink>
        <NavLink
          to={{
            hash: "#about_us"
          }}
        >
          O nas
        </NavLink>
        <NavLink
          to={{
            hash: "#reserwation"
          }}
        >
          Rezerwacja
        </NavLink>
        <NavLink
          to={{
            hash: "#callendary"
          }}
        >
          Kalendarz
        </NavLink>
        <NavLink
          to={{
            hash: "#gallery"
          }}
        >
          Galeria
        </NavLink>
        <NavLink
          to={{
            hash: "#contact"
          }}
        >
          Kontakt
        </NavLink>
      </nav>
    );
  }
}
export default Nav;
