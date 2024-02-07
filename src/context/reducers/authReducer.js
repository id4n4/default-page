export const cartInitialState = {
  status: 'checking', // 'authenticated','not-authenticated',
  info: {},
  errorMessage: undefined
}
export const authReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'LOGIN':
      return {
        ...state,
        status: 'authenticated',
        info: actionPayload,
        errorMessage: undefined
      }
    case 'LOGOUT':
      return {
        ...state,
        status: 'not-authenticated',
        info: {},
        errorMessage: undefined
      }
    case 'ERROR':
      return {
        ...state,
        status: 'not-authenticated',
        info: {},
        errorMessage: actionPayload
      }
    case 'CHECKING':
      return {
        ...state,
        status: 'checking',
        info: {},
        errorMessage: undefined
      }
  }
  return state
}
