import React from "react";
import style from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaBimobject,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footerWrap}>
        <div className="mb-10">
          <h4 className="pb-5">Bangladesh </h4>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-3 text-white"></FaPhoneAlt>
            <span>+88 01885071488</span>
          </p>
          <p className="flex items-center text-white my-2">
            <FaPhoneAlt className="mr-3"></FaPhoneAlt>{" "}
            <span>+88 01533389338</span>
          </p>
          <p className="flex items-center text-white">
            <FaMapMarkerAlt className="text-white mr-3"></FaMapMarkerAlt>{" "}
            <span>
              Tropicana Tower, L 12, 45 <br /> Topkhana Rd, Purana Paltan Dhaka
              1000
            </span>
          </p>
        </div>
        <div className="mb-10">
          <h4 className="pb-5">USA Contact </h4>
          <p className="flex items-center text-white">
            <FaPhoneAlt className="mr-3"></FaPhoneAlt> <span>+17705263551</span>
          </p>
        </div>
        <div className="mb-10">
          <h4 className="pb-5">Social Media </h4>
          <p className={style.number}>
            <span>
              <span>
                {" "}
                <FaFacebook className={style.socialIcon}></FaFacebook>{" "}
              </span>
              <span>
                {" "}
                <FaTwitter className={style.socialIcon}></FaTwitter>{" "}
              </span>
              <span>
                {" "}
                <FaWhatsappSquare
                  className={style.socialIcon}
                ></FaWhatsappSquare>{" "}
              </span>
              <span>
                {" "}
                <FaBimobject className={style.socialIcon}></FaBimobject>{" "}
              </span>
              <span>
                {" "}
                <FaInstagramSquare
                  className={style.socialIcon}
                ></FaInstagramSquare>{" "}
              </span>
            </span>
          </p>
        </div>
        <div className={style.privacy}>
          <h4 className="pb-5">HELP </h4>
          <p className={style.number}>
            <Link href="/faq">
              <span>FAQ</span>
            </Link>
          </p>
          <p className={style.number}>
            <span>
              <Link href="/privacy">
                <span>Privary Policy</span>
              </Link>
            </span>
          </p>
          <p className={style.number}>
            <span>
              <Link href="/termAndCondition">
                <span>Term & Condition </span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
