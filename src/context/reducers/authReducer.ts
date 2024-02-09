import { AUTH_STATUS } from '@/constants/authConstants'
import { type AuthAction, type AuthState } from '@/Interfaces/authInterface'

export const AuthInitialState: AuthState = {
  status: AUTH_STATUS.checking, // 'authenticated','not-authenticated',
  info: {},
  errorMessage: undefined
}
export const authReducer = (state: AuthState, action: AuthAction) => {
  const { type: actionType } = action
  switch (actionType) {
    case 'LOGIN':
      return {
        ...state,
        status: AUTH_STATUS.authenticated,
        info: action.payload,
        errorMessage: undefined
      }
    case 'LOGOUT':
      return {
        ...state,
        status: AUTH_STATUS.notAuthenticated,
        info: {},
        errorMessage: undefined
      }
    case 'ERROR':
      return {
        ...state,
        status: AUTH_STATUS.notAuthenticated,
        info: {},
        errorMessage: action.payload
      }
    case 'CHECKING':
      return {
        ...state,
        status: AUTH_STATUS.checking,
        info: {},
        errorMessage: undefined
      }
  }
  return state
}
