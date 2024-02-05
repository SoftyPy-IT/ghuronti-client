import React from "react";
import AdminLeftSide from "../../../components/DashBoard/AdminLeftSide";
import style from "./Pass.module.css";
import { Helmet } from "react-helmet-async";
const index = () => {
  return (
    <>
    <Helmet>
            <title>Ghuronti || FAQ </title>
        </Helmet>
    <section className={style.passWordWrap}>
      <div className="grid grid-cols-12">
        <div>
          <AdminLeftSide></AdminLeftSide>
        </div>
        <div className="col-span-9">
          <div className={style.passwordImg}>
            <div className={style.passwordWrapa}>
              <form>
                <div className="relative mb-5">
                  <div>
                    <div className="flex ml-[52px]">
                      <label>Old Password </label>
                      <span></span>
                    </div>

                    <input
                      className={style.passwordInput}
                      placeholder="Old Password"
                    />
                  </div>
                </div>
                <div className="relative mb-5">
                  <div>
                    <div className="flex ml-[52px]">
                      <label>New Password </label>
                      <span></span>
                    </div>

                    <input
                      className={style.passwordInput}
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="relative mb-5">
                  <div>
                    <div className="flex ml-[52px]">
                      <label>Re-New Password </label>
                      <span></span>
                    </div>

                    <input
                      className={style.passwordInput}
                      placeholder="Re-New Password"
                    />
                  </div>
                </div>
                <div>
                  <button className={style.updatePassword}>
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default index;
