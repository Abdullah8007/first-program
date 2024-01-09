/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/ProjectStyle.css'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function Projects() {
    return (
        <Container fluid className='fluid'>
            <section className="campus container" id='projects'>
                <h3>Projects</h3>
                <h1>What I've Built</h1>
                <div className="row flex-lg-nowrap flex-sm-wrap">
                    <div className="campus-col">
                        <img src="./Images/MovieMetropolis.png" alt="MovieMetropolis" />
                        <div className="layer">
                            <h3>MovieMetropolis<h5>React JS</h5></h3>
                            <a href='https://github.com/Abdullah8007/FULLSTACK-MERN-MOVIES-2023' target='_blank' rel='noreferrer'><Button className='btn'>Code</Button></a>
                        </div>
                    </div>
                    <div className="campus-col">
                        
                        <img src="/Images/Eduford.png" alt="Eduford" />
                        <div className="layer">
                            <h3>Eduford<h5>HTML CSS JS</h5></h3>
                            <a href='https://github.com/Abdullah8007/College-Project' target='_blank' rel='noreferrer'><Button className='btn'>Code</Button></a>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    )
};

const Button = styled.button``;

export default Projects;