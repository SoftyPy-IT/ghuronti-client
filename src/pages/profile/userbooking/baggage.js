import React from "react";
import style from "../userbooking/flightbooking.module.css";
import Link from "next/link";
import { ReportProblem } from "@mui/icons-material";
import { ArrowForwardIos, Home } from "@mui/icons-material";
import Nav from "../../../../components/NavBarr/Nav";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";
import Footer from "../../../../components/Footer/Footer";
const baggage = () => {
  return (
    <section>
      <Nav />
      <div className={style.flightBookingTo}>
        <div className={style.fTopBar}>
          <Link href="/">
            <span>
              <Home className={style.topIcon} />
            </span>
            <span>Home</span>
          </Link>
          <Link href="/profile">
            <span>
              <ArrowForwardIos className={style.topIcon} />
            </span>
            <span>Profile</span>
          </Link>
          <Link href="/profile/booking">
            <span>
              <ArrowForwardIos className={style.topIcon} />
            </span>
            <span>Booking</span>
          </Link>
          <Link href="/profile/userbooking/flightbooking">
            <span>
              <ArrowForwardIos className={style.topIcon} />
            </span>
            <span>Flight</span>
          </Link>

          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>
            <span>STFL16900068481176</span>
          </span>
        </div>
      </div>
      <section className={style.accounWra}>
        <div className={style.profileWrap}>
          <div className={style.userProfileLeftSide}>
            <FlightBookingLeftSide />
          </div>
          <div className={style.userProfileRightSide}>
            <div className="w-full border p-5 mb-10">
              <h2 className="text-2xl text-[#4AB449] font-bold mb-5">
                Baggage Details
              </h2>
              <span className="underline mb-3">Baggage Details</span>
              <div className="flex justify-between w-[500px] items-center ">
                <div className="mt-3">
                  <h6>DAC - CXB </h6>
                  <p className="text-sm">IBRAHIM SIKDER</p>
                </div>
                <span>30 KG </span>
              </div>
              <div className="flex justify-between w-[500px] items-center ">
                <div className="mt-3">
                  <h6> CXB - DAC </h6>
                  <p className="text-sm">IBRAHIM SIKDER</p>
                </div>
                <span>30 KG </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default baggage;
