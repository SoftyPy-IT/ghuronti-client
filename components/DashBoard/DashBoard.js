import React, { useEffect, useState } from "react";
import style from "./DashBoard.module.css";
import AdminLeftSide from "./AdminLeftSide";
import AdminRightSide from "./AdminRightSide";

const DashBoard = () => {
  return (
    <section className={style.dashboardWrap}>
      <div className="grid grid-cols-12">
        <div>
          <AdminLeftSide></AdminLeftSide>
        </div>
        <div className="col-span-9">
          <AdminRightSide></AdminRightSide>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
