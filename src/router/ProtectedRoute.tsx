import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/providers/Auth";
import { ROUTES } from "../constants/routes";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes = (props: ProtectedRoutesProps) => {
  const { children } = props;
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
