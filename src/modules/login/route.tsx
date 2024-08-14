import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "/login",
    element: <div>Login</div>,
    // handle: {
    //   crumb: () => <Link to="/">Dashboard</Link>,
    // },
  },
];

export default router;
