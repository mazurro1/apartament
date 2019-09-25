import * as React from "react";
import "../scss/section.scss";

export interface ContactProps {}

export default class Contact extends React.Component<ContactProps, {}> {
  render() {
    return (
      <>
        <h1>Kontakt</h1>
        <div className="whiteLine" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          reiciendis placeat porro, error sed fugit laboriosam? Quasi molestiae
          temporibus ipsum aliquid possimus libero repudiandae unde enim,
          quisquam nulla consequatur nostrum?Illum explicabo quisquam voluptatum
          alias. Earum numquam accusantium minus. Eligendi fugit quod tempora
          rem enim omnis, eos, odio tempore numquam, nobis nam dolore fugiat
          sequi. Distinctio asperiores sint debitis ut!
        </p>
      </>
    );
  }
}
