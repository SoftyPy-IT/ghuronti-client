import React from "react"
import B2BdashboardLayout from "../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText"
import HotelHeroBox from "../../../../components/UserDashBoard/HotelHeroBox/HotelHeroBox"
import Travel from "../../../../components/Travel/Travel"
import Customer from "../../../../components/Customer/Customer"
import B2bTourDestination from "../../../../components/Tour/B2bTourDestination"

const Hotel = () => {
  return (
    <B2BdashboardLayout>
      <MoveText />
      <HotelHeroBox />
      <B2bTourDestination />
      <Travel />
      <Customer />
    </B2BdashboardLayout>
    
  )
}

export default Hotel
