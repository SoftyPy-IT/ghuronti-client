import React from "react";
import TourDestination from "../../../../components/Tour/TourDestination";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import BusesHeroBox from "../../../../components/UserDashBoard/BusesHeroBox/BusesHeroBox";
import BestPlace from "../../../../components/BestPlace/BestPlace";
import Customer from "../../../../components/Customer/Customer";
import Travel from "../../../../components/Travel/Travel";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Buses = () => {
  return (
    <B2BdashboardLayout>
      <MoveText/>
      <BusesHeroBox />
      <BestPlace />
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Buses), { ssr: false });
