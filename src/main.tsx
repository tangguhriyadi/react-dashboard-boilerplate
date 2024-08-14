import { createRoot } from "react-dom/client";
import "@/style.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router/Router.tsx";
import DesignConfig from "@/providers/DesignConfig";
import { NotificationProvider } from "@/providers/Notification";
import QueryProvider from "@/providers/Query";

createRoot(document.getElementById("root")!).render(
  <DesignConfig>
    <NotificationProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </NotificationProvider>
  </DesignConfig>
);
