import React from "react";
import B2BHajjCard from "../../../../components/Shared/HajjUmraCard/B2BHajjCard";
import B2BHajjUmrahLayout from "../../../../components/UmrahHajj/Umrah/B2BHajjUmrahLayout";
import umrah from '../../../../public/assets/umra3.jpeg'
const Ramadan = () => {
  return (
    <section>
      <B2BHajjUmrahLayout>
        <B2BHajjCard
               img={umrah}
               heading="Ramadan Umrah Package 2023"
               subheading=""
               title="Ramadan Umrah Packages 2023-24 from Dhaka Bangladesh"
        ></B2BHajjCard>
      </B2BHajjUmrahLayout>
    </section>
  );
};

export default Ramadan;
