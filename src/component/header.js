import React, { Component } from "react";
import "../scss/header.scss";
import img from "../../src/img/video1.mp4";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="firstVideo">
            <video
              poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
              id="bgvid"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={img} type="video/mp4" />
            </video>
          </div>
          <div className="secondVideo">
            <video
              poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
              id="bgvid"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={img} type="video/mp4" />
            </video>
          </div>
        </header>
      </>
    );
  }
}
