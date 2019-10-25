import * as actionTypes from '../actionTypes';

export const changeCurrency = (type , val) => {
    return {
        type: type,
        val: val
    }
}

export const changeAmount = (type , value) => {

    return (dispatch , getState) => {
        const state = getState();
        if(value === ""){
            // dispatch(saveAmounts(type , ""));
        }
        const val = Number(value);
   
        const currentPairName = state.convertor.selectedSource + state.convertor.selectedDestination;
        const currentPairRate = state.rates.pairs[state.convertor.selectedSource][currentPairName];
        let foreignVal;
        if( type === actionTypes.CONVERTOR_INPUT_SOURCE){
            foreignVal = Number((val * currentPairRate).toFixed(2));
        }else if( type === actionTypes.CONVERTOR_INPUT_DESTINATION){
            foreignVal = Number((val / currentPairRate).toFixed(2));
        }
 
        dispatch(saveAmounts(type , val, foreignVal ) );
    }
 
}

const saveAmounts = (type , val , foreignVal = false) => {
    const returnObj = {
        type: type,
        val: val,
    }
    if(foreignVal) {
        returnObj.foreignVal = foreignVal;
    }
    return returnObj

}