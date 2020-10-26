// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit'

import genderFilter from './genderFilter'

export default combineReducers({
  filter: genderFilter
})
