import React from 'react';
import styled from 'styled-components';

export default function HeroTwo() {
  return (
    <>
        <CardWrapper>
            <Header>QUI JE SUIS</Header>
            <Span>Graphiste et webdesigner créative</Span>
        </CardWrapper>
    </>
  );
}

const Header = styled.h1`    
  font-size: 3rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
`;

const Span = styled.span`
  color: #6dbd8f !important;
  font-size: 1.5rem;
  line-height: 2rem;    
  margin-top: 0.5rem;    
  font-weight: 600;
  margin-left: 1rem;
  @media (max-width: 990px) {
    margin-left: 0rem;
  }
  display: flex;
`;

const CardWrapper = styled.div`
  display: flex;
  margin: 70px 10px 40px 20px;
  flex-direction: row;
  align-items: baseline;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
