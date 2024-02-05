import React from "react";
import style from "./TravelerDetails.module.css";
import {
  Person,
  SupervisorAccount,
  LocalPhone,
  CalendarMonth,
  Email,
  Flag,
  AutoStories,
  DriveFileRenameOutline,
  House,
} from "@mui/icons-material";
const TravelerDetails = () => {
  return (
    <section className={style.travelerInfoWrap}>
      <h2 className="text-xl font-bold">Traveller(s) Details </h2>
      <div>
        <h3 className="mt-5 mb-3">
          IBRAHIM SIKDER - (Primary Contact) - Adult
        </h3>
        <hr className="w-full my-5" />
        <div className="flex items-center mb-3">
          <Person className="mr-5" />
          <div>
            <small>Full Name </small>
            <p>IBRAHIM SIKDER </p>
          </div>
        </div>
        <div className={style.travelerInfo}>
          <div className="flex items-center mb-3">
            <SupervisorAccount className="mr-5" />
            <div>
              <small>Gender</small>
              <p>Male </p>
            </div>
          </div>
          <div className="flex items-center mb-3 justify-left w-[80px]">
            <LocalPhone className="mr-5" />
            <div>
              <small>Mobile Number </small>
              <p>8801825445033</p>
            </div>
          </div>
        </div>
        <div className={style.travelerInfo}>
          <div className="flex items-center mb-3">
            <CalendarMonth className="mr-5" />
            <div>
              <small>Date of Birth</small>
              <p>15/08/2000 </p>
            </div>
          </div>
          <div className="flex items-center mb-3 justify-left w-[80px]">
            <Email className="mr-5" />
            <div>
              <small>Email Address </small>
              <p>ibrahimsikder5033@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={style.travelerInfo}>
          <div className="flex items-center mb-3">
            <Flag className="mr-5" />
            <div>
              <small>Nationality</small>
              <p>Bangladesh </p>
            </div>
          </div>
          <div className="flex items-center mb-3 justify-left w-[80px]">
            <AutoStories className="mr-5" />
            <div>
              <small>Passport Number </small>
              <p>45687654i65765457654</p>
            </div>
          </div>
        </div>
        <div className={style.travelerInfo}>
          <div className="flex items-center mb-3">
            <AutoStories className="mr-5" />
            <div>
              <small>Passport Expire Date</small>
              <p>23/04/2023 </p>
            </div>
          </div>
          <div className="flex items-center mb-3 justify-left w-[80px]">
            <DriveFileRenameOutline className="mr-5" />
            <div>
              <small> Flyer Number </small>
              <p>466534</p>
            </div>
          </div>
        </div>
        <div className={style.travelerInfo}>
          <div className="flex items-center mb-3">
            <House className="mr-5" />
            <div>
              <small>Passport Expire Date</small>
              <p>23/04/2023 </p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className={style.passport}>
            <small>Passport Copy </small> <br />
            <button>View Passport </button>
          </div>
          <div className={style.passport}>
            <small>Visa Copy </small> <br />
            <button>View Visa </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerDetails;
