/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react"
import style from "../../pages/train/confirm/confirm.module.css"
import styling from "./confirm.module.css"
import { FaExclamationTriangle, FaInfo } from "react-icons/fa"
import Nav from "../../../components/NavBarr/Nav"
import Footer from "../../../components/Footer/Footer"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import bkash from "../../../public/assets/bkash.png"
import nagad from "../../../public/assets/nagad.png"
import rocket from "../../../public/assets/rocket.png"
import Image from "next/image"

const confirm = () => {
  const [value, setValue] = useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Nav />
      <div className={style.purchasWrap}>
        <h3 className="text-2xl font-bold">Purchase Ticket </h3>
        <hr />
        <div className="mt-10">
          <h3 className="text-xl font-bold ">Passenger Details </h3>
          <div className={style.passengerInforWrap}>
            <div className={style.passengerInfoLeftSide}>
              <div className={style.journyDetails}>
                <h5>Journey Details</h5>
                <strong className="block">Dhaka - Cumilla </strong>
                <h3 className="text-xl">Bus Name </h3>
                <strong>Fri, 09 Feb 2024, 05:00 AM</strong>
                <hr />
                <div className="mt-2">
                  <small>
                    <strong>Seat No(s): C3, C4, E3, E4</strong>
                  </small>
                  <small>
                    Seat Type: <strong>SHOVAN</strong>
                  </small>
                  <small>
                    <strong>Boarding at Gabtoli B 6 Counter , 05:00 AM</strong>
                  </small>
                </div>
              </div>
              <div className={style.journyDetails}>
                <h3 className="text-xl font-bold">Fare Details </h3>
                <div className="flex items-center justify-between">
                  <small>Ticket Price</small>
                  <small>300৳</small>
                </div>
                <div className="flex items-center justify-between">
                  <small>Processing Fee</small>
                  <small>100৳</small>
                </div>
                <div className="flex items-center justify-between">
                  <small>VAT</small>
                  <small>30৳</small>
                </div>
                <div className="flex items-center justify-between">
                  <small>Service Charge</small>
                  <small>30৳</small>
                </div>
                <hr className="my-3 border-[#4AB449]" />
                <div className="flex items-center justify-between">
                  <small>Total</small>
                  <small>3300৳</small>
                </div>
                <div className="flex items-center">
                  <FaInfo />
                  <small className="text-red-500 mt-3">
                    Please note that service charge is non refundable.
                  </small>
                </div>
              </div>
            </div>
            <div className={style.passengerInfoRightSide}>
              <h3 className="text-xl font-bold">Passenger 1</h3>
              <div>
                <label>Name </label>
                <input type="Passenger Name " />
              </div>
              <div>
                <label>Gender</label>
                <select>
                  <option value="Adult">Male</option>
                  <option value="Adult">Female</option>
                </select>
              </div>
              <div>
                <label>Passenger Type </label>
                <select>
                  <option value="Adult">Adult</option>
                  <option value="Adult">Child</option>
                </select>
              </div>
              <div className="mt-5">
                <h3 className="text-xl">Contact Information </h3>
                <div>
                  <label>Mobile Number </label>
                  <input type="Mobile Number" />
                </div>
                <div>
                  <label>Email </label>
                  <input type="Email" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Box className="paymentTabsWrap">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Mobil Banking " value="1" />
                    <Tab label="Card or Internet Banking " value="2" />
                    <Tab label="Cash on Delivery" value="3" />
                  </TabList>
                </Box>
                <TabPanel className="tabPanel" value="1">
                  <small className="text-center mb-5 block ">
                    Please select your payment method.
                  </small>
                  <div className="flex items-center justify-center gap-4">
                    <div className="shadow-lg px-5 py-2 hover:border hover:border-[#4AB449] transition rounded-md  ">
                      <Image
                        className="h-10 w-24"
                        src={bkash}
                        alt="baksh"
                        width="150"
                        height="100"
                      />
                    </div>
                    <div className="shadow-lg px-5 py-2 hover:border hover:border-[#4AB449] transition rounded-md  ">
                      <Image
                        className="h-10 w-28 object-cover "
                        src={nagad}
                        alt="baksh"
                        width="150"
                        height="100"
                      />
                    </div>
                    <div className="shadow-lg px-5 py-2 hover:border hover:border-[#4AB449] transition rounded-md  ">
                      <Image
                        className="h-10 w-28 object-cover"
                        src={rocket}
                        alt="baksh"
                        width="150"
                        height="100"
                      />
                    </div>
                    <div className="shadow-lg px-5 py-2 hover:border hover:border-[#4AB449] transition rounded-md  ">
                      <Image
                        className="h-10 w-28 object-cover"
                        src={nagad}
                        alt="baksh"
                        width="150"
                        height="100"
                      />
                    </div>
                  </div>
                  <div className="flex items-center my-5">
                    <div className="p-1 text-white w-8 h-8 bg-red-500 flex justify-center items-center rounded-full">
                      <FaExclamationTriangle className="size-5  " />
                    </div>
                    <small className="block ml-2 ">
                      Processing fee will be added with ticket fare during
                      payment, that will vary depending on MFS
                    </small>
                  </div>
                  <div className="grid place-content-center ">
                    <button className="bg-[#4AB449] border rounded-md text-white w-[170px] h-[40px]">
                      Confirm Ticket
                    </button>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  {" "}
                  <div className="flex items-center my-5">
                    <div className={styling.alertIcon}>
                      <FaExclamationTriangle className="size-5  " />
                    </div>
                    <small className="block ml-3 ">
                      You would be redirected to a third party payment gateway
                      where you can pay with your credit or debit cards. Your
                      payment transactions are 100% secure. On successful
                      payment, you would get a confirmed ticket.
                    </small>
                  </div>
                  <span className="mt-8 block">
                    Processing fee will be added with ticket fare during
                    payment, that will vary depending on the card
                  </span>
                  <div className="grid place-content-center ">
                    <button className="bg-[#4AB449] border rounded-md text-white w-[170px] h-[40px]">
                      Confirm Ticket
                    </button>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div className="flex items-center my-5">
                    <div className={styling.alertIcon}>
                      <FaExclamationTriangle className="size-5  " />
                    </div>
                    <small className="block ml-3 ">
                      You would be redirected to a third party payment gateway
                      where you can pay with your credit or debit cards. Your
                      payment transactions are 100% secure. On successful
                      payment, you would get a confirmed ticket.
                    </small>
                  </div>
                  <div className={styling.selectWrap}>
                    <div>
                      <label>City </label>
                      <select>
                        <option value="Adult">Select City</option>
                        <option value="Adult">Dhaka</option>
                      </select>
                    </div>
                    <div>
                      <label>Area </label>
                      <select>
                        <option value="Adult">Select Area</option>
                        <option value="Adult">Dhaka </option>
                      </select>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
            <div className="my-5  flex border rounded-md px-5 py-3  ">
              <input type="checkbox" className="w-5 h-5" />
              <small className="block ml-2">
                I am confirming that I have read, acknowledged and agree to the
                Terms of Use, Privacy Policy and Cancellation Policy of
                Shohoz.com
              </small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default confirm
