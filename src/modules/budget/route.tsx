import { RouteObject } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import DashboardLayout from "@/ui-library/layout/DashboardLayout";
import ProtectedRoutes from "@/providers/ProtectedRoute";
import BudgetPage from "./page/BudgetPage";

const router: RouteObject[] = [
  {
    path: ROUTES.BUDGET.BASE,
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <BudgetPage />
          </ProtectedRoutes>
        ),
      },
    ],
  },
];

export default router;
