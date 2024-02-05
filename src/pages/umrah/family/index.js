import React from 'react';
import HajjUmrahCard from '../../../../components/Shared/HajjUmraCard/HajjUmrahCard';
import umrah from "../../../../public/assets/umrah6.webp";
import HajjLayout from '../../../../components/UmrahHajj/Hajj/HajjLayout';
const index = () => {
    return (
       <HajjLayout>
        <HajjUmrahCard
           img={umrah}
           heading="Family Umrah Package 2023"
           subheading=""
           title=" Family People Umrah Package from Bangladesh"
       ></HajjUmrahCard>
       </HajjLayout>
    );
};

export default index;