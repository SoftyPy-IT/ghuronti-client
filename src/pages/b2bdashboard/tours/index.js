import React from "react";
import BestPlace from "../../../../components/BestPlace/BestPlace";
import Travel from "../../../../components/Travel/Travel";
import dynamic from "next/dynamic";
import TourHeroBox from "../../../../components/UserDashBoard/TourHeroBox";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from '../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout'
import DisCount from "../../../../components/DisCount/DisCount";
const Tours = () => {
  return (
    <B2BdashboardLayout>
           <MoveText />
           <TourHeroBox />
            <BestPlace></BestPlace>
            <Travel></Travel>
           <DisCount/>
     
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Tours), { ssr: false });
