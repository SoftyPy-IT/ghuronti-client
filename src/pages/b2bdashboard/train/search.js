import React from "react";
import dynamic from "next/dynamic";
import B2bTrainSearch from "../../../../components/Buses/SearchBus/B2bTrainSearch";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";

const Search = () => {
  return (
    <B2BdashboardLayout>
      <MoveText/>
     <div className="mt-5">
     <B2bTrainSearch/>
     </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Search), { ssr: false });
