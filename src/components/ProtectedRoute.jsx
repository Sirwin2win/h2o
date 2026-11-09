import { Navigate } from 'react-router-dom';
import { usePermissions } from './PermissionContext';

const ProtectedRoute = ({ permission, children }) => {

    const { hasPermission, loading } = usePermissions();

    if (loading) {
        return <div>Loading permissions...</div>;
    }

    if (!hasPermission(permission)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;