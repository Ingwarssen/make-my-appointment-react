import { all, fork } from 'redux-saga/effects'
// import modelsSaga from './models/sagas'
import authSaga from './auth/sagas'

function* rootSaga() {
  yield all([fork(authSaga)])
}

export default rootSaga
