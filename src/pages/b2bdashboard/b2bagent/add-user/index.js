import React from "react";
import dynamic from "next/dynamic";
import style from "../../manage/hotel/hotel.module.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import img from "../../../../../public/assets/hotel.jpg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
const Umrah = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5 mb-24">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <div className={style.addHotel}>
            <Link href="/b2bdashboard/b2bagent/add-user/add">
              <button>
                <span className="text-xl font-bold">+</span> Create User
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className={style.tableWrap}>
              <tr>
                <th>Image</th>
                <th>Full Name</th>
                <th>User Name</th>
                <th>Email </th>
                <th>Role </th>
                <th>Date</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="mask   h-[100px] w-[100px] mx-auto ">
                    <Image
                      loading="lazy"
                      className=" h-full w-full object-cover text-center"
                      src={img}
                      alt="img"
                    />
                  </div>
                </td>
                <td>Ibrahim Sikder</td>
                <td>Ibrahim </td>
                <td>ibrahimsikder5033@gmail.com</td>
                <td>Admin </td>
                <td>20-05-23</td>
                <td>
                  <Link href="/b2bdashboard/b2bagent/add-user/update">
                    <FaEdit className={style.editIcon} />
                  </Link>
                </td>
                <td>
                  <FaTrashAlt className={style.deleteIcon} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.pagination}>
          <div className={style.paginationBtn}>
            <button>
              <ArrowBack className={style.arrowLeft} />
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>
              <ArrowForward className={style.arrowRight} />
            </button>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Umrah), { ssr: false });
