import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import "react-id-swiper/lib/styles/scss/swiper.scss";
import Swiper from "react-id-swiper";
import imagesGallery from "../img/gallery/imagesGallery";
// import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
import { Element } from "react-scroll";

class Gallery extends Component {
  render() {
    const params = {
      effect: "coverflow",
      grabCoursor: true,
      centereSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modyfier: 1
      },
      pagination: {
        el: ".swiper-pagination"
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      renderPrevButton: () => (
        <button className="swiper-button-prev">
          <div className="arrowGalleryLeft">
            <div className="arrowUp" />
            <div className="arrowDown" />
          </div>
        </button>
      ),
      renderNextButton: () => (
        <button className="swiper-button-next">
          <div className="arrowGalleryRight">
            <div className="arrowUp" />
            <div className="arrowDown" />
          </div>
        </button>
      )
    };
    const allImages = imagesGallery.map(item => (
      <div key={item.id}>
        <img
          src={item.src}
          // title={item.title}
          alt={item.description}
        />
      </div>
    ));
    return (
      <Element name="gallery">
        <div className="margin-80">
          <div className="containerFluid overflowHidden ">
            {/* <div className="container"> */}
            <Title name="GALERIA" />
            <Swiper {...params}>{allImages}</Swiper>
          </div>
        </div>
      </Element>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
