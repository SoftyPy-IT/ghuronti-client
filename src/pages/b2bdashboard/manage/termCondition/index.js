import React from "react";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const TermCondition = () => {
  return (
    <B2BdashboardLayout>
       <MoveText/>
                <div className="flex items-center justify-center text-center my-24">
                    <div>
                    <h3 className="text-3xl font-bold mb-5">Term & Condition </h3>
                    <p>Comming Sooooooooooooooooon.........!</p>
                    </div>
                </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(TermCondition), { ssr: false });
