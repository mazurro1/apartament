import React from "react";
import PropTypes from "prop-types";

const formButton = ({
  buttonName,
  buttonOnClick,
  buttonDisabled = false,
  buttonColor = "gray",
  buttonInline = false,
  width = "150",
  className = ""
}) => {
  const buttonColorClass =
    buttonColor === "gray"
      ? "bg-normalGray"
      : buttonColor === "blue"
      ? "bg-normalBlue"
      : buttonColor === "red"
      ? "bg-normalRed"
      : buttonColor === "green"
      ? "bg-normalGreen"
      : buttonColor === "yellow"
      ? "bg-normalYellow"
      : "bg-normalGray";
  const buttonInlineClass = buttonInline ? "d-inline-flex" : "d-flex";
  return (
    <button
      className={`btn buttonEffect p-1 ${buttonColorClass} ${buttonInlineClass} ${className}`}
      disabled={buttonDisabled}
      onClick={buttonOnClick}
    >
      <span>{buttonName}</span>
      <svg style={{ width: `${width}` }}>
        <polyline
          className="o1"
          points={`0 0, ${width} 0, ${width} 40, 0 40, 0 0`}
        ></polyline>
        <polyline
          className="o2"
          points={`0 0, ${width} 0, ${width} 40, 0 40, 0 0`}
        ></polyline>
      </svg>
    </button>
  );
};

formButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func,
  buttonDisabled: PropTypes.bool
};

export default formButton;
