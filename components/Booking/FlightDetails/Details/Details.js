import React from "react";
import style from "./Details.module.css";
import {
  Flight,
  AirlineSeatReclineExtra,
  Groups,
  CalendarMonth,
  AirplanemodeActive,
  FlightTakeoff,
  AttachMoney,
  CenterFocusStrongOutlined,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Details = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue(value);
  };

  return (
    <section>
      <div className={style.detailsWrap}>
        <div>
          <div className="flex justify-between">
            <div>
              <strong className="text-xl">DAC - CXB - DAC</strong> <br />
              <div className={style.detailBtn}>
                <button>CANCELLED</button>
                <button>UNPAID</button>
              </div>
            </div>
            <div>
              <strong className="text-xl">BDT 4,499</strong> <br />
              <div className="flex items-center">
                <small className={style.dollarIconWrap}>
                  <AttachMoney className={style.dollarIcon} />
                </small>
                <small>159</small>
              </div>
            </div>
          </div>
          <div className={style.flightDetailInfo}>
            <div className={style.singleDetail}>
              <span className="flex ">
                <Flight className={style.detailFlightIcon} />
                <span> Round Trip </span>
              </span>
              <span className="flex ">
                <AirlineSeatReclineExtra className="mr-3" />
                <span>Economy </span>
              </span>
              <span className="flex ">
                <CalendarMonth className="mr-3" />
                <span> 15 Aug 23 - 30 Sep 23 </span>
              </span>
              <span className="flex ">
                <Groups className="mr-3" />
                <span>3 Travelers </span>
              </span>
            </div>
            <div className={style.singleDetail}>
              <div>Booking ID</div>
              <div>Airline PNR </div>
              <div>Reservation PNR</div>
            </div>
            <div className={style.singleDetail}>
              <div>
                <strong className="mr-3">: </strong>
                <strong> STFL16900068481176 </strong>
              </div>
              <div>
                <strong className="mr-3">: </strong>
                <strong> MXRHIF </strong>
              </div>
              <div>
                <strong className="mr-3">: </strong>
                <strong> 540K9C </strong>
              </div>
            </div>
          </div>
        </div>
        <hr className={style.line} />
        <div>
          <div>
            <div>
              <div className={style.detailBtns}>
                <button className="mr-2">DAC-CXB</button>
                <button>CXB-DAC</button>
              </div>
              <div className="flex mt-5 items-center">
                <span className={style.flightDIcon}>
                  {" "}
                  <FlightTakeoff className={style.flightIcon} />
                </span>
                <span className="mr-2"> Biman Bangladesh Airlines BG437</span>
                <small className="text-xs">
                  {" "}
                  DEHAVILLAND DASH 8 - DH8 Economy-T (T)
                </small>
              </div>
              <div className={style.airportDetail}>
                <div className={style.singleAirport}>
                  <strong className="">DAC 15:20</strong> <br />
                  <small>Hazrat Shahjalal International Airport</small>
                  <br />
                  <small>Terminal: D</small>
                  <br />
                  <small>23rd Jul 2023</small>
                </div>
                <div className="text-center">
                  <AirplanemodeActive className={style.middleIcon} /> <br />
                  <small>02h 230m</small>
                </div>
                <div>
                  <strong>CXB 16:30</strong> <br />
                  <small>Cox s Bazar Airport</small> <br />
                  <small>23rd Aug 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Details;
