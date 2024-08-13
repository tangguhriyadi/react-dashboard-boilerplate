import React from "react";
import DesignConfig from "@/providers/DesignConfig";
import { NotificationProvider } from "@/providers/Notification";
import QueryProvider from "@/providers/Query";
import { SidebarProvider } from "@/providers/Sidebar";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;
  return (
    <DesignConfig>
      <NotificationProvider>
        <QueryProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </QueryProvider>
      </NotificationProvider>
    </DesignConfig>
  );
};

export default Providers;
