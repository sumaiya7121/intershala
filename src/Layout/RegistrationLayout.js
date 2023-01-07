import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import RegistrationNavbar from "../Pages/Shared/RegistrationNavbar";

const RegistrationLayout = () => {
  return (
    <div>
      <RegistrationNavbar></RegistrationNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RegistrationLayout;
