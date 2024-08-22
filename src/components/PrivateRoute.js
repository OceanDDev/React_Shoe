// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  return user && user.isAdmin ? (
    Component
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
