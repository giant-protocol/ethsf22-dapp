import React from "react";
import LandingPage from "../../views/landingpage";
import { Footer } from "./footer/index";
import Header from "./header";

const Layout = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Layout;
