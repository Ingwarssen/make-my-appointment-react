import { put, takeLatest } from 'redux-saga/effects'
import ApiService from '../ApiService'

import { actionTypes, loadModelsSuccess, loadModelsError } from './actions'

const apiService = new ApiService('models')
const { apiMethods } = apiService

function* loadModelsSaga() {
  let models
  try {
    models = yield apiService.call({
      method: apiMethods.get,
    })
  } catch (err) {
    yield put(loadModelsError(err))
  }

  yield put(loadModelsSuccess(models))
}

export default takeLatest(actionTypes.LOAD_MODELS, loadModelsSaga)
