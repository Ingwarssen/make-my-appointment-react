import { combineReducers } from 'redux'

import models from './models/reducers'
import auth from './auth/reducers'

export default combineReducers({
  models,
  auth,
})
