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
        <h1>Hi, i'm <span data-text="Abdullah">Abdullah</span><br></br>A Front-End Developer.</h1>
        <p>I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
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
  height: 92vh;
  background-color: #f5f5f5;
  
  p {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Hero = styled.div`
  h1 {
    font-size: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: bolder;
    

    span {
      color: transparent;
      -webkit-text-stroke: 1px #2F97C1;
      
      }
    }

  }
`;

const Button = styled.button`

`;

export default Home;