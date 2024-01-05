/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    // '<Container className='container-fliud'>'

    <Nav className=''>
      <SubContainer className='container'>
        <Logo src="/Images/logo.png" />
        <ClearIcon className='d-lg-none d-sm-inline-block mx-5 button' />
        <NavMenu className=''>
          <Link to="home" spy={true} smooth={true} duration={100}>
            <a>
              <span>Home</span>
            </a>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={100}>
            <a>
              <span>About</span>
            </a>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={100}>
            <a>
              <span>Skills</span>
            </a>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={100}>
            <a>
              <span>Projects</span>
            </a>
          </Link>
          <Link>
            <a>
              <span>Contact</span>
            </a>
          </Link>

          <Link href='/Resume.pdf' target='_blank' rel='noreferrer'>
            <a>
              <Button type='button'>Resume</Button>
            </a>
          </Link>
        </NavMenu>
        <MenuIcon className='d-lg-none d-sm-inline-block mx-5 button' onClick='showMenu()' />
      </SubContainer>
    </Nav >

    // </Container>
  );
};

// const Container = Styled.div``;

const SubContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = Styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  background-color: #ECF0F3;
  // box-shadow: 0 10px 10px #c9c9c9;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 575px) {
    // height: 60px;
    width: 100%;
  }

  button {
    @media (max-width: 575px) {
      
    }
  }
`;

const Logo = Styled.img`
  height: 50px;
  cursor: pointer;

  @media (max-width: 575px) {
    padding-left: 50px;
    // height: 40px;
  }
`;

const NavMenu = Styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 5px;
    display: flex;
    text-decoration: none;

    Button:hover {
      background-color: #6A994E;
      border: 2px solid #6A994E;
      color: #ECF0F3;
      transition: .3s
    }

    span {
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
    Link {
      display: none;
    }
  }
`;

const Button = Styled.button`
  padding: 9px 18px;
  color: #6A994E;
  background-color: transparent;
  border: 2px solid #6A994E;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(21 230 76 / 26%);
  font-family: 'Poppins', sans-serif;
`;

export default Header;