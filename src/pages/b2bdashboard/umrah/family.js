import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from '../../../../public/assets/umra2.jpg'
const Family = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
             img={umrah}
             heading="Family Umrah Package 2023"
             subheading=""
             title=" Family People Umrah Package from Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Family;
