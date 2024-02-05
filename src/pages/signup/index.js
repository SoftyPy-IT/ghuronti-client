import React from "react";
import SignUp from "../../../components/SignUp/SignUp";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || About Us</title>
        </Helmet>
      <Nav />
      <SignUp></SignUp>
      <Footer />
    </section>
  );
};

export default index;
