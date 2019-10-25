import * as actionTypes from '../actionTypes';
import apiCall from 'utils/api';
import {INFO_API_URL} from '../constants';

// Standard React Action Creators, using thunk middleware to catch our async call
export const getInfo = () => {
    return dispatch => {
        dispatch(getInfoInit());
        apiCall.get(INFO_API_URL)
            .then( response => {
                const infoPerCurrency = mapCurrencyPerCountry(response.data)
                dispatch(storeInfo(infoPerCurrency));
            } )
            .catch( error => {
                console.log(error);
                dispatch(getInfoError(error))
            } );
    }
}
// Flatten info from external api to and map it to currency name
// !!! Known bug, EUR will reduce to the last EUR country [ Spain] thus loading Spain flag
const mapCurrencyPerCountry = (data) => {
    const response = data.reduce((acc, cur) => ({
         ...acc, 
         [cur.currencies[0].code]: {
             key: cur.currencies[0].code,
             value: cur.currencies[0].code,
             text: cur.currencies[0].name,
             flag: cur.alpha2Code.toLowerCase(),
             image: {
                avatar: false,
                flag: cur.flag
             },
             countryName : cur.name,
             symbol : cur.currencies[0].symbol,
         }
        }), {});
    return response; 
}



//Then below are the actions that does store via reducer
const getInfoInit = () => {
    return {
        type: actionTypes.GET_INFO_REQUEST
    }
}

const storeInfo = (data) => {
    return {
        type: actionTypes.GET_INFO_SUCCESS,
        data: data
    }
}

const getInfoError = (error) => {
    return {
        type: actionTypes.GET_INFO_ERROR,
        error: error
    }
}
