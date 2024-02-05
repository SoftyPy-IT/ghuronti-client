import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const returnChange = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styles.flightHistory}>
          <div className="overflow-x-auto ">
            <table className="table  lg:table-auto columns-xl break-after-column">
              <thead className={style.tableWrap}>
                <tr>
                  <th>PNR</th>
                  <th>Booked </th>
                  <th>Created At </th>
                  <th>Request Code </th>
                  <th>Booking Code </th>
                  <th>Request Type </th>
                  <th>Status </th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>WBZCTH</td>
                  <td>Global04 </td>
                  <td>04 Mar 2023</td>
                  <td>CHANGE-6403091864602</td>
                  <td> GTRN164091864602 </td>
                  <td>Change </td>
                  <td>
                    {" "}
                    <span className="bg-[#4AB449] text-white font-xs text-xs px-3 rounded">
                      {" "}
                      Completed
                    </span>
                  </td>
                  <td className="cursor-pointer">
                    <Link href="/b2bdashboard/completed">
                      {" "}
                      <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded ">
                        {" "}
                        View
                      </span>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(returnChange), { ssr: false });
