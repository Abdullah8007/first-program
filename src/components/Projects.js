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
                            <h5>HTML CSS</h5>
                            <div className='buttons'>
                                <a href='https://github.com/Abdullah8007/College-Project' target='_blank' rel='noreferrer'><Button className='btn-main'>Code</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <img src='/Images/Zoo.png' alt='Zoo' className='img-fluid' />
                        <div className='layer'>
                            <h3>Zoo</h3>
                            <h5>HTML CSS JS</h5>
                            <div className='buttons'>
                                <a href='https://github.com/Abdullah8007/Zoo' target='_blank' rel='noreferrer'><Button className='btn-main'>Code</Button></a>
                                <a href='https://zoo-jade.vercel.app' target='_blank' rel='noreferrer'><Button className='btn-main'>Demo</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <img src='/Images/Travelling.png' alt='Travelling' className='img-fluid' />
                        <div className='layer'>
                            <h3>Travelling</h3>
                            <h5>HTML CSS</h5>
                            <div className='buttons'>
                                <a href='https://github.com/Abdullah8007/Travelling' target='_blank' rel='noreferrer'><Button className='btn-main btn'>Code</Button></a>
                                <a href='https://trip-tok.vercel.app' target='_blank' rel='noreferrer'><Button className='btn-main btn'>Demo</Button></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;