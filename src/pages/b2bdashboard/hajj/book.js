import React from "react";
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";
import B2BHajjBook from "../../../../components/Umra/HajjPackage/B2BHajjBook";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
const HajjBook = () => {
  return (
    <B2BdashboardLayout>
        <MoveText/>
      <B2BHajjBook />
    </B2BdashboardLayout>
  );
};

export default HajjBook;
