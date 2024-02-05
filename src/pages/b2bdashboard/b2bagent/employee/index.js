import React from "react";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import styles from "../../manage/manage.module.css";
import style from "../agent.module.css";
import Link from "next/link";
const Employ = () => {
  const users = [
    {
      id: "01",
      name: "Rakib",
      department: "Sales & marketing ",
      email: "admin@gmail.com",
      status: "active",
    },
    {
      id: "01",
      name: "Rakib",
      department: "Sales & marketing ",
      email: "admin@gmail.com",
      status: "active",
    },
    {
      id: "01",
      name: "Hafez",
      department: "Marketing ",
      email: "admin@gmail.com",
      status: "inactive",
    },
    {
      id: "01",
      name: "Rakib",
      department: "Sales & marketing ",
      email: "admin@gmail.com",
      status: "active",
    },
    {
      id: "01",
      name: "Rakib",
      department: "Sales & marketing ",
      email: "admin@gmail.com",
      status: "active",
    },
  ];
  return (
    <B2BdashboardLayout>
      <div className="w-full h-16 bg-[#19ABE3] text-white flex items-center justify-center ">
        <h2 className="text-center text-2xl font-bold">
          List of All Employees
        </h2>
      </div>
      <div className="w-full mx-auto ">
        <div className="flex items-center justify-center w-full">
          <button
            className="flex items-center justify-center text-xl font-bold  mb-5 mt-10 w-56 rounded text-white h-10 bg-[#4AB449]"
            onClick={() => window.my_modal_3.showModal()}
          >
            + Add new employee{" "}
          </button>
        </div>
        <div className={style.modal}>
          <dialog id="my_modal_3" className={style.employModalWrap}>
            <h3 className="text-center font-bold text-xl">Add Employee </h3>
            <form method="dialog" className="modal-box">
              <button className="w-10 h-10 rounded bg-[#19ABE3] text-white">
                ✕
              </button>
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Code </label>
                    <input
                      name="code"
                      placeholder="Code "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Employee Name </label>
                    <input
                      name="productCategory"
                      placeholder="Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Department</label>
                    <input
                      name="Department"
                      placeholder="Department "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>

                  <div>
                    <label>Designation</label>
                    <select className={styles.inputField}>
                      <option selected value="Designation">
                        Designation
                      </option>
                      <option value="Manager">Manager</option>
                      <option value="Team Lead">Team Lead</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Salary </label>
                    <input
                      name="title"
                      placeholder="Salary"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Address </label>
                    <input
                      name="address"
                      placeholder="Address"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label> Commission % </label>
                    <input
                      name="title"
                      placeholder="Commission"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Mobile </label>
                    <input
                      name="Mobile"
                      placeholder="Mobile"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Blod Group </label>
                    <select className={styles.inputField}>
                      <option selected value="Blod Group">
                        Blod Group
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="Super Admin">B+</option>
                      <option value="Super Admin">B-</option>
                      <option value="Super Admin">O+</option>
                      <option value="Super Admin">O-</option>
                      <option value="Super Admin">AB+</option>
                      <option value="Super Admin">AB-</option>
                    </select>
                  </div>
                  <div>
                    <label>Date of Birth </label>
                    <input
                      name="Date of Birth "
                      placeholder="Date of Birth"
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Appointment Date </label>
                    <input
                      name="Appointment Date "
                      placeholder="Appointment Date"
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Joining Date </label>
                    <input
                      name="Joining Date "
                      placeholder="Joining Date"
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Status </label>
                    <input
                      name="status "
                      placeholder="status"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <button className={styles.submitBtn} type="submit">
                    Create Administrator
                  </button>
                </div>
              </form>
            </form>
          </dialog>
        </div>
      </div>

      <table className="table  lg:table-auto columns-xl break-after-column mb-24 ">
        <thead className={styles.tableWrap}>
          <tr className={style.alluserList}>
            <th>SL No </th>
            <th>Employee Name </th>
            <th>Department</th>
            <th>Create Date </th>
            <th>Status </th>
            <th colSpan={2}>Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>05-04-23</td>
              <td>
                <span className="bg-[#4AB449] text-white font-xs text-xs p-2 rounded">
                  {user.status}
                </span>
              </td>
              <td>
                <Link href="/b2bdashboard/b2bagent/employee/edit">
                  <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                    Edit
                  </span>
                </Link>
              </td>
              <td>
                <span className="bg-[#19ABE3] text-white font-xs text-xs p-2 rounded">
                  Change Password
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </B2BdashboardLayout>
  );
};

export default Employ;
