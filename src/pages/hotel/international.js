const { default: Footer } = require("../../../components/Footer/Footer")
const { default: Nav } = require("../../../components/NavBarr/Nav")
const {
  default: InternationalHotelPackage,
} = require("../../../components/Tour/SpecialTourPackage/InternationalHotelPackage")
 const Internation = () => {
  return (
    <div>
      <Nav />
      <InternationalHotelPackage />
      <Footer />
    </div>
  )
}
export default Internation