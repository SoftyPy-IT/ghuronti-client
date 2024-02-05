import React from "react";
import dynamic from "next/dynamic";
import RequestCompleted from "../../../components/UserDashBoard/Agent/Completed/RequestCompleted";
import MoveText from "../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const Completed = () => {
  return (
    <B2BdashboardLayout>
       <MoveText />
      <RequestCompleted />
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Completed), { ssr: false });
