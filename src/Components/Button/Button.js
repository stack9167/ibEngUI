import React from "react";

import style from "./button.module.scss";

function Button({
  onClick,
  label,
  className = "",
  disable = false,
  loading = false,
}) {
  return (
    <button
      disabled={disable}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      {loading ? <div className={style.loading} /> : label}
    </button>
  );
}

export default Button;
