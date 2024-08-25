import { RouteObject } from "react-router-dom";
import ProtectedRoutes from "@/router/ProtectedRoute";
import DashboardLayout from "@/ui-library/DashboardLayout";

const router: RouteObject[] = [
  {
    path: "",
    element: <DashboardLayout />,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
    children: [
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <div>asd</div>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/duar",
        element: (
          <ProtectedRoutes>
            <div>ini duar</div>
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export default router;
