import { createContext, useReducer } from 'react'
import { authReducer, cartInitialState } from './reducers/authReducer'
import { axiosInstance } from '../api'

const API_LOGIN = '/auth/login'
const API_SIGN_UP = '/auth/signup'
const API_CHECK = '/auth/renew'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [state, dispatch] = useReducer(authReducer, cartInitialState)

  const login = async ({ email, password }) => {
    dispatch({ type: 'CHECKING' })
    try {
      const { data } = await axiosInstance.post(API_LOGIN, {
        email,
        password
      })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch({
        type: 'LOGIN',
        payload: {
          id: data.id,
          displayName: data.displayName,
          email: data.email,
          company: data.company,
          companyId: data.companyId,
          nombres: data.nombres
        }
      })
    } catch (error) {
      console.error(error)
      dispatch({ type: 'ERROR', payload: error.response?.data?.message })
      setTimeout(() => {
        logout()
      }, 5000)
    }
  }
  const singUp = async (userData) => {
    dispatch({ type: 'CHECKING' })
    try {
      const { data } = await axiosInstance.post(API_SIGN_UP, userData)
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch({
        type: 'LOGIN',
        payload: {
          id: data.id,
          displayName: data.displayName,
          email: data.email,
          company: data.company,
          companyId: data.companyId,
          nombres: data.nombres
        }
      })
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.response?.data?.message
      })
      setTimeout(() => {
        dispatch({ type: 'LOGOUT' })
      }, 5000)
    }
  }
  const checkingCredentials = async () => {
    const token = window.localStorage.getItem('token')
    if (!token) return logout()

    try {
      const { data } = await axiosInstance.get(API_CHECK)
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch({
        type: 'LOGIN',
        payload: {
          id: data.id,
          displayName: data.displayName,
          email: data.email,
          company: data.company,
          companyId: data.companyId,
          nombres: data.nombres
        }
      })
    } catch (error) {
      window.localStorage.clear()
      logout()
    }
  }
  const logout = () => {
    window.localStorage.clear()
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state,
        login,
        logout,
        singUp,
        checkingCredentials
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
