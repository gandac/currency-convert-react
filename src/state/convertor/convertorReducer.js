import * as actionTypes from '../actionTypes';

const initialState = {
    selectedSource : null,
    selectedDestination : null,
    sourceValue: 0,
    destinationValue: 0
}

//The Data is flatten here intentionally as other abstractions were over engineering for 2 fields
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.CONVERTOR_SELECT_SOURCE:
            return {
                ...state,
                selectedSource: action.source
            }
        case actionTypes.CONVERTOR_SELECT_DESTINATION:
            return {
                ...state,
                selectedDestination: action.destination
            }
        default:
            return state;
    }
}

export default reducer;