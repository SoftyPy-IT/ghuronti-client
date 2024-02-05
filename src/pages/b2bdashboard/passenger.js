import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const passenger = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styles.flightHistory}>
          <div className="overflow-x-auto ">
            <table className="table  lg:table-auto columns-xl break-after-column">
              <thead className={style.tableWrap}>
                <tr>
                  <th>Title</th>
                  <th>First Name </th>
                  <th>Last Name </th>
                  <th>Travel Type </th>
                  <th>Mobile Number </th>
                  <th>Email </th>
                  <th>Date Of Birth </th>
                  <th>Passport Number </th>
                  <th>Passport Expiry Date </th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
                  <td>
                    <span className="bg-[#19ABE3] text-white font-xs text-xs px-3 rounded">
                      View
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td>MR</td>
                  <td>MD OSMAN</td>
                  <td>GONI</td>
                  <td>Adult</td>
                  <td> 01931666222 </td>
                  <td>ghuronti@gmail.com</td>
                  <td>01 Jan 2010 </td>
                  <td>EH0549485</td>
                  <td>01 Feb 2026</td>
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

export default dynamic(() => Promise.resolve(passenger), { ssr: false });
