/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

function Header() {
 return (
    <Nav>
      <Logo src="/Images/logo.png" />
      
      <NavMenu>
        <a href='./Home.js'>
          <span>Home</span>
        </a>
        <a href=''>
          <span>About</span>
        </a>
        <a href=''>
          <span>Portfolio</span>
        </a>
        <a href=''>
          <span>Contact</span>
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
 justify-content: space-around;
 font-size: 20px;
`;

const Logo = styled.img`
  width: 10%;
  height: auto;
  padding: 0 35px
`;

const NavMenu = styled.div`
  display: flex;

  a {
    padding: 0 10px;

    span {
      font-weight: 500;
      color: 14213d;
      letter-spacing: .5px
      text-decoration: none;

    }
  }
`;

export default Header;