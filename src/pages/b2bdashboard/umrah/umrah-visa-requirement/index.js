import React from "react";
import B2BHajjUmrahLayout from "../../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from "../../../../../public/assets/umrahOffer.jpg";
import style from "./requirement.module.css";
import Image from "next/image";
import { Beenhere } from "@mui/icons-material";

const Requirement = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <div className={style.visaRequirment}>
          <h3 className="text-3xl mb-5 font-bold">
            Get Umrah Visa 2023 | Online Requirements for Bangladeshi Citizen
          </h3>
          <div className={style.visaRequirmentImg}>
            <Image loading="lazy" className={style.requireImg} alt="requirement" src={umrah} />
          </div>

          <div className="w-9/12 mt-5 ">
            <h3 className="text-2xl font-bold mb-3 ">
              All The required documents checklist for Umrah visa processing
              from Bangladesh
            </h3>
            <ul>
              <li className="flex items-center">
                <Beenhere className={style.checkIcon} />
                <span>No age limitation.</span>
              </li>
              <li className="flex items-center">
                <Beenhere className={style.checkIcon} />
                <span>Bio Metric enrolled .</span>
              </li>
              <li className="flex items-center">
                <Beenhere className={style.checkIcon} />
                <span>
                  Infants & Children have required blood connected guardian for
                  applying for an Umrah visa .
                </span>
              </li>
            </ul>
          </div>
        </div>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Requirement;
