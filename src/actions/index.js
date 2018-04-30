export const SOME_ACTION = 'SOME_ACTION'
export const SET_SLIDER_INDEX = 'SET_SLIDER_INDEX'

export const someAction = (incomingData) => ({
    type: SOME_ACTION,
    data: incomingData
  });

export const setSliderIndex = (index) => ({
  type: SET_SLIDER_INDEX,
  index: index
});