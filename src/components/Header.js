import React, { useState } from "react";
import styled from "styled-components";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/HeaderStyle.css';
import { Link } from 'react-scroll';


const Header = () => {

  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""} `}>
        <Container className=''>
          <Navbar.Brand href="https:\\abdullahjagrala.vercel.app" target="_blank">
            <img src='/Images/logo.png' alt='logo' className='img-fluid h-25 w-25' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 align-items-center text-uppercase"
              navbarScroll
            >
              <Nav.Link className='nav-menu'><Link to="home" spy={true} smooth={true} offset={0} duration={100}>Home</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="skills" spy={true} smooth={true} offset={0} duration={100}>Skills</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="projects" spy={true} smooth={true} offset={0} duration={100}>Projects</Link></Nav.Link>
              <Nav.Link className='nav-menu'><Link to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact</Link></Nav.Link>
              <a href='/Resume.pdf' target='_blank' rel='noreferrer'><Button className='btn-main'>Resume</Button></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header>
  );
};

const Button = styled.button``;

export default Header;