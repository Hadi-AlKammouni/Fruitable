import React from "react";

const Input = ({ type, placeholder, label, set }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          set(e.target.value)
        }}
      />
    </div>
  );
};

export default Input;