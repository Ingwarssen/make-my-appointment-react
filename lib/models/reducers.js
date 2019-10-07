import { actionTypes } from './actions'

export const initialState = {
  data: null,
  error: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MODELS_SUCCESS:
      return {
        ...state,
        data: action.models,
      }

    case actionTypes.LOAD_MODELS_ERROR:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

export default reducer
