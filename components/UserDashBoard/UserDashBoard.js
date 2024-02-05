import React from "react";
import style from "./UserDashBoard.module.css";
import UserDashBoardLeft from "./UserDashBoardLeft";
import UserDashBoardRight from "./UserDashBoardRight";
const UserDashBoard = () => {
  return (
    <section>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <UserDashBoardRight />
        </div>
      </div>
    </section>
  );
};

export default UserDashBoard;
