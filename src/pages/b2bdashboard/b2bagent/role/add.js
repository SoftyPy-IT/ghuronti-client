import React from "react";
import styles from "../../manage/manage.module.css";
import style from "../../b2bagent/agent.module.css";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";

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
      <MoveText />
      <div className="p-10">
        <h3 className="text-center font-bold text-2xl">Create Role </h3>
        <form>
          <form>
            <div className={styles.formControl}>
              <div>
                <label>Role Name </label>
                <input
                  name="code"
                  placeholder="Role Name"
                  type="text"
                  className={styles.inputField}
                />
              </div>
              <div>
                <label>Status</label>
                <select className={styles.inputField}>
                  <option selected value="Select Status">
                    Select Status
                  </option>
                  <option value="Manager">Active</option>
                  <option value="Team Lead">Inactive</option>
                </select>
              </div>
            </div>

            <table className="table  lg:table-auto columns-xl break-after-column mt-8 mb-10 ">
              <thead className={styles.tableWrap}>
                <tr className={style.alluserList}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>SL No </th>
                  <th> Page Access </th>
                  <th>Create </th>
                  <th>Edit </th>
                  <th>View </th>
                  <th>Delete </th>
                </tr>
              </thead>
              <tbody>
                {accessData.map((access, i) => (
                  <tr key={access.id}>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                    <td> {i + 1} </td>
                    <td> {access.page}</td>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                    <td>
                      {" "}
                      <input type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-center">
              <button
                className="w-56 h-10 text-center border text-white bg-[#19ABE3] rounded-full"
                type="submit"
              >
                Create Role
              </button>
            </div>
          </form>
        </form>
      </div>
    </B2BdashboardLayout>
  );
};

export default Role;
