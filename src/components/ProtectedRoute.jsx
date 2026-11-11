
import { Navigate } from "react-router-dom";
import { usePermissions } from "./PermissionContext";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ permission, children }) => {
  const { hasPermission, loading } = usePermissions();

  const { user } = useSelector((state) => state.auth);

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Still loading permissions
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading permissions...
      </div>
    );
  }

  // Check permission
  if (permission && !hasPermission(permission)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
