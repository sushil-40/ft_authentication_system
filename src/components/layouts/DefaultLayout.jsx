import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
