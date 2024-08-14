import { RouteObject } from "react-router-dom";
import Layout from "@/ui-library/Layout";
import ProtectedRoutes from "@/router/ProtectedRoute";

const router: RouteObject[] = [
  {
    path: "",
    element: <Layout />,
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
    ],
  },
];

export default router;
