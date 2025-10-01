// components/RequireAuth.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const { user, token, initialized } = useSelector((state) => state.auth);
  const location = useLocation();

//   if (!user || !token) {
//     // Not logged in → redirect to login, keep attempted location
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

if (!initialized) {
    return <div>Loading...</div>; // or your loader component
  }

  return children;
};

export default RequireAuth;
