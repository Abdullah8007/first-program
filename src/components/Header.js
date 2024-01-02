/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
  return (
    <Nav className='d-flex align-items-center justify-content-between p-5'>
      <Logo src="/Images/logo.png" />
      <ClearIcon className='d-lg-none d-sm-inline-block mx-5 button' onClick='hideMenu()' />
      <NavMenu className=' d-sm-none d-lg-flex align-items-center'>
        <a href='./Home.js'>
          <span>Home</span>
        </a>
        <a href='./About.js'>
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
        <a href='/Resume.pdf' target='_blank' rel='noreferrer'>
          <Button type='button'>Resume</Button>
        </a>
      </NavMenu>
      <MenuIcon className='d-lg-none d-sm-inline-block mx-5 button' onClick='showMenu()' />
    </Nav>
  );
};
  
const Nav = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: #ECF0F3;
  box-shadow: 0 10px 10px #c9c9c9;
  z-index: 1;

  @media(max-width: 575px) {
    // height: 60px;
    width: 100%;
  }

  button {
    @media (max-width: 575px) {
      
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media (max-width: 575px) {
    padding-left: 50px;
    // height: 40px;
  }
`;

const NavMenu = styled.div`

  a {
    padding: 0 12px;
    display: flex;
    text-decoration: none;

    Button:hover {
      background-color: #6A994E;
      border: 2px solid #6A994E;
      color: #ECF0F3;
      transition: .3s
    }

    span {
      // font-weight: 600;
      color: #434343;
      letter-spacing: .3px;
      text-decoration: none;
      cursor: pointer;
      font-size: 16px;
      text-transform: uppercase;
    }

    span:hover {
      transition: 0.3s;
      color: #6A994E;
    }
  }

  @media (max-width: 575px) {
    a {
      display: none;
    }
  }
`;

const Button = styled.button`
  padding: 9px 18px;
  color: #6A994E;
  background-color: transparent;
  border: 2px solid #6A994E;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(21 230 76 / 26%);
  font-family: 'Poppins', sans-serif;
`;

export default Header;