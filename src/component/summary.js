import React, { Component } from "react";
import FormButton from "../elements/formButton/FormButton";

export default class Section extends Component {
  render() {
    return (
      <div className="summary positionRelative">
        <div className="container-fluid">
          <div className="text-center ">
            <div className="row">
              <div className="col-3 col-md d-md-block d-none">
                <div className="summaryText p-lg-1 p-md-2 font-weight-bold">
                  Podsumowanie:
                </div>
              </div>

              <div className="col-4 col-md">
                <div className="d-block textCenterFormat font-weight-bold text-success">
                  Data:
                </div>
                <div className="d-block">2019-10-29</div>
              </div>
              <div className="col-4 col-md">
                <div className="d-block textCenterFormat font-weight-bold text-success">
                  Godziny:
                </div>
                <div className="d-block">19-03</div>
              </div>
              <div className="col-4  col-md">
                <div className="d-block textCenterFormat font-weight-bold text-success">
                  Cena:
                </div>
                <div className="d-block ">280zł</div>
              </div>

              <div className="col-12 col-md mt-3 mt-md-0 ">
                <div className="p-md-2">
                  {/* <button className="btn btn-primary ">Zapłać</button> */}
                  <FormButton
                    buttonName="Zapłać"
                    buttonOnClick={this.handleOrder}
                    buttonColor="red"
                    buttonInline={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
