import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import B2BsearchBus from "../../../../components/Buses/SearchBus/B2BsearchBus";
const TourSearch = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
      <B2BsearchBus />
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TourSearch), { ssr: false });
