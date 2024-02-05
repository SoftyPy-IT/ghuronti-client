import React from "react"
import AboutHero from "../../../components/About/AboutHero"
import Team from "../../../components/Team/Team"
import Mission from "../../../components/Mission/Mission"
import Footer from "../../../components/Footer/Footer"
import Nav from "../../../components/NavBarr/Nav"
import { Helmet } from "react-helmet-async"
import Reveiw from "../../../components/Vissa/Review/Reveiw"

const index = () => {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || About Us</title>
      </Helmet>
      <Nav />
      <AboutHero></AboutHero>
      <Team></Team>
      <Mission></Mission>
      <Reveiw />
      <Footer />
    </section>
  )
}

export default index
