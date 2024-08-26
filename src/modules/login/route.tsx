import { RouteObject } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import { ROUTES } from "@/constants/routes";

const router: RouteObject[] = [
  {
    path: ROUTES.AUTH.LOGIN,
    element: <LoginPage />,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
  },
];

export default router;
