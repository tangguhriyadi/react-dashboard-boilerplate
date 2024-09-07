import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/providers/Sidebar";
import { useAuth } from "@/providers/Auth";

const DashboardLayout: React.FC = () => {
  const { logout } = useAuth();
  return (
    <>
      <SidebarProvider>
        <Outlet />
        <button onClick={() => logout()}>Logout</button>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
