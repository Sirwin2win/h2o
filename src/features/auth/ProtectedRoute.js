// ProtectedRoute.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from './auth';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
  if (!isLoggedIn()) {
     navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
