import { createRoot } from "react-dom/client";
import "@/style.css";
import Providers from "@/providers/index.tsx";
import { RouterProvider } from "react-router-dom";
import router from "@/router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
