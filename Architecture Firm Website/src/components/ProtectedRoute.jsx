// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  // If no user, redirect to login
  if (!user || user.email !== "admin@gmail.com") {
    return <Navigate to="/admin" />;
  }

  return children;
}
