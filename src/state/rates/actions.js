import * as actionTypes from '../actionTypes';
import apiCall from 'utils/api';

// Standard React Action Creators, using thunk middleware to catch our async call
export const getRates = () => {
    return dispatch => {
        dispatch(getRatesInit());
        apiCall.get()
            .then( response => {
                if( response.data.success === true){
                    dispatch(storeRates(response.data));
                    dispatch(createCurrencies(response.data));
                }else{
                    dispatch(getRatesError(response.data.error.info));
                }

            } )
            .catch( error => {
                dispatch(getRatesError(error))
            } );
    }
}

// Function responsible to create rates with all currencies as sources against each  currencies as destionation
// The result stores directly each combination in redux store.
const createCurrencies = (data) => {

    try {
        const initialPairs = data.quotes;
        const initialSource = data.source;
        const allPairs = {};

        if(  typeof initialPairs == "object" )
            for (let sourceKey in initialPairs){

                const source = initialPairs[sourceKey]
                const currentSourceKey = sourceKey.substring(3);
                allPairs[currentSourceKey] = { } 

                for (let destinationKey in initialPairs){

                    const currentDestionationKey = destinationKey.substring(3)
                    const destination = initialPairs[destinationKey]
                    const pairName = currentSourceKey + currentDestionationKey;
                    const pairRate =  destination / source;

                    allPairs[currentSourceKey][pairName] = pairRate
                }
            }

        return {
            type : actionTypes.CREATE_CURRENCIES,
            pairs : allPairs
        }
    }catch(error){
        console.log(error);
    }
}

//Then below are the actions that does store via reducer
const getRatesInit = () => {
    return {
        type: actionTypes.GET_RATES_REQUEST
    }
}

const storeRates = (data) => {
    return {
        type: actionTypes.GET_RATES_SUCCESS,
        USD: data.quotes
    }
}

const getRatesError = (error) => {
    return {
        type: actionTypes.GET_RATES_ERROR,
        error: error
    }
}
