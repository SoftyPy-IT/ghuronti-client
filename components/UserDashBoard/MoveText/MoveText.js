import React from "react";
import style from "./MoveText.module.css";
const MoveText = () => {
  return (
    <section className={style.moveText}>
      <marquee
        onmouseout="this.start()"
        onmouseover="this.stop();"
        behavior="scroll"
        direction="left"
      >
        {" "}
        <h2 className="text-xl font-bold">
          Ghuronti is your best partner for your journey !
        </h2>
      </marquee>
    </section>
  );
};

export default MoveText;
