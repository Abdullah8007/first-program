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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 100px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 0 20px;
    display: inline;

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
      cursor: pointer;
      font-size: 18px;
      text-transform: uppercase;
      // text-shadow: 5px 5px 10px rgba(47, 151, 193, 0.43);
    }

    span:hover {
      transition: 0.3s;
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
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 5px 5px 10px rgba(21, 230, 205, 0.26);
  font-family: 'Courier New', Courier, monospace;
`;

export default Header;