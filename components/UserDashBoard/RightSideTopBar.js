import React from "react";
import style from "./UserDashBoard.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/ghuronti.jpg";
const RightSideTopBar = () => {
  return (
    <section>
      <div className={style.rightSideTopBar}>
        <div className={style.adminLeftInfo}>
          <div>
            <strong>Reservation </strong>
            <p>Phone: +8801825445033</p>
            <p>Email: ghuronti@gmail.com </p>
          </div>
          <div>
            <strong>Accounts & Finance </strong>
            <p>Phone: +8801825445033</p>
            <p>Email: ghuronti@gmail.com </p>
          </div>
        </div>
        <div className={style.logoWrap}>
          <Link href="/b2bdashboard">
            <Image loading="lazy" src={logo} alt="logo" width={200} height={200}></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RightSideTopBar;
