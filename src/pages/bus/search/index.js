"use client";

import React, { useRef, useState } from "react";
import Nav from "../../../../components/NavBarr/Nav";
import Footer from "../../../../components/Footer/Footer";
import SearchBus from "../../../../components/Buses/SearchBus/SearchBus";

import dynamic from "next/dynamic";
const Search = () => {
  return (
    <div>
      <Nav />
      <SearchBus />
      
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Search), { ssr: false });
