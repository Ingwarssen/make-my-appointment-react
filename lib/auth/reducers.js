import { actionTypes } from './actions'

export const initialState = {
  accessToken: '',
  error: null,
  profile: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case actionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

export default reducer
