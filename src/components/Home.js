/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import styled from 'styled-components';
import { GitHub, LinkedIn, MailOutlineRounded, RecentActorsRounded } from '@mui/icons-material'

function Home() {
  return (
    <Container>
      <p>Let's Build Something Together</p>
      <Hero>
        <h1>Hi, i'm Abdullah<br></br>A <span>Front-End Web Developer.</span></h1>
        <Para>I’m focused on building responsive front-end web applications while persuing S.Y.BCA.</Para>
        <a>
          <Button type='button'><LinkedIn /></Button>
        </a>
        <a>
          <Button type='button'><GitHub /></Button>
        </a>
        <a>
          <Button type='button'><MailOutlineRounded /></Button>
        </a>
        <a>
          <Button type='button'><RecentActorsRounded /></Button>
        </a>
      </Hero>
    </Container >
  )
};

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #ECF0F3;
  
  p {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
`;

const Hero = styled.div`
  a {
    Button:hover {
      transform: scale(1.1, 1.1);
      
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
    

    span {
      color: transparent;
      background-image: linear-gradient(#2F97C1, #2F97C1);
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      background-position: -750px 0;
      animation: backcolor 4s linear infinite alternate;

      @keyframes backcolor {
        100% {
          background-position: 0 0;
        }
      }
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
`;

export default Home;