import React from "react";
import PropTypes from "prop-types";

const formButton = ({ buttonName, buttonOnClick, buttonDisabled = false }) => {
  return (
    <div className="row mt-2 margin-60">
      <div className="col-12">
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            disabled={buttonDisabled}
            onClick={buttonOnClick}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

formButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool
};

export default formButton;
