import React from "react";
import dynamic from "next/dynamic";
import B2bFlightBook from "../../../../components/UserDashBoard/FlightBook/B2bFlightBook";
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";

const Book = () => {
  return (
    <B2BdashboardLayout>
       <B2bFlightBook/>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });

