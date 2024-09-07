import { RouteObject } from "react-router-dom";
import ProtectedRoutes from "@/providers/ProtectedRoute";
import DashboardLayout from "@/ui-library/layout/DashboardLayout";

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
            <div>Dashboard</div>
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export default router;
