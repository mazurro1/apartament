import React, { Component } from "react";
import "../scss/header.scss";
import video from "../../src/img/video.mp4";
import poster from "../../src/img/poster.jpg";

import logo from "../img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="firstVideo">
            <video poster={poster} id="bgvid" playsInline autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
            <div className="headerContent">
              <div className="headerLogo">
                <div className="text-center">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="uperThanVideo">
                <h1 className="">Słoneczny Apartament Zaprasza!</h1>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
