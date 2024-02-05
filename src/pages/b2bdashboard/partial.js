import React from "react";
import style from "../../../components/UserDashBoard/UserDashBoard.module.css";
import styles from "./profile.module.css";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const partial = () => {
  return (
    <B2BdashboardLayout>
      <div className={styles.flightHistory}>
          <div className="overflow-x-auto ">
            <table className="table  lg:table-auto columns-xl break-after-column">
              <thead className={style.tableWrap}>
                <tr>
                  <th>Reference </th>
                  <th>Zone </th>
                  <th>Agency </th>
                  <th>PNR </th>
                  <th>Company Code </th>
                  <th>Fly Date </th>
                  <th>Total Amount </th>
                  <th>Total Paid Amount </th>
                  <th>Due Amount </th>
                  <th>
                    Payment <br /> Due Date{" "}
                  </th>
                  <th>Status </th>
                  <th>Payment Status </th>
                  <th>Expired At </th>
                  <th>Agent Pay </th>
                  <th>Requested On </th>
                  <th colSpan={2}>Details </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
                <tr>
                  <td>PARTIAL64</td>
                  <td>Dhaka </td>
                  <td>GlobalExplorePvt Ltd </td>
                  <td>BFFNBD</td>
                  <td> STA-102081 </td>
                  <td>20 Apr 23 11:30</td>
                  <td>39330</td>
                  <td>39330</td>
                  <td>0</td>
                  <td>2023-03-2915:00</td>
                  <td>Completed</td>
                  <td>Paid</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td>2023-03-29</td>
                  <td><span className="btn bg-[#04A444] text-[#fff] px-2 rounded">View</span> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(partial), { ssr: false });
