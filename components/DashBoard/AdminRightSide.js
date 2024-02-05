import React from "react";

import style from "./DashBoard.module.css";
const AdminRightSide = () => {
  return (
    <section>
      <div className={style.adminRightSide}>
        <div className="flex mb-3">
          <p className="ml-3">4 Days - 3 Nights</p>
        </div>
        <div className="flex mb-3">
          <p className="ml-3">Tour Type - Economy</p>
        </div>
        <div className="flex mb-3">
          <p className="ml-3">Royal Tulip Hotel, Deira (Dubai)</p>
        </div>
        <div className="flex mb-3">
          <p className="ml-3">Price includes VAT & Tax</p>
        </div>
        <div className="flex mb-3">
          <span className="text-">Starts From </span>
          <p className="ml-3"> 27,500TK</p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className={style.bookingBtn}>Book Now </button>
          <button className={style.bookingBtn2}>Book Now </button>
        </div>
      </div>
    </section>
  );
};

export default AdminRightSide;
