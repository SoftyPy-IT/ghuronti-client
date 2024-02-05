import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BToursSearch from "../../../../components/Tour/ToursSearch/B2BToursSearch";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const TourSearch = () => {
  return (
    <B2BdashboardLayout>
        <MoveText />
            <B2BToursSearch/>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TourSearch), { ssr: false });
