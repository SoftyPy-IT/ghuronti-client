import React from 'react'
import Login from '../../../components/Login/Login'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'
import { Helmet } from 'react-helmet-async'
const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || Login </title>
        </Helmet>
      <Nav/>
      <Login></Login>
      <Footer/>
    </section>
  )
}

export default index
