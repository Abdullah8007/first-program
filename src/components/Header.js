/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="/Images/logo.png" />
      <NavMenu>
        <a href=''>
          <span>Home</span>
        </a>
        <a href=''>
          <span>About</span>
        </a>
        <a href=''>
          <span>Skills</span>
        </a>
        <a href=''>
          <span>Projects</span>
        </a>
        <a href=''>
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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: #ECF0F3;
  box-shadow: 0 10px 10px #c9c9c9;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  padding-left: 75px;
`;

const NavMenu = styled.div`
  padding-right: 60px;  

  a {
    padding: 0 20px;
    display: inline;
    text-decoration: none;

    Button:hover {
      background-color: #15E6CD;
      border: 2px solid #15E6CD;
      color: #fff;
      transition: .3s
    }

    span {
      font-weight: 500;
      color: #2F97C1;
      letter-spacing: .3px;
      text-decoration: none;
      // cursor: pointer;
      font-size: 18px;
      text-transform: uppercase;
    }

    span:hover {
      transition: 0.3s;
      // color: #15E6CD;
      text-shadow: 7px 5px 1px #15E6CD;
    }
  }

  @media (max-width: 1024px) {
    a{
      padding: 0 6px;
    }
  }
`;

const Button = styled.button`
  padding: 11px 18px;
  color: #2F97C1;
  background-color: transparent;
  border: 2px solid #2F97C1;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(21, 230, 205, 0.26);
  font-family: 'Courier New', Courier, monospace;
`;

export default Header;