import Router from 'next/router'
import { put, takeLatest, fork, all } from 'redux-saga/effects'
import ApiService from '../ApiService'
import Cookies from 'utils/cookies'
import { REST_METHOD } from 'utils/const'

import { actionTypes, loginError } from './actions'

const apiService = new ApiService('auth')
const { apiActions } = apiService

function* fbLogin({ accessToken }) {
  let response
  try {
    response = yield apiService.call({
      action: apiActions.facebook,
      method: REST_METHOD.post,
      data: { access_token: accessToken },
    })
  } catch (err) {
    yield put(loginError(err))
    return
  }

  const { jwtToken } = response
  yield put({ type: actionTypes.SET_JWT_TOKEN, jwtToken })
  Cookies.setItem('authToken', jwtToken)

  Router.push({
    pathname: '/',
  })
}

function* fbLoginSaga() {
  yield takeLatest(actionTypes.FACEBOOK_LOGIN, fbLogin)
}

function logout() {
  Cookies.removeItem('authToken')
  Router.push({
    pathname: '/',
  })
}

function* logoutSaga() {
  yield takeLatest(actionTypes.LOGOUT, logout)
}

export default function* root() {
  yield all([fork(fbLoginSaga), fork(logoutSaga)])
}
