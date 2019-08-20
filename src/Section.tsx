import * as React from "react";
import "./scss/section.scss";
// import styled from "styled-components";

export interface SectionProps {}

export default class Section extends React.Component<SectionProps, {}> {
  render() {
    return (
      <div className="jumbotron-fluid sectionBg">
        <div className="container">
          <h1>O NAS</h1>
          <div className="whiteLine" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            reiciendis placeat porro, error sed fugit laboriosam? Quasi
            molestiae temporibus ipsum aliquid possimus libero repudiandae unde
            enim, quisquam nulla consequatur nostrum?Illum explicabo quisquam
            voluptatum alias. Earum numquam accusantium minus. Eligendi fugit
            quod tempora rem enim omnis, eos, odio tempore numquam, nobis nam
            dolore fugiat sequi. Distinctio asperiores sint debitis ut!
          </p>
        </div>
      </div>
    );
  }
}
