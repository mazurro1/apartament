import * as React from "react";
import "../scss/nav.scss";
import { slide as Menu } from "react-burger-menu";

export interface NavProps {
  menuBool: boolean;
  menuHandleClick: any;
}

export default class Nav extends React.Component<NavProps, {}> {
  showSettings = e => {
    e.preventDefault();
  };

  render() {
    const { menuBool, menuHandleClick } = this.props;
    return (
      <nav>
        <div className="container-fluid">
          {/* <div className="row">
            <div className="col-4">22:22</div>
            <div className="col-4 text-center positionRelative">Bąbelek</div>
            <div className="col-4 text-right positionRelative">
              <div
                className={menuBool ? "bar" : "bar transformBar"}
                onClick={menuHandleClick}
              >
                <div className={menuBool ? "bar1" : "bar1 transformBar1"} />
                <div className={menuBool ? "bar2" : "bar2 opacity"} />
                <div className={menuBool ? "bar3" : "bar3 transformBar3"} />
              </div>
            </div>
          </div> */}
          <Menu>
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="about" className="menu-item" href="/about">
              About
            </a>
            <a id="contact" className="menu-item" href="/contact">
              Contact
            </a>
            <a
              onClick={e => this.showSettings(e)}
              className="menu-item--small"
              href=""
            >
              Settings
            </a>
          </Menu>
        </div>
      </nav>
    );
  }
}
