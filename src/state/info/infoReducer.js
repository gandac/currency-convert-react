import * as actionTypes from '../actionTypes';

const initialState = {
    countries : null,
    loading: false,
}

//The Data is flatten here intentionally as other abstractions were over engineering for 2 fields
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.GET_INFO_REQUEST:
                return {
                    ...state,
                    loading: true
                }
        case actionTypes.GET_INFO_SUCCESS:
            return {
                ...state,
                countries: action.data,
                loading: false
            }
        case actionTypes.GET_INFO_ERROR:
                return {
                    ...state,
                    error: action.error,
                    loading: false
                }
        default:
            return state;
    }
}

export default reducer;