import React from 'react';
import styled from 'styled-components';

export default function HeroNine() {
  return (
    <>
       <section className="flex flex-wrap justify-center mt-20 lg:mt-0 w-full bg-cover bg-discover-smartphone lg:bg-discover-laptop bg-dating text-white lg:pb-0 pt-10 mb-20">
           <div className="flex justify-center items-center flex-col text-center container mt-10 lg:py-4">
               <div className="my-6 mx-6 font-semibold uppercase text-xl">
                   Profitez d’un diagnostic gratuit de votre communication !
                </div> 
                <div className="mt-6 mx-6 font-medium uppercase text-lg">
                    Vous souhaitez faire évoluer vos supports de  communication, revoir votre image de marque ?
                </div> 
                <div className="mb-6 mx-6 font-medium uppercase text-lg">
                    Avez-vous pensé à faire un diagnostic gratuit de vos outils de communication?
                </div> 
                <div className="my-6 mx-6 font-light uppercase max-w-2xl">
                    Je vous propose un RDV gratuit de 1 heure pendant lequel nous analysons vos supports, votre image et vos objectifs.
                </div> 
                <A
                    target="_blank" 
                    href="https://calendly.com/moharaouafi/diagnostic" 
                    className="flex items-center lg:w-96 mb-20 hover:bg-opacity-90 uppercase justify-center my-10 py-3 px-4 text-sm font-medium rounded-md"
                >
                    RÉSERVER GRATUITEMENT UN APPEL
                </A>
            </div>
        </section>
    </>
  );
}

const A = styled.a`
    background: #fff0 ;
    color: #fff !important;
    border: 2px solid #fff;
    font-weight: 700;
    &:hover{
        color: #6dbd8f !important;
        background: #fff;
    }
`;