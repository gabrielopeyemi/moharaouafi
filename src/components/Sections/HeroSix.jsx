import React from 'react';
import styled from 'styled-components';

export default function HeroSix() {
  return (
    <>
        <section className="flex justify-center mx-6 sm:mt-10 lg:mt-40">
           <div className="block container">
               <div className="w-full flex flex-col lg:flex-row items-baseline mb-10">
                   <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase">Mes réalisations</h1> 
                   <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary"></span>
                </div> 
                <div className="flex flex-wrap justify-between w-full mt-10 lg:my-8">
                    {/* {Data.map((data, i)=>(
                        <div className="w-full lg:w-6/12 flex justify-center">
                            <div className="w-96 pr-6 py-6 lg:p-6 lg:hover:shadow-md">
                                <img src={data.img} alt={data.img} className="h-30"/> 
                                <h2 className="text-gray-500 font-semibold text-xl uppercase">{data.title}</h2> 
                                <p className="text-gray-600 text-base mt-6">
                                     {data.content}
                                </p>
                            </div>
                        </div> 
                    ))} */}
                </div>
            </div>
        </section>
    </>
  );
}


const Card = styled.div`

`;