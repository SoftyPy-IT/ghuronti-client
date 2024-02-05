import React from "react";
import dynamic from "next/dynamic";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BHotelDetail from "../../../../components/Hotel/HotelDetails/B2BHotelDetail";
import TourPackage from "../../../../components/Tour/TourPackage/TourPackage";
const Hotel = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <B2BHotelDetail />
      <TourPackage/>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Hotel), { ssr: false });
