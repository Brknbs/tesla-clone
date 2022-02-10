import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const onMenuButtonClick = () => {
        setIsSideMenuOpen(true);
    };

    const onCloseButtonClick = () => {
        setIsSideMenuOpen(false);
    };

    return (
        <Container>
            <Logo href="#">
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <HideOnMobile>
                <Menu>
                    <a href="#model-s">Model S</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model X</a>
                    <a href="#">Model Y</a>
                    <a href="#">Solar Roof</a>
                    <a href="#">Solar Panel</a>
                </Menu>
            </HideOnMobile>
            <RightMenu>
                <HideOnMobile>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                </HideOnMobile>
                <a id="menu-button" href="#" onClick={onMenuButtonClick}>Menu</a>
            </RightMenu>
            <SideMenu show={isSideMenuOpen}>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-In</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadster</a></li>
                <li><a href="">Semi</a></li>
                <li><a href="">Charging</a></li>
                <li><a href="">Powerwall</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Investor Relations</a></li>
                <CloseButton style={{ fontSize: 40, transition: 'background-color 0.2s ease' }} onClick={onCloseButtonClick} />
            </SideMenu>
        </Container>
    );
};  
 
export default Header;

const Container = styled.div`
    position: fixed;
    min-height: 60px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    justify-content: space-between;
    z-index: 5;
`;

const Logo = styled.a`
    min-inline-size: 240px;
    text-align: left;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;

    a {
        padding: 8px 15px;
        font-size: 0.9rem;
        white-space: nowrap;
        border-radius: 15px;
    }
`;

const RightMenu = styled(Menu)`
    #menu-button {
        @media (max-width: 1200px) {
            background: linear-gradient(to right, #82A4BB, #A9BDCB);
        }
    }
`;

const HideOnMobile = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`;

const SideMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 330px;
    z-index: 10;
    list-style: none;
    padding: 100px 50px;
    text-align: left;
    font-weight: 600;
    box-shadow: -2px 0px 15px rgba(0, 0, 0, 0.2);
    transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
    opacity: ${(props) => props.show ? '1' : '0'};
    transition: all 0.5s ease;

    li {
        margin-bottom: 25px;
    }
`;

const CloseButton = styled(CloseIcon)`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    background-color: transparent;
    border-radius: 100%;
    padding: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;
