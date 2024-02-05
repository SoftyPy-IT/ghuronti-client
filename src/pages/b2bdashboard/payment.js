import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const payment = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styles.flightHistory}>
          <div className="overflow-x-auto ">
            <table className="table  lg:table-auto columns-xl break-after-column">
              <thead className={style.tableWrap}>
                <tr>
                  <th>Created At </th>
                  <th>Deposit Date </th>
                  <th>Payment Type </th>
                  <th>Reference Number </th>
                  <th>Top Up Amount </th>
                  <th>Deposited To </th>
                  <th>Gateway Name </th>
                  <th>Payment Status </th>
                  <th>Details </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>29 Mar 2023 16:08</td>
                  <td>29 Mar 2023 16:08</td>
                  <td>Bank </td>
                  <td>6797234601596 </td>
                  <td> 601596 </td>
                  <td>City Bank Limited</td>
                  <td>Nagad</td>
                  <td>Approved</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
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

export default dynamic(() => Promise.resolve(payment), { ssr: false });
