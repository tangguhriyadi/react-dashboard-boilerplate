import { RouteObject } from "react-router-dom";
import LoginPage from "./page/LoginPage";

const router: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
  },
];

export default router;
