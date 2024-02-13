import { type FC, createContext, useReducer, type ReactNode } from 'react'
import { authReducer, AuthInitialState } from './reducers/authReducer'
import { axiosInstance } from '../api'
import {
  type InfoLogin,
  type AuthContextType,
  type InfoSignUpBody
} from '../Interfaces/authProvider'
import { AUTH_TYPE_STATE } from '@/constants/authConstants'

const API_LOGIN = '/auth/login'
const API_SIGN_UP = '/auth/signup'
const API_CHECK = '/auth/renew'

export interface Props {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AuthInitialState)

  const login = async ({ email, password }: InfoLogin) => {
    dispatch({ type: AUTH_TYPE_STATE.checking })
    try {
      const { data } = await axiosInstance.post(API_LOGIN, {
        email,
        password
      })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem(
        'token-init-date',
        new Date().getTime().toString()
      )
      dispatch({
        type: AUTH_TYPE_STATE.login,
        payload: {
          id: data.id,
          displayName: data.displayName,
          email: data.email,
          company: data.company,
          companyId: data.companyId,
          nombres: data.nombres
        }
      })
    } catch (error: any) {
      console.error(error)
      dispatch({
        type: AUTH_TYPE_STATE.error,
        payload: error.response?.data?.message
      })
      setTimeout(() => {
        logout()
      }, 5000)
    }
  }

  const signUp = async (userData: InfoSignUpBody) => {
    dispatch({ type: AUTH_TYPE_STATE.checking })
    try {
      const { data } = await axiosInstance.post(API_SIGN_UP, userData)
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem(
        'token-init-date',
        new Date().getTime().toString()
      )
      dispatch({
        type: AUTH_TYPE_STATE.login,
        payload: {
          id: data.id,
          displayName: data.displayName,
          email: data.email,
          company: data.company,
          companyId: data.companyId,
          nombres: data.nombres
        }
      })
    } catch (error: any) {
      dispatch({
        type: AUTH_TYPE_STATE.error,
        payload: error.response?.data?.message
      })
      setTimeout(() => {
        dispatch({ type: AUTH_TYPE_STATE.checking })
      }, 5000)
    }
  }

  const checkingCredentials = async () => {
    const token: string | null = window.localStorage.getItem('token')
    if (token === null) {
      logout()
      return
    }

    try {
      const { data } = await axiosInstance.get(API_CHECK)
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem(
        'token-init-date',
        new Date().getTime().toString()
      )
      dispatch({
        type: AUTH_TYPE_STATE.login,
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
    dispatch({ type: AUTH_TYPE_STATE.logout })
  }
  const clearError = () => {
    dispatch({ type: AUTH_TYPE_STATE.clearError })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state,
        login,
        signUp,
        checkingCredentials,
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
