import React from 'react';
import {Dropdown} from 'semantic-ui-react';

const selectCurrency = (props) => {

    let selectedCountryObject = false;
    if(props.value && props.pairsInfo){
        selectedCountryObject = props.pairsInfo.filter(el=> el.key == props.value)[0];
    }
    let selectedFlag = selectedCountryObject ? selectedCountryObject.image.flag : false;

    return (
        <div className="selectCountry">

                {selectedFlag ? <img className="selectedFlagImage" src={selectedFlag} /> : null}
                <Dropdown
                    placeholder='Select Currency'
                    // fluid
                     //icon={ selectedCountryObject ? selectedCountryObject.image.flag : null }
                    value={props.value}
                    options={props.pairsInfo}
                    onChange = {props.onChange}
                /> 
               
        </div>

    )
}

export default selectCurrency;