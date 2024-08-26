import { Link, RouteObject } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

const router: RouteObject[] = [
  {
    path: ROUTES.AUTH.REGISTER,
    element: <div>Register</div>,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
  },
];

export default router;
