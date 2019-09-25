import * as React from "react";
import "../scss/header.scss";

export interface HeaderProps {}

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <>
        <header>header</header>
      </>
    );
  }
}
