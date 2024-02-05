import React from "react";
import style from "./DisCount.module.css";
import { useRef, useEffect } from "react";

const DisCount = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className={style.discountWrap}>
      <div className={style.planeAnimation}>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/flight3.json"
        ></lottie-player>
      </div>
      <div className={style.planeAnimation}>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/flight2.json"
        ></lottie-player>
      </div>
    </div>
  );
};

export default DisCount;
