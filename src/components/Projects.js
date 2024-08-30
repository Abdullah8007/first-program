import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/ProjectStyle.css';

function Projects() {
    return (
        <section className='project-section' id='projects'>
            <Container className='h-full'>
                <Row className='row'>
                    <h3 className='head'>Projects</h3>
                    <h1 className='title'>What I've Built</h1>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 mt-lg-0 overlay'>
                        <img src='/Images/MovieMetropolis.png' alt='MovieMetropolis' className='img-fluid w-100 h-auto' />
                        <div className='layer'>
                            <h3>MovieMetropolis</h3>
                            <h5>React JS</h5>
                            <div className='buttons'>
                                <a href='https://github.com/Abdullah8007/FULLSTACK-MERN-MOVIES-2023' target='_blank' rel='noreferrer'><Button className='btn-main'>Code</Button></a>
                                <a href='https://movie-metropolis.vercel.app' target='_blank' rel='noreferrer'><Button className='btn-main'>Demo</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 mt-lg-0 overlay'>
                        <img src='/Images/Eduford.png' alt='Eduford' className='img-fluid' />
                        <div className='layer'>
                            <h3>Eduford</h3>
                            <h5>HTML5 CSS3 JS</h5>
                            <div className='buttons'>
                                <a href='https://github.com/Abdullah8007/College-Project' target='_blank' rel='noreferrer'><Button className='btn-main'>Code</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <img src='/Images/Chem-Proof Pumps.png' alt='Chem-Proof Pumps' className='img-fluid' />
                        <div className='layer'>
                            <h3>Chem-Proof Pumps</h3>
                            <h5>HTML5 CSS3 JS BOOTSTRAP5</h5>
                            <div className='buttons'>
                                <a href='https://chemproofpump.com' target='_blank' rel='noreferrer'><Button className='btn-main'>Demo</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <img src='/Images/Balwa Car Cool.png' alt='Balwa Car Cool' className='img-fluid' />
                        <div className='layer'>
                            <h3>Balwa Car Cool</h3>
                            <h5>HTML5 CSS3 JS BOOTSTRAP5</h5>
                            <div className='buttons'>
                                <a href='https://balwacarcool.in' target='_blank' rel='noreferrer'><Button className='btn-main btn'>Demo</Button></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;