/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

function Header() {
 return (
    <Nav>
      <Logo src="/Images/logo.png" />
      <NavMenu>
        <a>
          <span>Home</span>
        </a>
      </NavMenu>
    </Nav>
 );
};

const Nav = styled.div`
 height: 70px;
 background: #FCA311;
 display: flex;
 align-items: center;
 justify-content: space evenly;
 font-size: 24px;
`;

const Logo = styled.img`
  width: 10%;
  height: auto;
  padding: 0 35px
`;

const NavMenu = styled.div`

`;

export default Header;