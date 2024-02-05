import React from "react";
import style from "./FlightBookingLeftSide.module.css";
import {
  Flight,
  Groups,
  LocalMall,
  GppBad,
  SignalWifiBad,
  CorporateFare,
  ArrowForwardIos,
} from "@mui/icons-material";
import Link from "next/link";


const FlightBookingLeftSide = () => {
  return (
    <section>
      <div className={style.flightInfoWrap}>
        <div>
          <Link href="/profile/userbooking/flightDetail">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <Flight className={style.flightIcons} />
              </div>
              <span>Flight Details </span>
            </div>
          </Link>
          <Link href="/profile/userbooking/flightCancel">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <SignalWifiBad className={style.flightIcon} />
              </div>
              <span>Cancel Booking </span>
            </div>
          </Link>
          <Link href="/profile/userbooking/fareDetail">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <CorporateFare className={style.flightIcon} />
              </div>
              <span>Fare Details </span>
            </div>
          </Link>
          <Link href="/profile/userbooking/travelerdetails">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <Groups className={style.flightIcon} />
              </div>
              <span>Traveller(S) Details </span>
            </div>
          </Link>
          <Link href="/profile/userbooking/baggage">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <LocalMall className={style.flightIcon} />
              </div>
              <span>Baaggage Details </span>
            </div>
          </Link>
          <Link href="/profile/userbooking/policy">
            <div className={style.flightDetail}>
              <div className={style.iconWrap}>
                <GppBad className={style.flightIcon} />
              </div>
              <span>Cancellation Policy </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlightBookingLeftSide;
