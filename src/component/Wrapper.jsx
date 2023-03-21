import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
      <Footer />
    </>
  );
};

export default Wrapper;
