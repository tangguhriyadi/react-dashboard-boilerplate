import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/providers/Auth";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes = (props: ProtectedRoutesProps) => {
  const { children } = props;
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn)

  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ fron: location }} replace />
  );
};

export default ProtectedRoutes;
