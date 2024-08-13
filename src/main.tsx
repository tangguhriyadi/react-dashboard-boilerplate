import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/style.css";
import Providers from "@/providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
