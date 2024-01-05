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
                        <div className="layer">
                            <h3 className='d-none'>MovieMetropolis</h3>
                        </div>
                    </Column>
                    <Column className='col-lg-5 col-md-6 col-sm-6'>
                        <Logo src="/Images/Eduford.png" alt="Eduford" className='w-100 h-auto' />
                        <div className="layer">
                            <h3 className='d-none'>Eduford</h3>
                        </div>
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

const Logo = styled.img``;

export default Projects;