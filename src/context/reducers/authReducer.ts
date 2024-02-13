import { AUTH_STATUS, AUTH_TYPE_STATE } from '@/constants/authConstants'
import { type AuthAction, type AuthState } from '@/Interfaces/authInterface'

export const AuthInitialState: AuthState = {
  status: AUTH_STATUS.checking, // 'authenticated','not-authenticated',
  info: {},
  errorMessage: undefined
}
export const authReducer = (state: AuthState, action: AuthAction) => {
  const { type: actionType } = action
  switch (actionType) {
    case AUTH_TYPE_STATE.login:
      return {
        ...state,
        status: AUTH_STATUS.authenticated,
        info: action.payload,
        errorMessage: undefined
      }
    case AUTH_TYPE_STATE.logout:
      return {
        ...state,
        status: AUTH_STATUS.notAuthenticated,
        info: {},
        errorMessage: undefined
      }
    case AUTH_TYPE_STATE.error:
      return {
        ...state,
        status: AUTH_STATUS.notAuthenticated,
        info: {},
        errorMessage: action.payload
      }
    case AUTH_TYPE_STATE.checking:
      return {
        ...state,
        status: AUTH_STATUS.checking,
        info: {},
        errorMessage: undefined
      }
    case AUTH_TYPE_STATE.clearError:
      return {
        ...state,
        errorMessage: undefined
      }
  }
  return state
}
