import Keys from '../models/Keys'
import {setSliderIndex} from '../actions'

export const keyPressHandler = (e) => {
    return (dispatch, getState) => {
        const currentState = getState();
        switch(e.which) {
            case Keys.LEFT:
            break;
    
            case Keys.UP:
            break;
    
            case Keys.RIGHT:
            break;
    
            case Keys.DOWN:
            break;

            case Keys.D:
            break;

            case Keys.U:
            break;

            default: return; // exit this handler for other keys
        }
        //e.preventDefault(); // prevent the default action (scroll / move caret)
    }
};

export const slideItemSelectedHandler = (e, idx) => {
    return (dispatch, getState) => {
        dispatch(setSliderIndex(idx));
    }
}