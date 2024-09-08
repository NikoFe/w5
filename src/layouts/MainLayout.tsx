import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Holder from "../components/Holder";

import "../styles/Main.css";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="body">
        <Sidebar></Sidebar>
        <Holder>
          <Outlet></Outlet>
        </Holder>
      </div>
    </>
  );
};

export default MainLayout;
