import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return <div className="p-6 text-center text-red-600">Loading…</div>;
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
