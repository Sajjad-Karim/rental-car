import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";
import ScrollToTopPage from "../ScrollToTopPage";

const Layout = () => {
  return (
    <>
      <ScrollToTopPage />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
