import React from "react";
const input = ({
  type,
  checked,
  onChange,
  name,
  value,
  placeholder,
  className
}) => {
  const inputs =
    type === "chechbox" ? (
      <input
        checked={checked}
        onChange={onChange}
        name={name}
        type={type}
        className={`button ${className}`}
        placeholder={placeholder}
      />
    ) : (
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className={`button ${className}`}
        placeholder={placeholder}
      />
    );
  return <>{inputs}</>;
};
export default input;
