import React from 'react';
import flatfairLogo from 'assets/logo.svg';
import {Grid,Container} from 'semantic-ui-react';

const Logo = (props) => {
    return <img src={flatfairLogo} alt="Love Home Swap Convert Currency App!"/>
}

export default (props) => {
    return (
        <header>
            <Container text>
                <Grid padded >
                    <Grid.Column>
                            <Logo />
                    </Grid.Column>
                </Grid>
            </Container>
        </header>
    )
}