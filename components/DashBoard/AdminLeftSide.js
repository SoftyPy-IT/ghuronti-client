import React from "react";
import style from "./DashBoard.module.css";
import Image from "next/image";
import admin from "../../public/assets/admin.png";
import Link from "next/link";

const AdminLeftSide = () => {
  return (
    <section>
      <div className={style.AdminleftSide}>
        <div className="absolute left-24 top-52">
          <Image
           loading="lazy"
            src={admin}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <h2 className="text-white ">Ibrahim Sikder</h2>
        </div>
        <div className={style.adminBtn}>
          <Link href="/account">
            <button>My Account</button>
          </Link>
        </div>
        <div className={style.adminBtn2}>
          <Link href="/mybooking">
            <button>My Booking</button>
          </Link>
        </div>
        <div className={style.adminBtn3}>
          <Link href="/saveCard">
            <button>Saved cards</button>
          </Link>
        </div>
        <div className={style.adminBtn4}>
          <Link href="/deleteAccount">
            <button>Manage Your Data </button>
          </Link>
        </div>
        <div className={style.adminBtn5}>
          <Link href="/changePassword">
            <button>Change Password</button>
          </Link>
        </div>
        <div className={style.logOutBtn}>
          <button>Log Out</button>
        </div>
      </div>
    </section>
  );
};

export default AdminLeftSide;
