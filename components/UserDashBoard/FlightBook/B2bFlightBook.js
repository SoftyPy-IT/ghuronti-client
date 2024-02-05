import React from "react";
import style from "./FlightBook.module.css";
import { Euro, KeyboardDoubleArrowDown } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import flight from "../../../public/assets/flight.png";

const B2bFlightBook = () => {
  const [priceDetals, setPriceDetails] = useState(true);
  const [flightDetails, setFlightDetails] = useState(true);
  const handleShowPriceDetails = () => {
    setPriceDetails((priceDetals) => !priceDetals);
  };
  const handleFlightDetails = () => {
    setFlightDetails((flightDetails) => !flightDetails);
  };
  return (
    <section>
      <div className={style.flightInfo}>
        <h2 className="text-xl font-bold">Flight Details Information !</h2>
      </div>
      <div className={style.flightDetailCard}>
        <div className={style.flightHeading}>
          <h3 className="text-xl text-[#4AB449]">Etihad Airways </h3>
          <div className="flex">
            <small className="mr-2">
              {" "}
              <Euro className={style.grossFireIcon} /> Gross Fare{" "}
            </small>
            <strong>BDT 87,007</strong>
          </div>
        </div>
        <div className={style.flightDetailWrap}>
          <div className={style.flightDetail}>
            <div>
              <h6>
                DAC, <small>Dhaka </small>
              </h6>
              <span>18:35 Mon, 28 Aug, 23</span>
            </div>
            <div>
              <h6>
                DAC, <small>Dhaka </small>
              </h6>
              <span>18:35 Mon, 28 Aug, 23</span>
            </div>
            <div>
              <p>12h 30m</p>
              <span>1 stop</span>
            </div>
          </div>
          <div className={style.priceBreakDownWrap}>
            <div
              onClick={handleShowPriceDetails}
              className={style.priceBreakDown}
            >
              <button>Price Details </button>
              <KeyboardDoubleArrowDown className={style.priceIcon} />
            </div>
            <div className={priceDetals ? `${style.hide}` : `${style.show}`}>
              <div className={style.travelerPriceWrap}>
                <div className={style.travellerPrice}>
                  <strong>Traveller: Adult</strong> <br />
                  <div className={style.right}>
                    <div className={style.priceBase}>
                      <div className={style.leftsidePrice}>
                        <p>Base Fare xl</p>
                        <p>Tax & Fare xl</p>
                      </div>
                      <div className={style.rightSidePrice}>
                        <p>45,0000</p>
                        <p>10,245</p>
                      </div>
                    </div>
                    <hr className={style.line} />
                  </div>
                </div>
                <div className={style.travellerPrice}>
                  <div className={style.right}>
                    <div className={style.priceBase}>
                      <div className={style.leftsidePrice}>
                        <p>Total Base xl</p>
                        <p>Total tax xl</p>
                        <p>Advance Income Tax xl</p>
                      </div>
                      <div className={style.rightSidePrice}>
                        <p>45,0000</p>
                        <p>10,245</p>
                        <p>245</p>
                      </div>
                    </div>
                    <hr className={style.line} />
                  </div>
                </div>
                <div className={style.travellerPrice}>
                  <div className={style.right}>
                    <div className={style.priceBase}>
                      <div className={style.leftsidePrice}>
                        <p>Total Price xl</p>
                        <p>Discount </p>
                        <p>Final Price Xl</p>
                      </div>
                      <div className={style.rightSidePrice}>
                        <p>45,0000</p>
                        <p>10,245</p>
                        <p>BDT 23,456</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.onholding}>
          <p>Book & Hold </p>
          <p>Partially Refundable </p>
          <span>2 Seats</span>
          <div onClick={handleFlightDetails} className={style.flightDetailBtn}>
            <button>Flight Details </button>
            <KeyboardDoubleArrowDown className={style.detailCon} />
          </div>
        </div>
        <div>
          <div className={flightDetails ? `${style.hide}` : `${style.show}`}>
            <div className={style.detailFlighCard}>
              <h2 className="text-2xl  text-center font-bold bg-[#4AB449] text-white rounded">
                DAC- JED
              </h2>
              <div>
                <hr className={style.line} />
                <div className={style.singleFlight}>
                  <div>
                    <div className={style.singleFlightLeft}>
                      <Image
                      loading="lazy"
                        src={flight}
                        width={80}
                        height={80}
                        alt="flight"
                      ></Image>
                      <div>
                        <strong>ETIHAD AIRWAYS</strong>
                        <p>Economy (Y)</p>
                        <p>RBD: Q</p>
                        <p>Monday, 18:35</p>
                        <p>28 Aug, 2023</p>
                        <p>Departure Terminal: 2</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong> 18:35 - 21:30</strong>
                    <p>28 Aug,23 - 28 Aug,23</p>
                    <p>Dhaka - Abu Dhabi</p>
                    <p>BOEING 787-9 | EY</p>
                    <p>35 KG</p>
                    <p>Arrival Terminal: 1</p>
                  </div>
                  <div>
                    <strong> Duration</strong>
                    <p>04h 55m</p>
                    <p>EY 245</p>
                    <p>Class: Economy</p>
                  </div>
                </div>
              </div>
              <div>
                <hr className={style.line} />
                <div className={style.singleFlight}>
                  <div>
                    <div className={style.singleFlightLeft}>
                      <Image
                      loading="lazy"
                        src={flight}
                        width={80}
                        height={80}
                        alt="flight"
                      ></Image>
                      <div>
                        <strong>ETIHAD AIRWAYS</strong>
                        <p>Economy (Y)</p>
                        <p>RBD: Q</p>
                        <p>Monday, 18:35</p>
                        <p>28 Aug, 2023</p>
                        <p>Departure Terminal: 2</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong> 18:35 - 21:30</strong>
                    <p>28 Aug,23 - 28 Aug,23</p>
                    <p>Dhaka - Abu Dhabi</p>
                    <p>BOEING 787-9 | EY</p>
                    <p>35 KG</p>
                    <p>Arrival Terminal: 1</p>
                  </div>
                  <div>
                    <strong> Duration</strong>
                    <p>04h 55m</p>
                    <p>EY 245</p>
                    <p>Class: Economy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.flightDetailCard}>
        <div className={style.passengersDetailCard}>
          <h3 className=" bg-[#E6F8FF] py-2 text-xl font-bold text-center">
            Adult 1
          </h3>
          <div className="mt-5">
            <label className={style.labelField}>
              Select Passengers From Favourite List
            </label>{" "}
            <br />
            <input type="text" className={style.passengerField} />
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Given Name </label> <br />
              <input type="text" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Surname</label> <br />
              <input type="text" className={style.passengerField} />
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Gender </label> <br />
              <input type="text" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Nationality</label> <br />
              <input
                value="Bangladesh"
                placeholder="Bangladesh"
                type="text"
                className={style.passengerField}
              />
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Date Of Birth </label> <br />
              <input type="date" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Frequent Flyer Number</label>{" "}
              <br />
              <input type="text" className={style.passengerField} />
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Passport Number * </label>{" "}
              <br />
              <input type="text" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Passport Expiry Date *</label>{" "}
              <br />
              <input type="text" className={style.passengerField} />
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Phone Number * </label> <br />
              <input type="text" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Seat Preference</label> <br />
              <input type="text" className={style.passengerField} />
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Meal Preference </label>{" "}
              <br />
              <select className={style.passengerField}>
                <option value="Asian vegetarian meal">
                  Asian vegetarian meal
                </option>
                <option value="Infant baby food">Infant baby food </option>
                <option value="Sea food meal">Sea food meal</option>
                <option value="Daibatic meal">Daibatic meal</option>
              </select>
            </div>
            <div>
              <label className={style.labelField}>Seat Preference</label> <br />
              <select className={style.passengerField}>
                <option value="Passenger can not walk short distance up or down stairs.">
                  Passenger can not walk short distance up or down stairs.
                </option>
                <option value="Passenger can not walk short distance, but not up or down stairs">
                  Passenger can not walk short distance, but not up or down
                  stairs{" "}
                </option>
                <option value="Passenger is traveling with a dry cell battery-powered wheelchair.">
                  Passenger is traveling with a dry cell battery-powered
                  wheelchair.
                </option>
                <option value="Passenger is traveling with a manual wheelchair.">
                  Passenger is traveling with a manual wheelchair.
                </option>
                <option value="On-board aisle wheelchair requested">
                  On-board aisle wheelchair requested
                </option>
                <option value="Passenger is traveling with a wet cell battery-powered wheelchair.">
                  Passenger is traveling with a wet cell battery-powered
                  wheelchair.
                </option>
              </select>
            </div>
          </div>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Passport Copy</label> <br />
              <input type="file" />
            </div>
            <div>
              <label className={style.labelField}>Visa Copy</label> <br />
              <input type="file" />
            </div>
          </div>
          <div className="mt-5">
            <label className={style.labelField}>Special Note/Instruction</label>{" "}
            <br />
            <input type="text" className={style.specialField} />
          </div>
          <p className="mt-5 text-sm">
            Contact Details (Airlines will send updates to this contact)
          </p>
          <div className={style.singlePassenger}>
            <div>
              <label className={style.labelField}>Contact Email</label> <br />
              <input type="email" className={style.passengerField} />
            </div>
            <div>
              <label className={style.labelField}>Contact Phone Number</label>{" "}
              <br />
              <input type="number" className={style.passengerField} />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex">
              <input type="checkbox" />
              <p className="ml-2 text-sm">
                By Booking/Issuing this Ticket I agree to{" "}
                <strong>Ghuronti Terms & Conditions</strong>
              </p>
            </div>
          </div>
          <button className={style.bookTicketBtn}>Book Ticket </button>
        </div>
      </div>
      <div className={style.flightDetailCard}>
        <div>
          <h2 className="text-2xl font-bold">Baggage & Cancellation Policy</h2>
          <div className="mt-5">
            <h6 className="text-xl mb-3">How to read rules:</h6>
            <div className={style.readingPolicy}>
              <p>
                Pay attention to the following notifications in the
                CANCELLATIONS section:
              </p>
              <p>TICKET IS NON-REFUNDABLE — the ticket is non-refundable;</p>
              <p>
                {" "}
                TICKET IS NON-REFUNDABLE FOR CANCEL/REFUND — the ticket is
                non-refundable;
              </p>
              <p>REFUND IS NOT PERMITTED — the ticket is non-refundable;</p>
              <p>
                ANY TIME TICKET IS NON-REFUNDABLE — the ticket is
                non-refundable;
              </p>
              <p>
                TICKET IS NON-REFUNDABLE IN CASE OF NO-SHOW — the ticket cannot
                be refunded in case of no-show.
              </p>
              <p>
                Change rules are described in the section with the CHANGES
                subtitle.
              </p>
              <p>
                The CHANGES ARE NOT PERMITTED line means that you cannot make
                any changes and in such a case, you are not allowed to change
                the date/time/route of the flight.
              </p>
            </div>
            <div>
              <h6 className="text-xl font-bold mt-5">Baggage Policy:</h6>
              <div className="mt-5">
                <h3 className=" font-bold">DAC - JED </h3>
                <div className="w-60">
                  <div className="flex justify-between my-3">
                    <small>Adult :</small>
                    <small>55KG</small>
                  </div>
                  <div className="flex justify-between my-3">
                    <small>Child :</small>
                    <small>No Baggage </small>
                  </div>
                  <div className="flex justify-between my-3">
                    <small>Infant :</small>
                    <small>No Baggage </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.policyRule}>
          <h2 className="text-xl font-bold">Cancellation Policy:</h2>
          <div className={style.policyWrap}>
            <div className={style.singlePolicy}>
              <p> CHANGES</p>
              <p>ANY TIME</p>
              <p>
                CHARGE USD 30.00 FOR REISSUE/REVALIDATION. WAIVED FOR DEATH OF
                PASSENGER OR FAMILY MEMBER. NOTE - TEXT BELOW NOT VALIDATED FOR
                AUTOPRICING. FIRST CHANGE PERMITTED FOC THEN SUBSEQUENT AT A
                CHARGE FOR CHANGES DONE UP TO ONE HOUR BEFORE DEPARTURE OF THE
                FLIGHT.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                FOR ALL CHANGES WITHIN 96 HOURS BEFORE DEPARTURE OF A FLIGHT A
                CHARGE OF 33 USD MUST BE COLLECTED FOR CHANGE OF RESERVATION.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>CHANGE FEES MUST BE CODED AS XP IN THE TAX FIELD.</p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                OFFICIAL DOCUMENTATION REQUIRED IN THE CASE OF DEATH OF
                PASSENGER/FAMILY MEMBER
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                ONE DATE CHANGE PERMITTED FOC WHEN RETURN DATE OUT OF RANGE.
                RETURN DATE MUST BE SPECIFIED AT TIME OF ORIGINAL BOOKING. IF
                ORIGINAL RBD IS NOT AVAILABLE THEN ANY FARE DIFFERENCE SHALL
                APPLY
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                CANCELLATIONS BEFORE DEPARTURE CHARGE USD 50.00 FOR
                CANCEL/REFUND. WAIVED FOR DEATH OF PASSENGER OR FAMILY MEMBER.
                NOTE - TEXT BELOW NOT VALIDATED FOR AUTOPRICING. FOR ALL
                CANCELLATIONS WITHIN 96 HOURS BEFORE DEPARTURE OF A FLIGHT A
                CHARGE OF 55 USD MUST BE COLLECTED FOR REFUND OF A TICKET
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                OFFICIAL DOCUMENTATION REQUIRED IN THE CASE OF DEATH OF
                PASSENGER/FAMILY MEMBER
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                IN CASES WHERE THE APPLICABLE PENALTIES ARE HIGHER THAN THE SUM
                OF BASE FARE AND FUEL SURCHARGE - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. GOVERNMENT TAXES AND AIRPORT CHARGES
                TO BE REFUNDED IN FULL
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                FOR NON-REFUNDABLE TICKETS - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. UNUTILIZED GOVERNMENT TAXES AND
                AIRPORT CHARGES TO BE REFUNDED IN FULL
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                TICKETS ISSUED 7 DAYS OR MORE PRIOR TO A FLIGHTS SCHEDULED
                DEPARTURE CAN BE CANCELLED/REFUNDED WITHOUT PENALTY UP TO 24
                HOURS AFTER A TICKET IS ISSUED
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                REFUND ADMINISTRATION FEE APPLIES ON REFUND REQUESTS PROCESSED
                BY ETIHAD AIRWAYS GLOBAL CONTACT CENTER AND RETAIL OFFICES. FEE
                IS IN ADDITION TO THE APPLICABLE PENALTIES. AFTER DEPARTURE
                CHARGE USD 50.00 FOR CANCEL/REFUND. WAIVED FOR DEATH OF
                PASSENGER OR FAMILY MEMBER. NOTE - TEXT BELOW NOT VALIDATED FOR
                AUTOPRICING. FOR ALL CANCELLATIONS WITHIN 96 HOURS BEFORE
                DEPARTURE OF A FLIGHT A CHARGE OF 55 USD MUST BE COLLECTED FOR
                REFUND OF A TICKET
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                DEDUCT APPLICABLE ONE-WAY FARE FOR THE JOURNEY TRAVELLED PLUS
                THE ABOVE CHARGE AND REFUND BALANCE.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                OFFICIAL DOCUMENTATION REQUIRED IN THE CASE OF DEATH OF
                PASSENGER/FAMILY MEMBER
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                IN CASES WHERE THE APPLICABLE PENALTIES ARE HIGHER THAN THE SUM
                OF BASE FARE AND FUEL SURCHARGE - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. GOVERNMENT TAXES AND AIRPORT CHARGES
                TO BE REFUNDED IN FULL
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                FOR NON-REFUNDABLE TICKETS - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. UNUTILIZED GOVERNMENT TAXES AND
                AIRPORT CHARGES TO BE REFUNDED IN FULL
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                REFUND ADMINISTRATION FEE APPLIES ON REFUND REQUESTS PROCESSED
                BY ETIHAD AIRWAYS GLOBAL CONTACT CENTER AND RETAIL OFFICES. FEE
                IS IN ADDITION TO THE APPLICABLE PENALTIES. CHANGES ANY TIME
                CHARGE USD 50.00 FOR NO-SHOW. WAIVED FOR DEATH OF PASSENGER OR
                FAMILY MEMBER. NOTE - TEXT BELOW NOT VALIDATED FOR AUTOPRICING.
                NO SHOW CHARGE IS NOT APPLICABLE FOR INFANT WITHOUT A SEAT.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                OFFICIAL DOCUMENTATION REQUIRED IN THE CASE OF DEATH OF
                PASSENGER/FAMILY MEMBER
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                ONE DATE CHANGE PERMITTED FOC WHEN RETURN DATE OUT OF RANGE.
                RETURN DATE MUST BE SPECIFIED AT TIME OF ORIGINAL BOOKING. IF
                ORIGINAL RBD IS NOT AVAILABLE THEN ANY FARE DIFFERENCE SHALL
                APPLY.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                A GUEST IS CONSIDERED A NO-SHOW IF HE/SHE FAILS TO SHOW UP AT
                THE AIRPORT ONE HOUR BEFORE DEPARTURE OF THE SCHEDULED FLIGHT.
                THE TICKET MUST BE REISSUED/REFUNDED AT LEAST ONE HOUR BEFORE
                FLIGHT DEPARTURE TO AVOID A NO-SHOW. IF ONLY THE BOOKING IS
                CANCELLED WITHOUT REISSUING/REFUNDING THE GUEST WILL INCUR A NO-
                SHOW PENALTY WHEN THEY COME TO SERVICE HIS/HER BOOKING. NO SHOW
                PENALTIES WILL BE CHARGED IF A GUEST CANCEL THEIR BOOKING WITHIN
                LESS THAN ONE HOUR OF DEPARTURE OR IF THEY CANCEL THEIR TICKET
                AND LEAVE IT OPEN BUT THE DEPARTURE DATE IS IN THE PAST.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                IF A NO SHOW TICKET IS PROCESSED FOR ANY CHANGES/REFUND THEN THE
                PENALTIES OF CHANGE /REFUND BETWEEN 96 HOURS TO 1 HOUR BEFORE
                DEPARTURE OF A FLIGHT WILL BE APPLICABLE IN ADDITION TO THE NO
                SHOW CHARGE.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                CANCELLATIONS ANY TIME CHARGE USD 60.00 FOR NO-SHOW. WAIVED FOR
                DEATH OF PASSENGER OR FAMILY MEMBER. NOTE - TEXT BELOW NOT
                VALIDATED FOR AUTOPRICING. NO SHOW CHARGE IS NOT APPLICABLE FOR
                INFANT WITHOUT A SEAT.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                OFFICIAL DOCUMENTATION REQUIRED IN THE CASE OF DEATH OF
                PASSENGER/FAMILY MEMBER
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                A GUEST IS CONSIDERED A NO-SHOW IF HE/SHE FAILS TO SHOW UP AT
                THE AIRPORT ONE HOUR BEFORE DEPARTURE OF THE SCHEDULED FLIGHT.
                THE TICKET MUST BE REISSUED/REFUNDED AT LEAST ONE HOUR BEFORE
                FLIGHT DEPARTURE TO AVOID A NO-SHOW. IF ONLY THE BOOKING IS
                CANCELLED WITHOUT REISSUING/REFUNDING THE GUEST WILL INCUR A NO-
                SHOW PENALTY WHEN THEY COME TO SERVICE HIS/HER BOOKING. NO SHOW
                PENALTIES WILL BE CHARGED IF A GUEST CANCEL THEIR BOOKING WITHIN
                LESS THAN ONE HOUR OF DEPARTURE OR IF THEY CANCEL THEIR TICKET
                AND LEAVE IT OPEN BUT THE DEPARTURE DATE IS IN THE PAST.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                IF A NO SHOW TICKET IS PROCESSED FOR ANY CHANGES/REFUND THEN THE
                PENALTIES OF CHANGE /REFUND BETWEEN 96 HOURS TO 1 HOUR BEFORE
                DEPARTURE OF A FLIGHT WILL BE APPLICABLE IN ADDITION TO THE NO
                SHOW CHARGE.
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                IN CASES WHERE THE APPLICABLE PENALTIES ARE HIGHER THAN THE SUM
                OF BASE FARE AND FUEL SURCHARGE - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. GOVERNMENT TAXES AND AIRPORT CHARGES
                TO BE REFUNDED IN FULL
              </p>
            </div>
            <div className={style.singlePolicy}>
              <p>
                FOR NON-REFUNDABLE TICKETS - ONLY THE BASE FARE AND FUEL
                SURCHARGE TO BE RETAINED. UNUTILIZED GOVERNMENT TAXES AND
                AIRPORT CHARGES TO BE REFUNDED IN FULL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2bFlightBook;
