import React from 'react';
import {connect} from 'react-redux';
import {Segment,Divider,Container,Grid,Button} from 'semantic-ui-react';
import Preloader from 'components/ui/Preloader';
import * as actions from 'state/convertor/actions';
import {getRates} from 'state/rates/actions';
import {getInfo} from 'state/info/actions';
import Convertor from 'components/Convertor';
import './page.scss';

// The Create [ main ] Page view, implementing two react lifecycle methods

class ConvertorPage extends React.Component{
    
    componentDidMount(){
        this.initPage();
    }

    // Will reset each reducer and ask for the initial state. 
    initPage = () => {
        this.props.getRates();
        this.props.getInfo();
    }

    render(){

        const pairsInfo =   this.props.pairs && 
                            this.props.info &&
            Object.keys(this.props.pairs).map(el=>{
                    return {
                        ...this.props.info[el]
                    }
            }).filter(el => {
                return el.key
            });


        
        return (
            this.props.loading ?  <Container text> <Preloader /> </Container>:
            <Container text className="ConvertorPage page">
                <Grid>
                    <Grid.Row>
                        <Grid.Column >
                            <h2>Currency converter</h2>
                            <Convertor pairsInfo={pairsInfo} pairs={this.props.pairs} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

//Connect Redux State to RETRIEVE/STORE info/actions as properties from above [props]
const mapStateToProps = state => {
    return {
        info  : state.info.countries,
        pairs : state.rates.pairs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRates : () => dispatch(getRates()),
        getInfo : () => dispatch(getInfo()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ConvertorPage);