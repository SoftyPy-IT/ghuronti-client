import React from "react";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import styles from "../../manage/manage.module.css";
import style from "../agent.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
const Employ = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="w-full mx-auto ">
        <div>
          <div className={style.employModalWrap}>
            <h3 className="text-center font-bold text-xl">Update Employee </h3>
            <form method="dialog" className="modal-box">
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
                    Update Employee
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default Employ;
