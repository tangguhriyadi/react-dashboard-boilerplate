import { ConfigProvider } from "antd";
import React from "react";

const DesignConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#966E32",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default DesignConfig;
