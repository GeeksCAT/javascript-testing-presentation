import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/use-auth'

export interface ProtectedRouteProps {
  children: JSX.Element
}

export default function UnProtectedRoute({
  children,
}: ProtectedRouteProps): JSX.Element | null {
  const { user: currentUser } = useAuth()
  if (currentUser) {
    return <Navigate to="/" />
  }
  return children
}
