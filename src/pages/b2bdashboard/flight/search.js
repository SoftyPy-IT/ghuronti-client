import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import FlightSearchB2b from "../../../../components/SearhPage/FlightSearch/FlightSearchB2b";

const flightSearch = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <FlightSearchB2b/>
    </B2BdashboardLayout>
    
  );
};

export default dynamic(() => Promise.resolve(flightSearch), { ssr: false });
