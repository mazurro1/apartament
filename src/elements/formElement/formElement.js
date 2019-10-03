import React from "react";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const formElement = ({
  itemName,
  formName = "",
  itemFalseName,
  formValidation = true,
  itemValidation = false,
  itemValue,
  itemOnChange,
  itemType,
  itemPlaceholder = "",
  itemChecked = false
}) => {
  return (
    <div className="row mt-2">
      <div className="col-lg-2 offset-md-3 col-md-3 col-12">
        <div className="positionTop animation">
          {formName}
          {formValidation && !itemValidation ? (
            <div className="font-12 text-danger font-weight-bold mb-1 mb-md-0">
              {itemFalseName}
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-lg-4 col-md-5 col-12">
        <Input
          className={formValidation && !itemValidation ? "formInvalid" : null}
          value={itemValue}
          onChange={itemOnChange}
          name={itemName}
          type={itemType}
          placeholder={itemPlaceholder}
          checked={itemChecked}
        />
      </div>
    </div>
  );
};

formElement.propTypes = {
  itemName: PropTypes.string.isRequired,
  formName: PropTypes.string,
  itemFalseName: PropTypes.string,
  formValidation: PropTypes.bool,
  itemValidation: PropTypes.bool,
  itemValue: PropTypes.any.isRequired,
  itemOnChange: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
  itemPlaceholder: PropTypes.string,
  itemChecked: PropTypes.any
};

export default formElement;
