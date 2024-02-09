import { type InfoSignUp } from '@/Interfaces/authProvider'
import { rolAdminTornado } from '@/mocks/auth'

export enum AUTH_STATUS {
  checking = 'checking',
  authenticated = 'authenticated',
  notAuthenticated = 'not-authenticated'
}

export enum AUTH_TYPE_STATE {
  login = 'LOGIN',
  logout = 'LOGOUT',
  error = 'ERROR',
  checking = 'CHECKING'
}

export enum OptionsMenuType {
  item = 'item',
  subMenu = 'submenu'
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
