import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import img from "../../../../../public/assets/hotel.jpg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import style from "../hotel/hotel.module.css";
const Flight = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5 mb-24">
        <div className="flex items-center justify-between px-8 mb-5">
          <TextField id="outlined-basic" label="Search " variant="outlined" />
          <div className={style.addHotel}>
            <Link href="/b2bdashboard/manage/flight/add">
              <button>
                <span className="text-xl font-bold">+</span> Add Flight
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className={style.tableWrap}>
              <tr>
                <th>Image</th>
                <th>Airport Name</th>
                <th>Country</th>
                <th>City</th>
                <th>Title</th>
                <th>Sub title </th>
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
                <td>Hajarat Shajalal International Airport </td>
                <td>Bangladesh </td>
                <td>Dhaka </td>
                <td>This is best hotel in the world </td>
                <td>This is best hotel </td>
                <td>3/6/23</td>
                <td>
                  <div className={style.editIconWrap}>
                    <Link href="/b2bdashboard/manage/flight/update">
                      <FaEdit className={style.editIcon} />
                    </Link>
                  </div>
                </td>
                <td>
                  <div className={style.editIconWrap}>
                    <FaTrashAlt className={style.deleteIcon} />
                  </div>
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

export default dynamic(() => Promise.resolve(Flight), { ssr: false });
