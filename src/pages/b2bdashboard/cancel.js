import React from "react";
import dynamic from "next/dynamic";
import AgencyCancel from "../../../components/UserDashBoard/Agent/Cancel/AgencyCancel";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const Completed = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <AgencyCancel></AgencyCancel>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
