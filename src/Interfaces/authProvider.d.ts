import { rolAdminTornado } from '@/mocks/auth'
import { type AuthState } from './auth'

export interface InfoLogin {
  email: string
  password: string
}

export interface InfoSignUp {
  nombres: string
  apellidos: string
  rolId: string
  email: string
  password: string
  confirmPassword: string | undefined
  nit: string
  terms: boolean
}

export interface InfoSignUpBody {
  nombres: string
  apellidos: string
  rolId: string
  email: string
  password: string
  nit: string
}

export interface AuthContextType {
  user: AuthState
  login: (credentials: InfoLogin) => void
  logout: () => void
  signUp: (userData: InfoSignUpBody) => void
  checkingCredentials
}

export const InitialStateSignup: InfoSignUp = {
  nombres: '',
  apellidos: '',
  rolId: rolAdminTornado.value,
  email: '',
  password: '',
  confirmPassword: '',
  nit: Math.random().toString(36).substring(7),
  terms: false
}
