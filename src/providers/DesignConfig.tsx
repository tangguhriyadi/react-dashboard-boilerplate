import { ConfigProvider } from "antd";
import React from "react";

interface DesignConfigProps {
  children: React.ReactNode;
}

const DesignConfig: React.FC<DesignConfigProps> = (props) => {
  const { children } = props;
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
