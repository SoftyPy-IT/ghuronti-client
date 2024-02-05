import React from "react"
import dynamic from "next/dynamic"
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText"
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
import B2bTourPackageCheckout from "../../../../components/Tour/Checkout/B2bTourPackageCheckout"
const Tours = () => {
  return (
    <B2BdashboardLayout>
        <MoveText/>
      <B2bTourPackageCheckout/>
    </B2BdashboardLayout>
  )
}

export default dynamic(() => Promise.resolve(Tours), { ssr: false })
