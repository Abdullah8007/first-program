/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import styled from 'styled-components';
import { GitHub, LinkedIn, MailOutlineRounded, RecentActorsRounded } from '@mui/icons-material';
import '../styles/HomeStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section className='home-section' id='home'>
      <Container className=' container-fluid'>
        <p>Let's Build Something Together</p>
        <Hero>
          <h1>Hi, i'm <span>Abdullah</span><br></br>A Front-End Web Developer.</h1>
          <Para>I’m focused on building responsive front-end web applications while persuing S.Y.BCA.</Para>
          <a href='https://www.linkedin.com/in/abdullah-jagrala-789234280/' target='_blank' rel='noreferrer'>
            <Button type='button'><LinkedIn /></Button>
          </a>
          <a href='https://github.com/Abdullah8007' target='_blank' rel='noreferrer'>
            <Button type='button'><GitHub /></Button>
          </a>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={100}>
            <Button type='button'><MailOutlineRounded /></Button>
          </Link>
          <a href='/Resume.pdf' target='_blank' rel='noreferrer'>
            <Button type='button'><RecentActorsRounded /></Button>
          </a>
        </Hero>
      </Container >
    </section>
  )
};

const Container = styled.div`
    text-align: center;
    flex-direction: column;
    background-color: #ECF0F3;
    // padding: 250px 0;
    // padding-top: 300px
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fade-up 2s;

  p {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 1px;

    @media(max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const Hero = styled.div`
  a {
    Button:hover {
      transform: scale(1.2, 1.2);
      
    }
  }

  h1 {
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: bolder;
    color: #434343;
    letter-spacing: 1px;
    font-weight: 700;
    
    @media(max-width: 768px) {
      font-size: 45px;
    }

    @media(max-width: 712px) {
      font-size: 40px;
    }

    span {
      // color: transparent;
      // background-image: linear-gradient(#6A994E, #6A994E);
      // background-repeat: no-repeat;
      // -webkit-background-clip: text;
      // background-position: -775px 0;
      // animation: backcolor 4s linear infinite alternate;

      // @keyframes backcolor {
      //   100% {
      //     background-position: 0 0;
      //   }
      // }

      color: #6A994E;
    }
  }
`;

const Para = styled.div`
  max-width: 600px;
  margin: auto;
  margin-bottom: 10px;
  // letter-spacing: 1px;
  line-height: 23px;
  font-size: 18px;
  text-transform: uppercase;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  padding: 18px 20px;
  margin: 0 10px;
  border: 0px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 10px 10px #B0B6C0;
  margin-top: 20px;
  cursor: pointer;
  transition: .3s;

  @media (max-width: 320px) {
    margin: 0 5px;
  }
`;

export default Home;