import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BTourReserve from "../../../../components/Tour/ToursReserve/B2BTourReserve";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const TourReserve = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2BTourReserve />
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TourReserve), { ssr: false });
