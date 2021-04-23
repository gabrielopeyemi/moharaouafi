import React from 'react';

export default function SectionHeader(props) {
      const {one, two} = props.header;
    return (
      <>
          <div className="w-full lg:block flex flex-col items-baseline">
              <h1 className="text-gray-600 text-2xl lg:text-5xl font-bold uppercase">{one}</h1> 
              <span className="lg:block text-base lg:text-2xl font-semibold mt-2  text-primary">{two}</span>
          </div> 
      </>
    )
}