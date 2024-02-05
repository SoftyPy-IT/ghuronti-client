import React from "react";
import style from "../../../../components/UserDashBoard/UserDashBoard.module.css";
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import B2bFlightBook from "../../../../components/UserDashBoard/FlightBook/B2bFlightBook";

const Book = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.flightBook}>
          <RightSideTopBar />
          <div>
            <B2bFlightBook/>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });

