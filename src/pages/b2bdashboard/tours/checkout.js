import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BCheckout from "../../../../components/Tour/Checkout/B2BCheckout";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const TourReserve = () => {
  return (
    <B2BdashboardLayout>
       <MoveText />
           <B2BCheckout/>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TourReserve), { ssr: false });
