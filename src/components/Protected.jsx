// src/components/Protected.jsx
import React, { useState } from 'react'; // must have React imported
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" />;
  return children;
}
