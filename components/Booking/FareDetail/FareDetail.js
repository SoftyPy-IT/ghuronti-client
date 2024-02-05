import React from "react";
import style from "./FareDetail.module.css";
const FareDetail = () => {
  return (
    <section>
      <div className={style.fareDetailWrap}>
        <h2 className="text-2xl font-bold mb-5">Fare Details </h2>
        <h6>Your price summary</h6>
        <div className={style.fareHeadTop}>
          <strong>Details</strong>
          <strong>Amount</strong>
        </div>
        <div className="mt-3">
          <strong>ADULT x 1</strong>
          <div className={style.fareHead}>
            <span>Base Fare x 1 </span>
            <span>BDT 9,563 </span>
          </div>
          <div className={style.fareHead}>
            <span>Tax x 1 </span>
            <span>BDT 1,563 </span>
          </div>
        </div>
        <div className="mt-3">
          <strong>CHILD x 1</strong>
          <div className={style.fareHead}>
            <span>Base Fare x 1 </span>
            <span>BDT 9,563 </span>
          </div>
          <div className={style.fareHead}>
            <span>Tax x 1 </span>
            <span>BDT 1,563 </span>
          </div>
        </div>
        <div className="mt-3">
          <strong>INFANT x 1</strong>
          <div className={style.fareHead}>
            <span>Base Fare x 1 </span>
            <span>BDT 9,563 </span>
          </div>
          <div className={style.fareHead}>
            <span>Tax x 1 </span>
            <span>BDT 1,563 </span>
          </div>
        </div>
        <hr className={style.line} />
        <div className={style.fareHead}>
          <span>Total Airfare: </span>
          <span>BDT 20,456 </span>
        </div>
        <div className={style.fareHead}>
          <span>Travel Insurance </span>
          <span>BDT 20 </span>
        </div>
        <div className={style.fareHead}>
          <span>Baggage Protection </span>
          <span>BDT 240 </span>
        </div>
        <div className={style.fareHead}>
          <span>ST Convenience Fee </span>
          <span>BDT 60 </span>
        </div>
        <div className={style.fareHead}>
          <span>Coupon </span>
          <span>STVISA300</span>
        </div>
        <div className={style.fareHead}>
          <span>Coupon Amount </span>
          <span>-BDT 300</span>
        </div>
        <div className={style.fareHead}>
          <span>Discount </span>
          <span>-BDT 2200</span>
        </div>
        <hr className={style.line} />{" "}
        <div className={style.fareHead}>
          <strong>Total Payable </strong>
          <strong>BDT 30,929</strong>
        </div>
      </div>
    </section>
  );
};

export default FareDetail;
