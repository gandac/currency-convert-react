import React from 'react';

const ConvertionRate =  (props) => {

    const pairName = props.sourceCur + props.destCur;
    let pairValue,fixedLabel = false;

    if( props.pairs ){
        pairValue = props.pairs[props.sourceCur][pairName].toFixed(5);
    }

    fixedLabel =  `1 ${props.sourceCur} = ${pairValue} ${props.destCur} `;
    const value = props.value ? props.value : '';
    
    return ( <div>{fixedLabel}</div> );
}

export default ConvertionRate;