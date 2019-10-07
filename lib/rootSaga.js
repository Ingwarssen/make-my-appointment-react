import { all } from 'redux-saga/effects'
import modelsSaga from './models/sagas'

function* rootSaga() {
  yield all([modelsSaga])
}

export default rootSaga
