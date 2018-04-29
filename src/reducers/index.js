import { combineReducers } from 'redux'

import * as Actions from '../actions'

const config = (state = { initialState: "basicConfig"}, action) => {
  switch (action.type) {
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

const carouselControls = (state = { currentItem: 0 }, action) => {
  switch (action.type) {
    case Actions.CONTACT_SELECTED:
      console.log("Controls handling contact selected")
      const newState = {
        currentItem: action.itemIndex,
      };
      console.log(newState)
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  config, layout, carouselControls
})

export default rootReducer