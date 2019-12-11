import React, { Component } from "react";
import "../scss/section.scss";
import Title from "../elements/Title/Title";
import { Element } from "react-scroll";

class Reservation extends Component {
  render() {
    return (
      <Element name="priceList">
        <div className="margin-80">
          <Title name="CENNIK" />
          <div className="firstTextWidth textColor">
            <p>Wynajem Apartamentu Słonecznego kosztuje:</p>
            <ul>
              <li>kaucja za lokal 1000 zl</li>
              <li>
                od poniedziałku do czwartku w godzinach porannych i popołudniowych - 300 zł
              </li>
              <li>
                od piątku do niedzieli w godzinach porannych (np. 9:00-16:00) - 500 zł, z kolei w godzinach popołudniowych (np. 17:00 do 5:00) - 900 zł.
              </li>
            </ul>
            <p>Opcje dodatkowe:</p>
            <ul>
              <li>VIP ROOM - 100 zł</li>
              <li>projektor - 100 zl</li>
              <li>kaucja za projektor 2000 zł</li>
            </ul>
            <p>
              Godziny startu i końca organizowanej imprezy ustalane są indywidualnie. Powyższe zakresy godzinowe podane zostały przykładowo.
            </p>
            <p>
              Macie więcej pytań? Z miłą chęcią odpowiemy na wszystkie pytania. Zapraszamy do kontaktu!
            </p>
          </div>
        </div>
      </Element>
    );
  }
}

export default Reservation;
