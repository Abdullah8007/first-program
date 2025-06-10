import React from 'react'
import '../styles/SkillsStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (

        <section className='skill-section' id='skills'>
            <Container fluid className='h-full'>
                <Container>
                    <Row className='justify-content-start align-items-center'>
                        <h3 className='head'>Skills</h3>
                        <h1 className='title'>What I Can Do</h1>
                        <h4 className='head mt-5'>Language</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Python.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>PYTHON</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/HTML.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>HTML5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/CSS.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>CSS3</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/JavaScript.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>Framework, Platforms & Libraries</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Django.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>DJANGO</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Flask.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>FLASK</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Bootstrap.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>BOOTSTRAP5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/JWT.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>JWT</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>Databases / ORM</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Postgres.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>POSTGRES</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/SqLite.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>SQLITE3</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/MySQL.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>MySQL</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Firebase.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>FIREBASE</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>CI/CD VCS</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Git.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>GIT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/GitHub.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>GITHUB</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>Hosting/SaaS</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Firebase.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>FIREBASE</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Vercel.svg' alt='Skills-Img' className='img-fluid icon-img' />
                                <h4>VERCEL</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>Design</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Canva.svg' alt='Skills-Img' className='img-fluid' />
                                <h4>CANVA</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-start align-items-center'>
                        <h4 className='head mt-3'>Others</h4>
                        <Col md={6} lg={3} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/Postman.svg' alt='Skills-Img' className='img-fluid icon-img' />
                                <h4>POSTMAN</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
};



export default Skills;
