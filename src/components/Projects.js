import React from 'react';
import styled from 'styled-components';

function Projects() {
    return (
        <Container className='container-fluid' id='projects'>
            <SubContainer className='container'>
                <Title>Projects</Title>
                <Head className=' mb-5'>What I Have Build</Head>
                <Row className='d-flex align-items-center justify-content-evenly flex-wrap flex-sm-nowrap gap-3'>
                    <Column className='col-lg-5 col-md-6 col-sm-6'>
                        <Logo src="/Images/MovieMetropolis.png" alt="MovieMetropolis" className='w-100 h-auto' />
                        <Layer className="layer">
                            <h3 className=''>MovieMetropolis</h3>
                            <p>React JS</p>
                        </Layer>
                    </Column>
                    <Column className='col-lg-5 col-md-6 col-sm-6'>
                        <Logo src="/Images/Eduford.png" alt="Eduford" className='w-100 h-auto' />
                        <Layer className="layer">
                            <h3 className=''>Eduford</h3>
                            <p>HTML,CSS,JS</p>
                        </Layer>
                    </Column>
                </Row>
            </SubContainer>
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #ECF0F3;
    padding: 0 50px;
    flex-direction: column;
    text-align; left;
`;

const SubContainer = styled.div``;

const Title = styled.div`
    font-size: 20px;
    text-transform: uppercase;
    color: #6A994E;
    letter-spacing: 1px;
`;

const Head = styled.div`
    font-size: 32px;
    padding: 16px 0;
    font-weight: 700;
    letter-spacing: 1px;
`;

const Row = styled.div``;

const Column = styled.div`
    border: 0px solid #EC55F3;
    box-shadow: 0 10px 10px #B0B6C0;
    border-radius: 10px;
    padding: 10px;
`;

const Layer = styled.div`
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;

        :hover {
            background: rgba(249, 54, 54, 0.7);
        }

        h3 {
            width: 100%;
            font-weight: 500;
            color: #fff;
            font-size: 26px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            transition: 0.5s;

            :hover {
                bottom: 49%;
                opacity: 1;
            }
        }
`;

const Logo = styled.img`
    display: block;
    width: 100%
`;

export default Projects;