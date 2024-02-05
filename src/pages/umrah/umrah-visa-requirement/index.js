import React from "react";
import umrah from "../../../../public/assets/umrahOffer.jpg";
import style from "../../b2bdashboard/umrah/umrah-visa-requirement/requirement.module.css";
import Image from "next/image";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import { Beenhere } from "@mui/icons-material";
const VisaRequirement = () => {
  return (
    <HajjLayout>
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
    </HajjLayout>
  );
};

export default VisaRequirement;





