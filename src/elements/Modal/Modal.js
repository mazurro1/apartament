import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

const modal = ({ name, onClickButton, modalError = true, modalOn = true }) => {
  const modalTransformStyle = modalOn ? "modalOn" : "modalOff";
  const modalErrorStyle = modalError ? "modalError" : "modalSuccess";
  return (
    <div
      className={`${modalErrorStyle} ${modalTransformStyle}`}
      onClick={onClickButton}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">{name}</div>
          {/* <div className="col-md-1 col-2  text-right positionRelative">
            <div className="positionVertical">
              <button onClick={onClickButton}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default modal;
