import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import B2BFlightBooks from "../../../../components/SearhPage/FlightBook/B2BFlightBooks";


const Book = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2BFlightBooks/>

    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });
