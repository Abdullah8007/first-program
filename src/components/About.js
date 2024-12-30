import React from 'react';
import '../styles/AboutStyle.css';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (

    <section className='about-section' id='about'>
      <Container className='h-full'>
        <Container>
          <Row className='justify-content-center align-items-center'>
            <h3 className='head'>About</h3>
            <h1 className='title'>Who I Am</h1>
            <Col lg={5} className='mb-5 mb-lg-0'>
              <img src='/Images/about-img.png' alt='About-Img' className='img-fluid' />
            </Col>
            <Col lg={7} className='mb-5 mb-lg-0'>
              <p className='parah'>
                Hi there!, I’m Abdullah, a curious frontend developer who’s trying to get a bit better every day.
                <br></br><br></br>
                I currently studying in T.Y.BCA from Tilak Maharashtra Vidyapeeth, Pune.
                <br></br><br></br>
                I have always had a knack for technology and working with computers. Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning JavaScript and was even more enthused with making websites interactive.
                <br></br><br></br>
                I’m very dedicated to learn new things and to truly believe that you should never stop learning. I enjoy creating different things, whether that be websites, application or anything in between.
                <br></br><br></br>
                I’m always looking for new opportunities to expand my understanding of web design and development, so you’ll generally find me sipping a delicious cup of coffee with my nose in a good “technical” book or plugged into my laptop drooling over all of the beauty the web has to offer. I hope to join a team of talented individuals I can learn from and build engaging digital experiences with.
                <br></br><br></br>
                <Link to="projects" className='a-project' spy={true} smooth={true} offset={0} duration={100}>Check out some of my latest projects</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>

  )
};

export default About;
