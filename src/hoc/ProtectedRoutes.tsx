import React, { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStore } from "../store";

const ProtectedRoutes: FC = () => {
  const { isAuth } = useStore();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
