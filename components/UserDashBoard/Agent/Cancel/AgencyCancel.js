import React from "react";
import style from "../Completed/Completed.module.css";
const AgencyCancel = () => {
  return (
    <section>
      <div className={style.completedWrap}>
        <div className={style.completed}>
          <div className="flex justify-between">
            <div className={style.AgencyCancel}>
              <h3 className={style.informationHeading2}>General Information</h3>
              <table className={style.tableWrap}>
                <tr>
                  <td>
                    <strong>Request Type</strong>
                  </td>
                  <td> : Change</td>
                </tr>
                <tr>
                  <td>
                    <strong>Request Status</strong>
                  </td>
                  <td>
                    :{" "}
                    <button className="bg-red-600 px-2 rounded font-xs">
                      Declined By Agency
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Requested Placed On</strong>
                  </td>
                  <td>: 19 Jan 2023, 11:04</td>
                </tr>
                <tr>
                  <td>
                    <strong>Reason</strong>
                  </td>
                  <td>: Reason Not Specified</td>
                </tr>
                <tr>
                  <td>
                    <strong>Remark</strong>
                  </td>
                  <td>
                    : 1 QR 756Q 15MAY 1 ATLDOH*SS2 1930 1615 16MAY 2 /DCQR /E 2
                    QR 638Q 16MAY 2 DOHDAC*SS2 1715 0155 17MAY 3 /DCQR /E 3 QR
                    635S 04SEP 1 DACDOH*SS2 2015 2255 /DCQR /E 4 QR 755S 05SEP 2
                    DOHATL*SS2 0825 1625 /DCQR /E
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Actual Booking </strong>
                  </td>
                  <td>STFL16706544697133</td>
                </tr>
                <tr>
                  <td>
                    <strong>Agency</strong>{" "}
                  </td>
                  <td>Ghuronti.com</td>
                </tr>
                <tr>
                  <td>
                    <strong>Last Updated</strong>
                  </td>
                  <td>11 Feb 2023, 11:38</td>
                </tr>
              </table>
            </div>
            <div className={style.AgencyCancel}>
              <h3 className={style.informationHeading3}>
                Passenger Information
              </h3>
              <table className={style.passengerInfo}>
                <tr>
                  <th>Name</th>
                  <th>E-Ticket</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                </tr>
                <tr>
                  <td>Ibrahim Sikder</td>
                  <td>9979699893966</td>
                  <td>Male </td>
                  <td>15 Aug 2000</td>
                </tr>
                <tr>
                  <td>Ibrahim Sikder</td>
                  <td>9979699893966</td>
                  <td>Male </td>
                  <td>15 Aug 2000</td>
                </tr>
                <tr>
                  <td>Ibrahim Sikder</td>
                  <td>9979699893966</td>
                  <td>Male </td>
                  <td>15 Aug 2000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCancel;
