import { Link, RouteObject } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import DashboardLayout from "../../ui-library/layout/DashboardLayout";
import ProtectedRoutes from "../../providers/ProtectedRoute";

const router: RouteObject[] = [
  {
    path: ROUTES.BUDGET.BASE,
    element: <DashboardLayout />,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
    children: [
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <div>BUDGET</div>
          </ProtectedRoutes>
        ),
      },
      {
        path: "duar",
        element: (
          <ProtectedRoutes>
            <div>BUDGET</div>
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export default router;
