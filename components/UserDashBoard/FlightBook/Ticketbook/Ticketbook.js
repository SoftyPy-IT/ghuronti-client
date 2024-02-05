import React from "react";
import style from "./Ticketbook.module.css";
import { ArrowBack } from "@mui/icons-material";
const Ticketbook = () => {
  return (
    <section>
      <div className={style.ticketInfo}>
        <div className="flex items-center justify-center">
          <ArrowBack className={style.ticketIcon} />
          <h3 className="text-xl mr-2 font-bold">Flight History</h3>
        </div>
        <button>Cancel Booking</button>
        <button>Issue with Balance </button>
        <button>Issue with cards/mfs</button>
        <button>Extend time limit </button>
        <button>download voucher </button>
      </div>
      <div className={style.ticketCard}>
        <div className={style.flightInfo}>
          <div>
            <h3 className="text-xl font-bold">DAC - JED </h3>
            <div className={style.bookedBtn}>
              <button>Unpaid</button>
              <button>Booked</button>
            </div>
          </div>
          <div className={style.clientPrice}>
            <p>Client Price BDT 103,662 BDT</p>
            <strong>BDT 96,419 BDT</strong>
          </div>
        </div>
        <div className={style.bookingInfo}>
          <div>
            <p>Booking Created </p>
            <strong>27 Aug 2023 10:56</strong> <br />
            <small>Airline PNR</small>
          </div>
          <div>
            <p>Time Limit </p>
            <strong>Before 27 Aug,2023 11:21</strong> <br />
            <small>Split PNR</small>
          </div>
          <div>
            <p>Reservation PNR </p>
            <strong>FYFPPI</strong> <br />
            <small> GT Reference</small>
            <br />
            <strong>GTFL16931121713346</strong>
          </div>
        </div>
        <div className={style.flightInfoWrap}>
          <h3 className="text-xl font-bold italic mb-3">Flight Info </h3>
          <table>
            <tr>
              <th>From</th>
              <th>Destination</th>
              <th>AirLines</th>
              <th>Departure </th>
              <th>Arrival</th>
              <th>Duration</th>
              <th>Flight Now</th>
            </tr>
            <tr>
              <td>
                <strong>DAC</strong> <br />
                <small>Hajrat Shahjalla</small>
              </td>
              <td>
                <strong>BOM</strong> <br />
                <small>Hajrat Shahjalla</small>
              </td>
              <td>Vistra</td>
              <td>Wed, 30 August 2023, 11:45</td>
              <td>Wed, 30 August 2023, 14:05</td>
              <td>02 hrs,50 mins</td>
              <td>255</td>
            </tr>
            <tr>
              <td>
                <strong>DAC</strong> <br />
                <small>Hajrat Shahjalla</small>
              </td>
              <td>
                <strong>BOM</strong> <br />
                <small>Hajrat Shahjalla</small>
              </td>
              <td>Vistra</td>
              <td>Wed, 30 August 2023, 11:45</td>
              <td>Wed, 30 August 2023, 14:05</td>
              <td>02 hrs,50 mins</td>
              <td>255</td>
            </tr>
          </table>
        </div>
        <div className={style.passengerInfo}>
          <h3 className={style.passenger}>Passenger Info</h3>
          <div className={style.singlePassenger}>
            <div>
              <strong>Given Name</strong> <br />
              <p>Ibrahim </p>
            </div>
            <div className={style.rightSide}>
              <strong>Surname </strong>
              <p>Sikder</p>
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <strong>Nationality</strong> <br />
              <p>Bangladesh</p>
            </div>
            <div className={style.rightSide}>
              <strong>Date of Birth </strong>
              <p>15 Aug 2000</p>
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <strong>Phone Number </strong> <br />
              <p>01825-445033</p>
            </div>
            <div className={style.rightSide}>
              <strong>Email </strong>
              <p>ghuronti@gmail.com</p>
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <strong>Passport Number </strong> <br />
              <p>0185033</p>
            </div>
            <div className={style.rightSide}>
              <strong>Passport Expiry Date </strong>
              <p>06 Mar 2024</p>
            </div>
          </div>

          <div className={style.singlePassenger}>
            <div>
              <strong>Seat Preference </strong> <br />
              <p>2</p>
            </div>
            <div className={style.rightSide}>
              <strong>Meal Preference </strong>
              <p>No Preference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticketbook;
