import React from 'react';
import styled from 'styled-components';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    );
};

export default Section;

const Wrap = styled.div`
    width: 100%;
    height: 100vh; 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 5px;
        font-weight: 600;
    }

    p {
        font-size: 0.9rem;
    }

    u {
        cursor: pointer;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    border-radius: 100px;
    cursor: pointer;
    margin: 0 12px;
    font-weight: 600;

    @media (max-width: 768px) {
        margin-top: 15px;
        width: 90%;
    }
`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: #000;
`;

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 2s;
`;

const Buttons = styled.div`
    margin-bottom: 20px;
`;
