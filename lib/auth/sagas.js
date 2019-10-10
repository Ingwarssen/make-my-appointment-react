import { put, takeLatest } from 'redux-saga/effects'
import ApiService from '../ApiService'

import { REST_METHOD } from 'utils/const'

import { actionTypes, setUserProfile, loginError } from './actions'

const apiService = new ApiService('auth')
const { apiActions } = apiService

function* fbLogin() {
  let response
  console.log('saga run')
  try {
    response = yield apiService.call({
      action: apiActions.facebook,
      method: REST_METHOD.post,
    })
  } catch (err) {
    console.log('gor error')
    yield put(loginError(err))
    return
  }

  console.log('got answer', response)
  yield put(setUserProfile, response)
}

export default takeLatest(actionTypes.SET_FB_ACCESS_TOKEN, fbLogin)
