import React from 'react';
import styled from 'styled-components';

export default function SectionHeader(props) {
      const {one, two} = props.header;
    return (
      <>
          <CardWrapper>
              <Header>{one}</Header>
              <Span>{two}</Span>
          </CardWrapper>
      </>
    )
}

const Header = styled.h1`    
  font-size: 3.75rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 900;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  margin: 0;
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