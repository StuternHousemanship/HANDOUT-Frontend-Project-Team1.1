import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserAuth from "./hooks/UserAuth";

function ProtectedRoutes() {
  const { auth } = UserAuth();
  return auth?.email ? <Outlet /> : <Navigate to="/unauthorized" replace />;
}

export default ProtectedRoutes;