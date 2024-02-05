import React from "react";
import Payment from "../../../components/Payment/Payment";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <section>
      <Nav />
      <Payment></Payment>
      <Footer />
    </section>
  );
};

export default index;
