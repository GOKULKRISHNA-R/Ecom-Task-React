import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({isLoggedIn}) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/Signin" />;
};

export default ProtectedRoutes;
