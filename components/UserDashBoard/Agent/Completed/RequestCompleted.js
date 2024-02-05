import React from "react";
import style from "./Completed.module.css";
const RequestCompleted = () => {
  return (
    <section>
      <div className={style.completedWrap}>
        <div className={style.completed}>
          <div className="flex justify-between">
            <div className={style.passengerInformation}>
              <h3 className={style.informationHeading}>General Information</h3>
              <table className={style.tableWrap}>
                <tr>
                  <td>
                    <strong>Request Type</strong>
                  </td>
                  <td> : Refund</td>
                </tr>
                <tr>
                  <td>
                    <strong>Request Status</strong>
                  </td>
                  <td>
                    :{" "}
                    <button className="bg-[#19ABE3] px-2 rounded font-xs">
                      Completed
                    </button>
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
                    <strong>Refund Processed Time</strong>
                  </td>
                  <td>: 15 Mar 23 </td>
                </tr>
                <tr>
                  <td>
                    <strong>Actual Booking Code</strong>
                  </td>
                  <td>: GTFL16731636200312</td>
                </tr>
                <tr>
                  <td>
                    <strong>Agency</strong>
                  </td>
                  <td>:Ghuronti.com</td>
                </tr>
                <tr>
                  <td>
                    <strong>Last Updated </strong>
                  </td>
                  <td>: 24 Feb 2023, 12:45</td>
                </tr>
                <tr>
                  <td>
                    <strong>Reason</strong>
                  </td>
                  <td>: Reason Not Specified</td>
                </tr>
              </table>
            </div>
            <div className={style.passengerInformations}>
              <h3 className={style.informationHeading}>
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
              </table>
            </div>
            <div className={style.passengerInformation1}>
              <h3 className={style.informationHeading}>
                Refund Charge Information
              </h3>
              <table className={style.passengerInfo}>
                <tr>
                  <th>
                    <strong>Refund Applicable Amount</strong>
                  </th>
                  <th>: 59,990</th>
                </tr>
                <tr>
                  <td>Used Fare Amount</td>
                  <td>: 000.00</td>
                </tr>
                <tr>
                  <td>Penalty Amount</td>
                  <td>: 670.00</td>
                </tr>
                <tr>
                  <td>Service Charge</td>
                  <td>: 0.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Refund Charge</strong>
                  </td>
                  <td>: 7800</td>
                </tr>
                <tr>
                  <td>
                    <strong>Amount To Be Tefunded </strong>
                  </td>
                  <td>: 65,788</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCompleted;
