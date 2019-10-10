import { all } from 'redux-saga/effects'
import modelsSaga from './models/sagas'
import authSaga from './auth/sagas'

function* rootSaga() {
  yield all([modelsSaga, authSaga])
}

export default rootSaga
