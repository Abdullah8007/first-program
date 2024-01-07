import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/HeaderStyle.css';


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
        <Container className='px-5'>
          <Navbar.Brand href="#">
            <img src='/Images/logo.png' alt='logo' className='img-fluid h-25 w-25' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 align-items-center text-uppercase"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='px-3 nav-menu'>Home</Nav.Link>
              <Nav.Link href="#action2" className='px-3 nav-menu'>About</Nav.Link>
              <Nav.Link href="#action2" className='px-3 nav-menu'>Skills</Nav.Link>
              <Nav.Link href="#action2" className='px-3 nav-menu'>Projects</Nav.Link>
              <Nav.Link href="#action2" className='px-3 nav-menu'>Contact</Nav.Link>
              <Button className='btn main'
              // style={{
              //   padding: '9px 20px',
              //   color: '#6a994e',
              //   backgroundColor: 'transparent',
              //   border: '2px solid #6a994e',
              //   borderRadius: '5px',
              //   textTransform: 'uppercase',
              //   cursor: 'pointer',
              //   boxShadow: '5px 5px 10px rgb(21 230 76 / 26%)'}}
              >Resume</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </header>
  );
};

// const Container = Styled.div``;

// const SubContainer = Styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Nav = Styled.div`
//   height: 80px;
//   width: 100%;
//   position: fixed;
//   background-color: #ECF0F3;
//   // box-shadow: 0 10px 10px #c9c9c9;
//   z-index: 1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media(max-width: 575px) {
//     // height: 60px;
//     width: 100%;
//   }

//   button {
//     @media (max-width: 575px) {

//     }
//   }
// `;

// const Logo = Styled.img`
//   height: 50px;
//   cursor: pointer;

//   @media (max-width: 575px) {
//     padding-left: 50px;
//     // height: 40px;
//   }

//   @media (max-width: 425px) {
//     padding-left: 25px;
//     height: 40px;
//   }
// `;

// const NavMenu = Styled.div`

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   a {
//     padding: 0 8px;
//     display: flex;
//     text-decoration: none;

//     Button:hover {
//       background-color: #6A994E;
//       border: 2px solid #6A994E;
//       color: #ECF0F3;
//       transition: .3s
//     }

//     span {
//       color: #434343;
//       letter-spacing: .3px;
//       text-decoration: none;
//       cursor: pointer;
//       font-size: 16px;
//       text-transform: uppercase;
//     }

//     span:hover {
//       transition: 0.3s;
//       color: #6A994E;
//     }
//   }

//   @media (max-width: 575px) {
//     Link {
//       display: none;
//     }
//   }

//   @media (max-width: 425px) {
//     display: none;
//   }
// `;

// const Button = Styled.button`
// padding: 9px 18px;
// color: #6A994E;
// background-color: transparent;
// border: 2px solid #6A994E;
// border-radius: 5px;
// font-size: 16px;
// text-transform: uppercase;
// cursor: pointer;
// box-shadow: 5px 5px 10px rgb(21 230 76 / 26%);
// font-family: 'Poppins', sans-serif;
// `;


export default Header;