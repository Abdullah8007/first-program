/* eslint-disable react/jsx-no-undef */
import React from 'react'
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <h1 className="title">Welcome to the Tailwind CSS Playground</h1>
    </Container>
  )
};

const Container = styled.div`
  text-align: center;
`;

export default Home;