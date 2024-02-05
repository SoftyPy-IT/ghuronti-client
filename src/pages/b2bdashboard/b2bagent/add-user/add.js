import React from "react";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import styles from "../../manage/manage.module.css";
import { CloudUpload } from "@mui/icons-material";
const AddUser = () => {
  return (
    <B2BdashboardLayout>
      <div className="w-full h-16 bg-[#19ABE3] text-white flex items-center justify-center ">
        <h2 className="text-center text-3xl font-bold">Add User </h2>
      </div>
      <div className="w-full mx-auto mb-24 mt-10">
        <form>
          <div className={styles.formControl}>
            <div>
              <label> Select Role </label>
              <select className={styles.inputField}>
                <option value="Super Admin">Super Admin</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Team Teader ">Team Leader </option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Account Manager"> Account Manager</option>
              </select>
            </div>
            <div>
              <label> Full Name </label>
              <input
                name="address"
                placeholder="Name"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>Mobile Number </label>
              <input
                name="category"
                placeholder="Phone "
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Email </label>
              <input
                name="productCategory"
                placeholder="Email"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label>User Name</label>
              <input
                name="date"
                placeholder="Username "
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Password </label>
              <input
                name="price"
                placeholder="Password"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div>
              <label> Title </label>
              <input
                name="title"
                placeholder="Title"
                type="text"
                className={styles.inputField}
              />
            </div>
            <div>
              <label>Re-enter Password </label>
              <input
                name="subTitle"
                placeholder="Re-enter Password"
                type="text"
                className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <div className={styles.uploadFile}>
              <label for="files">
                {" "}
                <CloudUpload className={styles.uploadIcon} /> Image Upload{" "}
              </label>
              <input
                name="image"
                className={styles.inputField}
                type="file"
                id="files"
                class="hidden"
              />
            </div>
          </div>

          <div className={styles.formControl}>
            <button className={styles.submitBtn} type="submit">
              Create Administrator
            </button>
          </div>
        </form>
      </div>
    </B2BdashboardLayout>
  );
};

export default AddUser;
