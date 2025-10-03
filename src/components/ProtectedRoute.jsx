// components/ProtectedRoute.js
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user); // or whatever your auth slice is
  const location = useLocation();

  if (!user) {
    // Save where user was trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
