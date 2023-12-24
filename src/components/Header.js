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
        <a>
          <span>About</span>
        </a>
        <a>
          <span>Portfolio</span>
        </a>
        <a>
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
`;

const Logo = styled.img`
  width: auto;
  height: 20%;
  padding: 0 35px
`;

const NavMenu = styled.div`
  display: flex;

  a {
    padding: 0 10px;

    span {
      font-weight: 500;
      color: midnightblue;
      letter-spacing: .5px;
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
    }
  }

  @media (max-width: 1024px) {
    a{
      padding: 0 6px;

      span{
        font-size: 18px;
      }
    }
  }
`;

export default Header;