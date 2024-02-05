import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import economy from "../../../../public/assets/hajj5.jpeg";
const Economy = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
           img={economy}
           heading="Economy - Hajj Packages ( Non-Shifting)"
           subheading=""
           title="Offer Low-Cost Hajj Packages 2024 - 2025 from Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Economy;
