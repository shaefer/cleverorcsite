import { combineReducers } from 'redux'

import * as Actions from '../actions'

const config = (state = { initialState: "basicConfig"}, action) => {
  switch (action.type) {
    case Actions.SET_SLIDER_INDEX:
      console.log("REDUCER SET_SLIDER_INDEX")
      return {
        ...state,
        slideIndex: action.index,
      }
    default:
      return state
  }
}

const layout = (state = { initialLayout: "basicLayout"}, action) => {
  switch (action.type) {
    default:
      return state
  }
}



const rootReducer = combineReducers({
  config, layout
})

export default rootReducer