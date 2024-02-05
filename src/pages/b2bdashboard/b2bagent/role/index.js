import React from "react";
import styles from "../../manage/manage.module.css";
import style from "../../b2bagent/agent.module.css";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Role = () => {
  const users = [
    {
      id: "01",
      name: "Rakib",
      role: "admin",
      email: "admin@gmail.com",
      username: "admin",
      mobile: "0182577775",
      status: "active",
    },
    {
      id: "02",
      name: "Hanif",
      role: "manager",
      email: "manager@gmail.com",
      username: "admin",
      mobile: "0182577775",
      status: "inactive",
    },
    {
      id: "03",
      name: "Karim",
      role: "Team Leader",
      email: "karim@gmail.com",
      username: "admin",
      mobile: "0182577775",
      status: "active",
    },
    {
      id: "04",
      name: "Habib",
      role: "admin",
      email: "habib@gmail.com",
      username: "admin",
      mobile: "0182577775",
      status: "inactive",
    },
  ];
  const accessData = [
    {
      id: 1,
      page: "Flight",
    },
    {
      id: 1,
      page: "Hotel",
    },
    {
      id: 1,
      page: "Visa",
    },
    {
      id: 1,
      page: "Tours",
    },
    {
      id: 1,
      page: "Train",
    },
    {
      id: 1,
      page: "Partial Payment",
    },
    {
      id: 1,
      page: "Void/Return/Change",
    },
    {
      id: 1,
      page: "Transactions",
    },
    {
      id: 1,
      page: "Payment",
    },
    {
      id: 1,
      page: "Bank List",
    },
    {
      id: 1,
      page: "Company",
    },
    {
      id: 1,
      page: "Payment",
    },
    {
      id: 1,
      page: "Confirm Ticket ",
    },
    {
      id: 1,
      page: "On Hold Process ",
    },
    {
      id: 1,
      page: "Cancel Ticket",
    },
  ];
  return (
    <B2BdashboardLayout>
      <div className="w-full h-[50px] bg-[#19ABE3] text-white flex items-center justify-center ">
        <h2 className="text-center text-2xl font-bold">Make Role </h2>
      </div>
      <div className="flex items-center justify-between w-full px-5">
        <div>
          <label> Search </label> <br />
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
        <div>
          <div className="flex items-center justify-center w-full">
            <Link href="/b2bdashboard/b2bagent/role/add">
              <button className="flex items-center justify-center font-bold  mb-5 mt-10 w-32 rounded text-white h-10 bg-[#4AB449]">
                + Add role
              </button>
            </Link>
          </div>
        </div>
      </div>
      <table className="table  lg:table-auto columns-xl break-after-column mt-8 mb-24 ">
        <thead className={styles.tableWrap}>
          <tr className={style.alluserList}>
            <th>SL No </th>
            <th> Name </th>
            <th>Role</th>
            <th>Created By </th>
            <th>Status </th>
            <th colSpan={3}>Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>Super Admin </td>
              <td>
                <span className="bg-[#4AB449] text-white font-xs text-xs p-2 rounded">
                  {user.status}
                </span>
              </td>
              <td>
                <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                  View
                </span>
              </td>
              <td>
                <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                  Edit
                </span>
              </td>
              <td>
                <span className="bg-red-600 text-white font-xs text-xs p-2 rounded">
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </B2BdashboardLayout>
  );
};

export default Role;
