import React from "react";

import style from "./textInput.module.scss";

function TextInput({
  value,
  disable = false,
  onChange,
  className = "",
  type = "input",
  placeHolder = "",
  multiple = false,
  label = "",
  onBlur,
  validation,
  validationData,
}) {
  return (
    <div className={label !== "" && style.flexBox}>
      {label !== "" && <label>{label}</label>}
      <input
        disabled={disable}
        multiple={multiple}
        placeholder={placeHolder}
        type={type}
        className={`${style.input} ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {validation && validationData.show && (
        <div className={style.errorText}>{validationData.message}</div>
      )}
    </div>
  );
}

export default TextInput;
