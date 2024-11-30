import React from "react";
import { Navigate } from "react-router";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Replace with your auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default RouteGuard;
