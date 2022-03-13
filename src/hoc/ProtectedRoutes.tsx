import React, { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes: FC = () => {
  const location = useLocation();

  return localStorage.getItem("isAuth") ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
