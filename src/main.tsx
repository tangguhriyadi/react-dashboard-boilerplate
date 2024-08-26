import { createRoot } from "react-dom/client";
import "@/style.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import Provider from "@/provider";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
