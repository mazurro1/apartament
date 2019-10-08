import React from "react";
const input = ({
  type,
  checked,
  onChange,
  name,
  value,
  placeholder,
  className,
  disabled
}) => {
  const inputs =
    type === "checkbox" ? (
      <input
        checked={checked}
        onChange={onChange}
        name={name}
        type={type}
        className={`button2 ${className}`}
        placeholder={placeholder}
        disabled={disabled}
      />
    ) : (
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className={`button ${className}`}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  return <>{inputs}</>;
};
export default input;
