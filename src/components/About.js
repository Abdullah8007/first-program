import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Container>
      <AboutMe>
        <Title>About</Title>
        <Head>Who I Am</Head>
        <Para>Hi there!, I’m Abdullah, a curious frontend developer who’s trying to get a bit better every day.
            <br></br><br></br>
          I currently studying in S.Y.BCA from Tilak Maharashtra Vidyapeeth, Pune.
          <br></br><br></br>
          I have always had a knack for technology and working with computers. Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning JavaScript and was even more enthused with making websites interactive.
          <br></br><br></br>
          I’m very dedicated to learn new things and to truly believe that you should never stop learning. I enjoy creating different things, whether that be websites, application or anything in between.
          <br></br><br></br>
          I’m always looking for new opportunities to expand my understanding of web design and development, so you’ll generally find me sipping a delicious cup of coffee with my nose in a good “technical” book or plugged into my laptop drooling over all of the beauty the web has to offer. I hope to join a team of talented individuals I can learn from and build engaging digital experiences with.</Para>
      </AboutMe>
      <Image src='/Images/about-img.png' alt=''></Image>
    </Container>
  )
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ECF0F3;
    padding: 0 100px;
    column-gap: 200px;
`;

const AboutMe = styled.div``;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #2F97C1;
  letter-spacing: 1px;
`;

const Head = styled.div`
  font-size: 32px;
  padding: 16px 0;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Para = styled.div`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 1px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  border: 10px solid #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px #B0B6C0;
`;

export default About;