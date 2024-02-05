import React from "react";
import style from "./Mission.module.css";
import mission from "../../public/assets/mission.png";
import Image from "next/image";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Mission = () => {
  return (
    <section className={style.missionWrap}>
      <SectionTitle
      heading='Our Missin & Vision '
      subHeading='  Serving our customer, searching their entire satisfaction and
      providing touristic services of quality, committing to the
      social, cultural and environmental reality of our country.'
      ></SectionTitle>
      <div className={style.vission}>
        <div className={style.missionBox}>
          <h4 className={style.missionText}>Mission</h4>
          <Image
           loading="lazy"
            src={mission}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className={style.missionPara}>
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
        <div className={style.missionBox}>
          <h4 className={style.missionText}>Vission</h4>
          <Image
           loading="lazy"
            src={mission}
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover"
          />
          <p className={style.missionPara}>
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
