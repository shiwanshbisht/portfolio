import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Maqrue from "./Maqrue";

const Layout = ({ children }) => {
  return (
    <>
      <div className="gradient-circle"></div>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
