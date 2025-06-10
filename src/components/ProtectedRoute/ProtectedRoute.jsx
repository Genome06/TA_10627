import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authUtils } from '../../utils/auth';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Check authentication on every route change
    if (!authUtils.isAuthenticated()) {
      return;
    }
    
    // Update expiry time on activity
    authUtils.updateExpiry();
  }, [location]);
  
  // Check if user is authenticated
  if (!authUtils.isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  // Check role-based access
  if (requiredRole && !authUtils.hasRole(requiredRole)) {
    // Redirect based on user's actual role
    const userRole = authUtils.getUserRole();
    if (userRole === 'admin') {
      return <Navigate to="/pendataan/admin/dashboard" replace />;
    } else if (userRole === 'user') {
      return <Navigate to="/pendataan/kepalaKeluarga/dashboard" replace />;
    } else {
      return <Navigate to="/login" replace />;
    }
  }
  
  return children;
};

export default ProtectedRoute;