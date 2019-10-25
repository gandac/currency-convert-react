import React from 'react';
import {connect} from 'react-redux';
import {Container, Grid} from 'semantic-ui-react';
import SelectCurrency from './SelectCurrency';
import InputConversionBox from './InputConversionBox';
import * as actions from 'state/convertor/actions'
import {
    CONVERTOR_SELECT_SOURCE ,
    CONVERTOR_SELECT_DESTINATION,
    CONVERTOR_INPUT_SOURCE,
    CONVERTOR_INPUT_DESTINATION
     } from 'state/actionTypes'
import './Convertor.scss';

class Convertor extends React.Component { 

    handleSelectCurrency = (e, { value  },type)  => {
        this.props.changeCurrency(type,value);
    }

    handleInputChange = (e,type)  => {
        // this.props.changeCurrency(type,value);
        const value = e.target.value;
       
        this.props.changeAmount(type,value);
    }

    render(){

        return (<Container className="Convertor">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <SelectCurrency 
                        pairsInfo = {this.props.pairsInfo}
                        value={this.props.sourceCur}
                        onChange={(e,obj) => this.handleSelectCurrency(e,obj,CONVERTOR_SELECT_SOURCE)}
                        />
                        <InputConversionBox
                            {...this.props}
                            type="sourceVal"
                            sourceCur = { this.props.sourceCur }
                            destCur = { this.props.destCur }
                            value= { this.props.sourceVal }
                            onChange = {(e) => this.handleInputChange(e , CONVERTOR_INPUT_SOURCE)}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SelectCurrency 
                        {...this.props}
                        pairsInfo = { this.props.pairsInfo }
                        value={ this.props.destCur }
                        onChange={(e,obj) => this.handleSelectCurrency(e,obj,CONVERTOR_SELECT_DESTINATION)}
                        />
                        <InputConversionBox 
                            {...this.props}
                            type="destVal"
                            sourceCur = {this.props.destCur}
                            destCur = {this.props.sourceCur}
                            value={this.props.destVal}
                            onChange = {(e) => this.handleInputChange(e , CONVERTOR_INPUT_DESTINATION)}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sourceCur : state.convertor.selectedSource,
        destCur : state.convertor.selectedDestination,
        sourceVal : state.convertor.sourceValue,
        destVal: state.convertor.destinationValue
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency : (type,val) => dispatch(actions.changeCurrency(type,val)),
        changeAmount : (type,val) => dispatch(actions.changeAmount(type,val))
    }
} 
export default connect( mapStateToProps, mapDispatchToProps )(Convertor);