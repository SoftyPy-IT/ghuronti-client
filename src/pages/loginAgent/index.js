import React from "react";
import LoginAgent from "../../../components/LoginAgent/LoginAgent";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <section>
      <Nav />
      <LoginAgent></LoginAgent>
      <Footer />
    </section>
  );
};

export default index;
