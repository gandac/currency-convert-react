

import {createStore, applyMiddleware , compose , combineReducers} from 'redux';
import ratesReducer from './rates/ratesReducer'; 
import convertorReducer from './convertor/convertorReducer';
import infoReducer from './info/infoReducer';
import thunk from 'redux-thunk';

//Enable Redux in Dev-Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create the Store of Truth
const rootReducer = combineReducers({
    rates: ratesReducer,
    convertor: convertorReducer,
    info: infoReducer
})

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

