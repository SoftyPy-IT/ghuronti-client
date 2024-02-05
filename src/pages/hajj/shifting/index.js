import React from "react";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import HajjUmrahCard from "../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import shifting from "../../../../public/assets/hajj6.jpg";
const Shifting = () => {
  return (
    <HajjLayout>
      <HajjUmrahCard
         img={shifting}
         heading="Shifting - Hajj Packages"
         subheading=""
         title="Most Affordable Shifting Hajj Packages 2024 - 2024 from Dhaka, Bangladesh"
      ></HajjUmrahCard>
    </HajjLayout>
  );
};

export default Shifting;
