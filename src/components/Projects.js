/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
// import '../styles/ProjectStyle.css'
// import { Container } from 'react-bootstrap';
// import styled from 'styled-components';

// function Projects() {
//     return (
//         <Container fluid className='fluid'>
//             <section className="campus container" id='projects'>
//                 <h3>Projects</h3>
//                 <h1>What I've Built</h1>
//                 <div className="row d-flex align-items-center justify-content-evenly flex-wrap flex-sm-wrap flex-md-wrap gap-3 mt-5">
//                     <div className="campus-col col-lg-5 col-md-6 col-sm-6">
//                         <img src="./Images/MovieMetropolis.png" alt="MovieMetropolis" />
//                         <div className="layer">
//                             <h3>MovieMetropolis<h5>React JS</h5></h3>
//                             <a href='https://github.com/Abdullah8007/FULLSTACK-MERN-MOVIES-2023' target='_blank' rel='noreferrer'><Button className='btn'>Code</Button></a>
//                         </div>
//                     </div>
//                     <div className="campus-col col-lg-5 col-md-6 col-sm-6">

//                         <img src="/Images/Eduford.png" alt="Eduford" />
//                         <div className="layer">
//                             <h3>Eduford<h5>HTML CSS JS</h5></h3>
//                             <a href='https://github.com/Abdullah8007/College-Project' target='_blank' rel='noreferrer'><Button className='btn'>Code</Button></a>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Container>

//     )
// };

// const Button = styled.button``;

// export default Projects;
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
                    <Col lg={6} className='mb-5 mb-lg-0 mt-4 mt-lg-0 overlay'>
                        <a href='https://github.com/Abdullah8007/FULLSTACK-MERN-MOVIES-2023' target='_blank' rel='noreferrer'><img src='/Images/MovieMetropolis.png' alt='MovieMetropolis' className='img-fluid w-100 h-auto' /></a>
                        <div className='layer'>
                            <h3>MovieMetropolis</h3>
                            <h5>React JS</h5>
                            <Button className='btn-main'>Code</Button>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-5 mb-lg-0 mt-4 mt-lg-0 overlay'>
                        <a href='https://github.com/Abdullah8007/College-Project' target='_blank' rel='noreferrer'><img src='/Images/Eduford.png' alt='Eduford' className='img-fluid' /></a>
                        <div className='layer'>
                            <h3>Eduford</h3>
                            <h5>HTML CSS</h5>
                            <Button className='btn-main'>Code</Button>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <a href='https://github.com/Abdullah8007/Zoo' target='_blank' rel='noreferrer'><img src='/Images/Zoo.png' alt='Zoo' className='img-fluid' /></a>
                        <div className='layer'>
                            <h3>Zoo</h3>
                            <h5>HTML CSS JS</h5>
                            <Button className='btn-main'>Code</Button>
                        </div>
                    </Col>
                    <Col lg={6} className='mb-5 mb-lg-0 mt-4 overlay'>
                        <a href='https://github.com/Abdullah8007/Travelling' target='_blank' rel='noreferrer'><img src='/Images/Travelling.png' alt='Travelling' className='img-fluid' /></a>
                        <div className='layer'>
                            <h3>Travelling</h3>
                            <h5>HTML CSS</h5>
                            <Button className='btn-main btn'>Code</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Projects;