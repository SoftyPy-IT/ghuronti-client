import React from "react";
import style from '../userbooking/flightbooking.module.css'
import Link from "next/link";
import { ArrowForwardIos, Home } from "@mui/icons-material";
import Nav from "../../../../components/NavBarr/Nav";
import FlightBookingLeftSide from "../../../../components/Booking/FlightBooking/FlightBookingLeftSide";
import Details from '../../../../components/Booking/FlightDetails/Details/Details'
import Footer from "../../../../components/Footer/Footer";
const flightDetail = () => {
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
          <Details/>

          </div>
        </div>
      </section>
      <Footer/>
    </section>
  );
};

export default flightDetail;
