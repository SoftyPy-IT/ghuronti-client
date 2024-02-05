import React from "react";
import style from "./Team.module.css";
import Image from "next/image";
import team from "../../public/assets/team.png";
import team2 from "../../public/assets/team2.png";
import team3 from "../../public/assets/team3.png";
import team4 from "../../public/assets/team4.png";
import TeamSection from "../TeamSection/TeamSection";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Team = () => {
  return (
    <section className="">
      <SectionTitle
      heading='Our Team'
      subHeading=' At Better Work, we are driven by shared standards of excellence,
      guided by the same integrity, and motivated by a common ambition to
      improve lives.'
      ></SectionTitle>
      <TeamSection />
    </section>
  );
};

export default Team;
