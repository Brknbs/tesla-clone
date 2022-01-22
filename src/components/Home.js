import React, { Fragment } from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
     return (
        <Container>
            <Section 
                title="Model 3"
                description={<Fragment>Order Online for <u>Touchless Delivery</u></Fragment>}
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model Y"
                description={<Fragment>Order Online for <u>Touchless Delivery</u></Fragment>}
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model S"
                description={<Fragment>Order Online for <u>Touchless Delivery</u></Fragment>}
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description={<Fragment>Order Online for <u>Touchless Delivery</u></Fragment>}
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    height: 100vh;
`;
