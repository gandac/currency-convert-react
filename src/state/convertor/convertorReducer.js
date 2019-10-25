import * as actionTypes from '../actionTypes';
import {DEFAULT_SOURCE,DEFAULT_DESTINATION} from 'state/constants';

const initialState = {
    selectedSource : DEFAULT_SOURCE,
    selectedDestination : DEFAULT_DESTINATION,
    sourceValue: 0,
    destinationValue: 0
}

//The Data is flatten here intentionally as other abstractions were over engineering for 2 fields
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.CONVERTOR_SELECT_SOURCE:
            return {
                ...state,
                selectedSource: action.val
            }
        case actionTypes.CONVERTOR_SELECT_DESTINATION:
            return {
                ...state,
                selectedDestination: action.val
            }
        case actionTypes.CONVERTOR_INPUT_SOURCE:
            return {
                ...state,
                sourceValue: action.val,
                destinationValue: action.foreignVal
            }
        case actionTypes.CONVERTOR_INPUT_DESTINATION:
            return {
                ...state,
                sourceValue: action.foreignVal,
                destinationValue: action.val
            }
        default:
            return state;
    }
}

export default reducer;