import React from 'react';
import { AST_Destructuring } from 'terser';

const inputConversionBox =  (props) => {

    const pairName = props.sourceCur + props.destCur;
    let pairValue,fixedLabel,infoObject = false;
    if( props.pairs && props.pairsInfo ){
        infoObject = props.pairsInfo.filter(el=> el.key === props.sourceCur)[0];
        pairValue = props.pairs[props.sourceCur][pairName].toFixed(5);
    }
    fixedLabel =  `1 ${props.sourceCur} = ${pairValue} ${props.destCur} `;
    const value = props.value ? props.value : '';
    return (
    <div className="conversionBox">
       <div>{fixedLabel}</div>
       <span>{infoObject.symbol}</span>
       <span><input type="number" onChange={props.onChange} value={value} placeholder="0"/></span>
    </div>
    );
}

export default inputConversionBox;