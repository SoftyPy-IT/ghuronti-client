import React from "react";
import B2BHajjUmrahLayout from "../../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from "../../../../../public/assets/hajj9.jpg";
import style from "../hajj.module.css";
import Image from "next/image";
import { Beenhere } from "@mui/icons-material";
const VisaRequirement = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <div className={style.visaRequirment}>
          <div className={style.visaRequirmentImg}>
            <Image loading="lazy" className={style.requireImg} alt="requirement" src={umrah} />
          </div>
          <h3 className="text-4xl font-bold mt-5">
            Hajj Visa Requirements 2023 from Bangladesh
          </h3>
          <div className="my-5">
            <h4 className="text-2xl font-bold mb-2">
              Required list of documents for Hajj visa processing from Dhaka
              Bangladesh
            </h4>
            <ul>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>
                  Original passport must be valid for six months from the date
                  of travel and 4 blank pages for visa stamping.
                </span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>
                  Most recent 2 copy passport size photographs with white
                  background only.
                </span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>Original SMART Card / NID Card.</span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>
                  Health Requirements: Proof of OPV or IPV vaccination is
                  required 6 weeks prior to the application for an entry visa.
                </span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>Copy of birth certificate for children (6 years).</span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>Copy of the marriage certificate for couples.</span>
              </li>
              <li className="flex items-center mt-2">
                <Beenhere className={style.checkIcon} />
                <span>
                  A woman traveling alone must be 45 years old and must obtain a
                  letter of authorization (notarized) from her mahram.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default VisaRequirement;
