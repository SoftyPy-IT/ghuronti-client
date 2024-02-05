import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BHotelSearch from "../../../../components/SearhPage/B2BHotelSearch";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Hotel = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2BHotelSearch />
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
