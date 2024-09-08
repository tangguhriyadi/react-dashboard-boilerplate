import React from "react";
import DesignConfig from "@/providers/DesignConfig";
import SecretValidationProvider from "@/providers/Secret";
import { NotificationProvider } from "@/providers/Notification";
import QueryProvider from "@/providers/Query";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  return (
    <DesignConfig>
      <SecretValidationProvider>
        <NotificationProvider>
          <QueryProvider>{children}</QueryProvider>
        </NotificationProvider>
      </SecretValidationProvider>
    </DesignConfig>
  );
};

export default Provider;
