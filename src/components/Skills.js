import React from 'react'
import '../styles/SkillsStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        
        <section className='skill-section' id='skills'>
            <Container fluid className='h-full'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h3 className='head'>Skills</h3>
                        <h1 className='title'>What I Can Do</h1>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/html.webp' alt='About-Img' className='img-fluid' />
                                <h4>HTML5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/css.png' alt='About-Img' className='img-fluid' />
                                <h4>CSS3</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/javascript.webp' alt='About-Img' className='img-fluid' />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/react.png' alt='About-Img' className='img-fluid' />
                                <h4>REACT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/react-bootstrap.png' alt='About-Img' className='img-fluid' />
                                <h4>REACT BOOTSTRAP</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/bootstrap.png' alt='About-Img' className='img-fluid' />
                                <h4>BOOTSTRAP5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/github1.webp' alt='About-Img' className='img-fluid' />
                                <h4>GITHUB</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/firebase.png' alt='About-Img' className='img-fluid' />
                                <h4>FIREBASE</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
};



export default Skills;