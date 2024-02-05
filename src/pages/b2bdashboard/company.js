import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const company = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
          <div className="mt-5 ">
            <div className={styles.profileTop}>
              <div className={styles.flightHistory}>
                <div className="overflow-x-auto ">
                  <table className="table  lg:table-auto columns-xl break-after-column">
                    <thead className={style.tableWrap}>
                      <tr>
                        <th>Company Name </th>
                        <th>Client Name </th>
                        <th>Phone </th>
                        <th>Email </th>
                        <th>Member Since </th>
                        <th>Status </th>
                        <th>Address </th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
                        <td>
                          <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                            View
                          </span>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Ghuronti.com</td>
                        <td>Kaji Ehsan</td>
                        <td>+88-01885-071-488</td>
                        <td>ghuronti@gmail.com</td>
                        <td>01 Jan 2010 </td>
                        <td>Active </td>
                        <td>
                          Tropicana Tower, L 12, 45 Topkhana Rd, Purana Paltan,
                          Dhaka 1000
                        </td>
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
          </div>
    </B2BdashboardLayout>
  );
};
export default dynamic(() => Promise.resolve(company), { ssr: false });
