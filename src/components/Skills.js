import React from 'react';
import styled from 'styled-components';

function Skills() {
    return (
        <Container>
            <Title>Skills</Title>
            <Head>What I Can Do</Head>
            <Sgroup>
                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>

                <Scol>
                    <Logo></Logo>
                    <Cont></Cont>
                </Scol>
            </Sgroup>
        </Container>
    )
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding: 0 100px;
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
    
`;

const Scol = styled.col`

`;

const Logo = styled.img`

`;
const Cont = styled.div`

`;

export default Skills;