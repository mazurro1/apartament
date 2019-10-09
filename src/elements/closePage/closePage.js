import React from "react";

const closePage = ({ onClick }) => {
  return (
    <div className="closePage" onClick={onClick}>
      <div className="positionArrow">
        <div className="allLines">
          <div className="line1 d-inline-block" />
          <div className="linesArrow d-inline-block">
            <div className="line3 " />
            <div className="line4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default closePage;
