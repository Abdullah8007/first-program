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
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-wrap: wrap;
`;

const Logo = styled.img`
  width: auto;
  height: 28%;
  padding: 0 35px
`;

const NavMenu = styled.div`
  display: flex;

  a {
    padding: 0 10px;
    display: inline;

    span {
      font-weight: 500;
      color: #2F97C1;
      letter-spacing: .5px;
      text-decoration: none;
      cursor: pointer;
      font-size: 18px;
    }

    span:hover {
      transition: 0.5s;
      color: #15E6CD;
    }
  }

  @media (max-width: 1024px) {
    a{
      padding: 0 6px;
    }
  }
`;

export default Header;