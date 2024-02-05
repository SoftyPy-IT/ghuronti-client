import React from 'react';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umra3.jpeg";
import HajjLayout from '../../../../components/UmrahHajj/Hajj/HajjLayout';
const Ramadan = () => {
    return (
        <HajjLayout>
          <HajjUmrahCard
            img={umrah}
            heading="Ramadan Umrah Package 2023"
            subheading=""
            title="Ramadan Umrah Packages 2023-24 from Dhaka Bangladesh"
          ></HajjUmrahCard>
        </HajjLayout>
    );
};

export default Ramadan;