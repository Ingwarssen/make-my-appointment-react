export const actionTypes = {
  LOAD_MODELS: 'LOAD_MODELS',
  LOAD_MODELS_SUCCESS: 'LOAD_MODELS_SUCCESS',
  LOAD_MODELS_ERROR: 'LOAD_MODELS_ERROR',
}

export function loadModels() {
  return { type: actionTypes.LOAD_MODELS }
}

export function loadModelsSuccess(models) {
  return {
    type: actionTypes.LOAD_MODELS_SUCCESS,
    models,
  }
}

export function loadModelsError(error) {
  return {
    type: actionTypes.LOAD_MODELS_ERROR,
    error,
  }
}
