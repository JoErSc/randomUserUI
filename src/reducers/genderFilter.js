import { SHOW_ALL, SET_GENDER_FILTER } from '../constants/ActionTypes'

const genderFilter = (state = SHOW_ALL, action) => {

  switch (action.type) {
    case SET_GENDER_FILTER:      
      return action.filter
    default:
      console.log('state', state)
      return state
  }
}

export default genderFilter
