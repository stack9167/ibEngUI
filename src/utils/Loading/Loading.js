import React from "react";

import style from "./loading.module.scss";

function Loading() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loader01} />;
    </div>
  );
}

export default Loading;
