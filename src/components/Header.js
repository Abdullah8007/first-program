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
          <span>Skills</span>
        </a>
        <a>
          <span>Projects</span>
        </a>
        <a>
          <span>Contact</span>
        </a>
        <a>
        <Button type='button'>Resume</Button>
        </a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 160px;
  padding-top: 10px
`;

const Logo = styled.img`
  height: 50px;
`;

const NavMenu = styled.div`
  display: flex;

  a {
    padding: 0 20px;
    display: inline;

    Button:hover {
      background-color: #15E6CD;
      border: 2px solid #15E6CD;
      color: #fff;
      transition: .5s
    }

    span {
      font-weight: 500;
      color: #2F97C1;
      letter-spacing: .5px;
      text-decoration: none;
      cursor: pointer;
      font-size: 16px;
      text-transform: uppercase;
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

const Button = styled.button`
  padding: 12px 20px;
  color: #2F97C1;
  background-color: transparent;
  border: 2px solid #2F97C1;
  border-radius: 5px;
  transform: translateY(-11px);
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  
`;

export default Header;