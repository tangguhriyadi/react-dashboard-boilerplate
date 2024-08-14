import { Link, RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "/register",
    element: <div>Register</div>,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
  },
];

export default router;
