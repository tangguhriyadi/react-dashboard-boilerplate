import React from "react";
import DesignConfig from "@/providers/DesignConfig";
import { NotificationProvider } from "@/providers/Notification";
import QueryProvider from "@/providers/Query";
import { AuthProvider } from "./Auth";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;
  return (
    <DesignConfig>
      <AuthProvider>
        <NotificationProvider>
          <QueryProvider>{children}</QueryProvider>
        </NotificationProvider>
      </AuthProvider>
    </DesignConfig>
  );
};

export default Providers;
