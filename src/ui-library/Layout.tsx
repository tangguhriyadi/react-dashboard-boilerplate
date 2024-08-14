import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../providers/Sidebar";

const Layout: React.FC = () => {
  return (
    <>
      <SidebarProvider>
        <Outlet />
      </SidebarProvider>
    </>
  );
};

export default Layout;
