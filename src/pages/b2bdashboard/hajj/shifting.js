import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import shifting from "../../../../public/assets/hajj6.jpg";
const Shifting = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
            img={shifting}
            heading="Economy - Hajj Packages ( Non-Shifting)"
            subheading=""
            title="Offer Low-Cost Hajj Packages 2024 - 2025 from Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Shifting;
