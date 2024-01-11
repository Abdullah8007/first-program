import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
    return (
        <Container className='container-fluid' id='skills'>
            <SubContainer className='container'>
                <Title>Skills</Title>
                <Head className=' mb-5'>What I Can Do</Head>
                <Sgroup className='d-flex flex-lg-wrap flex-md-wrap flex-sm-wrap row-gap-5 column-gap-5 justify-content-evenly'>
                    <Sbox className='d-flex align-items-center justify-content-evenly col-lg-4'>
                        <Logo src='./Images/html.webp' alt=''></Logo>
                        <Cont>HTML5</Cont>
                    </Sbox>

                    <Sbox className='d-flex align-items-center justify-content-evenly'>
                        <Logo src='./Images/css.png' alt=''></Logo>
                        <Cont>CSS3</Cont>
                    </Sbox>

                    <Sbox className='d-flex align-items-center justify-content-evenly'>
                        <Logo src='./Images/javascript.webp' alt='' className=' align-items-center justify-content-center'></Logo>
                        <Cont className=' align-items-center justify-content-center'>JavaScript</Cont>
                    </Sbox>

                    <Sbox className='d-flex align-items-center justify-content-evenly'>
                        <Logo src='./Images/react.png' alt=''></Logo>
                        <Cont>React</Cont>
                    </Sbox>

                    <Sbox className='d-flex align-items-center justify-content-evenly'>
                        <Logo src='./Images/bootstrap.png' alt='' className=' align-items-center justify-content-center'></Logo>
                        <Cont>Bootstrap5</Cont>
                    </Sbox>

                    <Sbox className='d-flex align-items-center justify-content-evenly'>
                        <Logo src='./Images/github1.webp' alt='' className=' align-items-center justify-content-center'></Logo>
                        <Cont>Github</Cont>
                    </Sbox>
                </Sgroup>
            </SubContainer>
        </Container>
    )
};

const Container = styled.div`
    height: 130vh;
    padding-top: 120px;
    display: flex;
    justify-content: center;
    background-color: #ECF0F3;
    padding: 0px;
    flex-direction: column;
    text-align; left;
`;

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

const Sgroup = styled.colgroup`
    :hover {
        transform: scale(1.1, 1.1);
    }

    @media(max-width: 575px) {
        flex-wrap: wrap;
    }
`;

const SubContainer = styled.div`
    
`;

const Sbox = styled.div`
    border: 0px solid #ECF0F3;
    background-color: transparent;
    box-shadow: 5px 10px 10px #B0B6C0;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    transition: .3s;
    cursor: pointer;
    // animation: fade-in 1s;

    @media(max-width: 575px) {
        width: 200px;
        flex-basis: 100%;
    }

    @media(max-width: 425px) {
        flex-basis: 100%;
    }

    // @keyframes fade-in {
    //     0% {
    //         opacity: 0;
    //         transform: translateY(30px) scale(0.9);
    //     }
    
    //     100% {
    //         opacity: 1;
    //         transform: translateY(0px) scale(1);
    //     }
    // }
`;

const Logo = styled.img`
    transition: .3s;
    position: relative;

    @media(max-width: 575px) {
        padding: 0 10px;
    }
`;

const Cont = styled.div`
    font-size: 18px;
    font-weight: 500;
    transition: .3s;

    @media(max-width: 575px) {
        padding: 0 10px;
    }
`;

export default Skills;