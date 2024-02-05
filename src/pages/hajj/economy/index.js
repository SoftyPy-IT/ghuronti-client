import React from "react";
import HajjLayout from "../../../../components/UmrahHajj/Hajj/HajjLayout";
import HajjUmrahCard from "../../../../components/Shared/HajjUmraCard/HajjUmrahCard";
import economy from "../../../../public/assets/hajj5.jpeg";
 
const Economy = () => {
  return (
    <HajjLayout>
      <HajjUmrahCard
        img={economy}
        heading="Economy - Hajj Packages ( Non-Shifting)"
        subheading=""
        title="Offer Low-Cost Hajj Packages 2024 - 2025 from Bangladesh"
      ></HajjUmrahCard>
    </HajjLayout>
  );
};

export default Economy;
