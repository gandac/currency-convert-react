import * as actionTypes from '../actionTypes';

const initialState = {
    USD : null,
    pairs: null,
    loading: false,
}

//The Data is flatten here intentionally as other abstractions were over engineering for 2 fields
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.GET_RATES_REQUEST:
                return {
                    ...state,
                    USD: action.USD,
                    loading: true
                }
        case actionTypes.GET_RATES_SUCCESS:
            return {
                ...state,
                USD: action.USD,
                loading: false
            }
        case actionTypes.GET_RATES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.CREATE_CURRENCIES:
            return {
                ...state,
                pairs: action.pairs
            }
        default:
            return state;
    }
}

export default reducer;