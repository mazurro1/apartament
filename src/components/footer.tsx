import * as React from "react";
import "../scss/footer.scss";

export interface FooterProps {}

export default class Footer extends React.Component<FooterProps, {}> {
  render() {
    return (
      <footer>
        <div>© 2019 PC-Tech | Wszelkie prawa zastrzeżone.</div>
      </footer>
    );
  }
}
