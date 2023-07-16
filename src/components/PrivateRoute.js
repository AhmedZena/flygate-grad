import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const checkUserAuthentication = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };

  const isAuthenticated = checkUserAuthentication();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
