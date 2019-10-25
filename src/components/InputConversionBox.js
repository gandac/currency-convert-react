import React from 'react';
import { AST_Destructuring } from 'terser';

const inputConversionBox =  (props) => {

    let infoObject = false;
    if( props.pairsInfo ){
        infoObject = props.pairsInfo.filter(el=> el.key === props.sourceCur)[0];
    }
    const value = props.value ? props.value : '';
    
    return (
        <div className="conversionBox">
        <span className="currencySymbol">{infoObject.symbol}</span>
        <input type="number" onChange={props.onChange} value={value} placeholder="0" className="inputConvert"/>
        </div>
    );
}

export default inputConversionBox;