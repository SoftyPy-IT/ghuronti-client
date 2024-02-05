import React from "react"
import dynamic from "next/dynamic"
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText"
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
import B2bSpecialTourPackage from "../../../../components/Tour/SpecialTourPackage/B2bSpecialTourPackage"
const Tours = () => {
  return (
    <B2BdashboardLayout>
      <div className="mb-5">
      <MoveText />
      </div>
      <B2bSpecialTourPackage />
    </B2BdashboardLayout>
  )
}

export default dynamic(() => Promise.resolve(Tours), { ssr: false })
