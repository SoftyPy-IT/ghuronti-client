import React from "react";
import style from "../b2bdashboard/manage/manage.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import admin from "../../../public/assets/admin.png";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
const profile = () => {
  return (
    <B2BdashboardLayout>
      <div>
        <MoveText />
        <div class="border-gray-700 bg-opacity-25 mt-10">
          <div class="lg:w-full bg-[#19ABE3]  mb-8">
            <div class="flex flex-wrap items-center justify-center p-4 md:py-8">
              <div class="md:w-3/12 md:ml-16">
                <Image
                  alt="admin"
                  src={admin}
                  class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                 border-2 border-secondary p-1"
                />
              </div>
              <div className={styles.profileMiddle}>
                <h2 className="text-white text-xl my-5">
                  Profile Detail: Global04{" "}
                </h2>
                <div className={styles.userInfo}>
                  <ul className={styles.userLeftInfo}>
                    <li>Username</li>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Company</li>
                    <li>Member Since </li>
                    <li>Status</li>
                    <li>Created By</li>
                  </ul>
                  <ul>
                    <li>Global04</li>
                    <li>Mr Global Explore</li>
                    <li>visa@geplbl.com</li>
                    <li>Global Explore Pvt Ltd </li>
                    <li>24 Sep 2022 </li>
                    <li>Active</li>
                    <li>raisul324</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form  */}
        <div class="flex items-center justify-center px-6 w-full">
          <div class="w-full">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 class="mt-6 text-2xl font-extrabold text-center leading-9">
                Update Your Information
              </h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full ">
              <form>
                <div className={style.formControl}>
                  <div>
                    <label> Name </label>
                    <input
                      name="subTitle"
                      placeholder="Name"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                  <div>
                    <label>User Name</label>
                    <input
                      name="date"
                      placeholder="User Name "
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                </div>
                <div className={style.formControl}>
                  <div>
                    <label>Email </label>
                    <input
                      name="price"
                      placeholder="Email"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                  <div>
                    <label>Company</label>
                    <input
                      name="price"
                      placeholder="Company"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                </div>
                <div className={style.formControl}>
                  <div>
                    <label>Member Since </label>
                    <input
                      name="price"
                      placeholder="Email"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                  <div>
                    <label>Status </label>
                    <input
                      name="price"
                      placeholder="Company"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                </div>
                <div className={style.formControl}>
                  <div>
                    <label>Created By </label>
                    <input
                      name="price"
                      placeholder="Created By"
                      type="text"
                      className={style.inputField}
                    />
                  </div>
                  <div>
                    <label>Image </label>
                    <input
                      name="price"
                      placeholder="Company"
                      type="file"
                      className={style.inputField}
                    />
                  </div>
                </div>

                <div className={style.formControl}>
                  <button className={style.submitBtn} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(profile), { ssr: false });
