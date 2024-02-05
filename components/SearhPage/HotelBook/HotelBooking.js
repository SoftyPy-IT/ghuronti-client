import React from "react";
import HotelBookLeft from "./BookLeftSide/HotelBookLeft";
import HotelBookRightSide from "./RightSide/HotelBookRightSide";
import style from "./HotelBook.module.css";
const HotelBooking = () => {
  return (
    <section>
      <div className={style.flightBookWrap}>
        <div className={style.flightBookLeftSide}>
          <HotelBookLeft />
        </div>
        <div className={style.flightBookRightSide}>
          <HotelBookRightSide />
        </div>
        
      </div>
    </section>
  );
};

export default HotelBooking;
