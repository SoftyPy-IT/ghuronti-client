import React, { useState } from "react";
import style from "./Payment.module.css";
import Image from "next/image";
import payment from "../../public/assets/payment5.png";
import payment2 from "../../public/assets/payment2.png";
import payment3 from "../../public/assets/payment3.png";
import payment4 from "../../public/assets/payment4.png";
import payment5 from "../../public/assets/payment.png";
import term from "../../public/assets/payment6.png";
import { FaEyeSlash, FaEye, FaStar } from "react-icons/fa";
const Payment = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = () => {};
  return (
    <section className={style.paymentWrap}>
      <div className={style.payment}>
        <h2>Personal Information </h2>
        <form>
          <div className={style.singlePayment}>
            <div className="relative">
              <label className={style.inputLabel}>First Name </label> <br />
              <span className={style.star}>
                <FaStar />
              </span>
              <input
                className={style.paymentBtn}
                name="fname"
                placeholder="First Name "
              />
            </div>
            <div className="relative">
              <label className={style.inputLabel}>Last Name </label> <br />
              <span className={style.star}>
                <FaStar />
              </span>
              <input
                type="text"
                className={style.paymentBtn}
                name="lname"
                placeholder="Last Name "
              />
            </div>
          </div>
          <div className={style.singlePayment}>
            <div className="relative">
              <label className={style.inputLabel}>Email </label> <br />
              <span className={style.star1}>
                <FaStar />
              </span>
              <input
                type="email"
                className={style.paymentBtn}
                name="email"
                placeholder="Email "
              />
            </div>
            <div className="relative">
              <label className={style.inputLabel}>Password </label> <br />
              <span className={style.star}>
                <FaStar />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className={style.paymentBtn}
                name="password"
                placeholder="Password "
              />
              <span
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                className={style.ShowIcon}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className={style.singlePayment}>
            <div className="relative">
              <label className={style.inputLabel}>Mobile Number </label> <br />
              <span className={style.star2}>
                <FaStar />
              </span>
              <input
                type="number"
                className={style.paymentBtn}
                name="number"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <label className={style.inputLabel}>Gender</label> <br />
              <input
                type="text"
                className={style.paymentBtn}
                name="price"
                placeholder="Price"
              />
            </div>
          </div>
          <div className={style.singlePayment}>
            <div>
              <label className={style.inputLabel}>Date of Birth </label> <br />
              <input
                type="date"
                className={style.paymentBtn}
                name="date"
                placeholder="Date of Birth"
              />
            </div>

            <div>
              <label className={style.inputLabel}>Nationality </label> <br />
              <input
                type="text"
                className={style.paymentBtn}
                name="nationality"
                placeholder="Nationality"
              />
            </div>
          </div>
          <div className={style.singlePayment}>
            <div>
              <label className={style.inputLabel}>Address </label> <br />
              <input
                type="text"
                className={style.paymentBtn}
                name="address"
                placeholder="Address "
              />
            </div>
          </div>
          <div className={style.payments}>
            <div>
              <h3>Select your Payment mathod</h3>
              <div className="flex items-center justify-center mb-8 flex-wrap">
                <div className={style.method}>
                  <Image
                  loading="lazy"
                    src={payment}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={style.method}>
                  <Image
                  loading="lazy"
                    src={payment2}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={style.method}>
                  <Image
                  loading="lazy"
                    src={payment3}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={style.method}>
                  <Image
                  loading="lazy"
                    src={payment4}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={style.method}>
                  <Image
                  loading="lazy"
                    src={payment5}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <lable>Bkash</lable> <br />
              <input
                type="number"
                className={style.bkash}
                placeholder="Enter Your Number"
                name="bkash"
              />
            </div>
            <div className={style.bkashText}>
              <h4>Tatal amount = BDT 23,650</h4>
              <span className={style.priceTax}>
                {" "}
                (Price includes VAT & Tax)
              </span>
            </div>
            <div className="flex mb-5  items-center justify-center mt-5">
              <Image
              loading="lazy"
                src={term}
                alt="Picture of the author"
                width={20}
                height={10}
                className="mr-3"
              />
              <p>
                {" "}
                I have read and accept the{" "}
                <span className={style.priceTax}>Terms and Conditions.</span>
              </p>
            </div>
            <button type="submit" className={style.termBtn}>
              Send your payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
