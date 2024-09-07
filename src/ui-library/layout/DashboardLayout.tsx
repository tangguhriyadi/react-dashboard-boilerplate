import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout.Content style={{ padding: "24px", minHeight: "100vh" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default DashboardLayout;
