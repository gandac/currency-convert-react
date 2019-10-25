import React from 'react';
import { Container } from 'semantic-ui-react';
import GridContainer from '../ui/GridContainer';
import  './Layout.scss';

//Tiny High Order Component use for wrap all the pages with FlatBond Clothing
//apply styles in Layout scss under .mainContent .page
const Layout = (props) => {
    return (
        <Container >
            <main className={"mainContent"}>
                <GridContainer >
                    {props.children}
                </GridContainer>
            </main>
        </Container>
    )
}

export default Layout;