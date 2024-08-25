/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthProvider } from "@/providers/Auth";

// autoload routes
const modules = import.meta.glob("../modules/**/route.tsx", { eager: true });

const routes = Object.entries(modules).map((fileModule: any) => {
  return fileModule[1].default[0];
});

/**
 * @description
 * This is the main route.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: routes,
  },
]);

export default router;
