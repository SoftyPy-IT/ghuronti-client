import React from 'react';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umrah4.webp";
import HajjLayout from '../../../../components/UmrahHajj/Hajj/HajjLayout';
const Platinum = () => {
    return (
        <HajjLayout>
          <HajjUmrahCard
          img={umrah}
          heading="Platinum Umrah Package 2023"
          subheading=""
          title="Platinum Umrah Package 2023 - 2024 from Bangladesh"
       ></HajjUmrahCard>
        </HajjLayout>
    );
};

export default Platinum;