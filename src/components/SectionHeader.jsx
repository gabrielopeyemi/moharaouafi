import React from 'react';
import styled from 'styled-components';

export default function SectionHeader(props) {
      const {one, two} = props.header;
    return (
      <>
          <div className="w-full lg:block flex flex-col items-baseline">
              <h1 className="lg:block text-gray-600 text-xl lg:text-5xl font-semibold uppercase">{one}</h1> 
              <span className="lg:block text-base lg:text-2xl font-semibold mt-2  text-primary">{two}</span>
          </div> 
      </>
    )
}

const Header = styled.h1`    
  font-size: 3vw;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 900;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  margin: 0;
`;

const Span = styled.span`
  color: #6dbd8f !important;
  font-size: 1rem;
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
