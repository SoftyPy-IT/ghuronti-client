import React from 'react';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umra2.jpg";
import HajjLayout from '../../../../components/UmrahHajj/Hajj/HajjLayout';
const Premium = () => {
    return (
        <HajjLayout>
          <HajjUmrahCard
            img={umrah}
            heading="Premium Umrah Package 2023"
            subheading=""
            title="Premium Umrah Package 2023 - 2024 from Bangladesh"
          ></HajjUmrahCard>
        </HajjLayout>
    );
};

export default Premium;