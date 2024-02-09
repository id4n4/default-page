import { AuthContext } from '@/context/AuthProvider'
import { type FC, useContext, useMemo } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const PublicRoute: FC<Props> = ({ children }) => {
  const context = useContext(AuthContext)
  const isAuthenticated = useMemo(() => context?.user.status === 'authenticated', [context?.user.status])
  return !isAuthenticated ? children : <Navigate to='/' />
}
