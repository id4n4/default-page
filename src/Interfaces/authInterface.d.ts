import { type AUTH_TYPE_STATE, type AUTH_STATUS } from '@/constants/authConstants'

export interface InfoUser {
  id: string
  displayName: string
  email: string
  company: string
  companyId: string
  nombres: string
}

export interface AuthState {
  status: AUTH_STATUS
  info: InfoUser | Record<string, unknown>
  errorMessage: string | undefined
}

export type AuthAction =
  | { type: AUTH_TYPE_STATE.login, payload: InfoUser }
  | { type: AUTH_TYPE_STATE.logout }
  | { type: AUTH_TYPE_STATE.error, payload: string }
  | { type: AUTH_TYPE_STATE.checking }
