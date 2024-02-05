import React, { useRef, useEffect } from "react";
const Loader = () => {
  const animationUrl = '/loading.json';

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-center">
      <div>
      <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={animationUrl}
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default Loader;
