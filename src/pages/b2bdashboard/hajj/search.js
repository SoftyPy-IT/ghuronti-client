import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from '../../../../public/assets/umra2.jpg'
const search = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
          img={umrah}
          heading="Premium - Hajj Packages ( Non-Shifting)"
          subheading=""
          title="Most Affordable Hajj Packages 2023-2024 from Dhaka, Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default search;
