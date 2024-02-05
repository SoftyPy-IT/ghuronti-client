import React from "react";
import style from '../userbooking/flightbooking.module.css'
import { ReportProblem } from "@mui/icons-material";
import { ArrowForwardIos, Home } from "@mui/icons-material";
import Link from "next/link";
import Nav from "../../../../components/NavBarr/Nav";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";

import Footer from "../../../../components/Footer/Footer";
import Cancel from "../../../../components/Booking/FlightCancel/Cancel";
const flightCancel = () => {
  return (
    <section>
      <Nav/>
      <div className={style.flightBookingTo}>
        <div className={style.fTopBar}>
        <Link href='/'>
          <span>
            <Home className={style.topIcon} />
          </span>
          <span>Home</span>
          </Link>
          <Link href='/profile'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Profile</span>
          </Link>
          <Link href='/profile/booking'>
          <span>
            <ArrowForwardIos className={style.topIcon} />
          </span>
          <span>Booking</span>
          </Link>
         <Link href='/profile/userbooking/flightbooking'>
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
            <FlightBookingLeftSide/>
          </div>
          <div className={style.userProfileRightSide}>
            <Cancel/>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default flightCancel;
