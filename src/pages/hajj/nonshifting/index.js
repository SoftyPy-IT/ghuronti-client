import React from "react";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import HajjUmrahCard from "../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import shifting from "../../../../public/assets/hajj7.jpeg";
const NonShifting = () => {
  return (
    <HajjLayout>
      <HajjUmrahCard
         img={shifting}
         heading="Non-Shifting - Hajj Packages"
         subheading=""
         title="Pilgrims Are Always Kept at a Single Place in Makkah and Madinah Close to Haram in Non-Shifting Packages."
      ></HajjUmrahCard>
    </HajjLayout>
  );
};

export default NonShifting;
