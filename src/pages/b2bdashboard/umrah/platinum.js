import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from '../../../../public/assets/umrah4.webp'
const Platinum = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
              img={umrah}
              heading="Platinum Umrah Package 2023"
              subheading=""
              title="Platinum Umrah Package 2023 - 2024 from Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Platinum;
