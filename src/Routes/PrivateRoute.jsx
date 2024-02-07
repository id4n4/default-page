import { useContext, useMemo } from 'react'
import { AuthContext } from '../context/authProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const isAuthenticated = useMemo(() => user.status === 'authenticated', [user.status])
  return isAuthenticated ? children : <Navigate to='/login' />
}
