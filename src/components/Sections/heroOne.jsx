import React from 'react';
import styled from 'styled-components';
import INavbar from '../Navigation';
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby';
import IMAGE from './../../assets/Image/Profil/Image-welcomes.png';

export default function HeroOne() {

    const data = useStaticQuery(graphql`
        query Banner {
            file(relativePath: {eq: "Image-welcomes.png"}) {
                childImageSharp {
                    fluid (quality: 100, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log({VY: data});
    return (
        <>
        <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
            <INavbar />
            <div className="flex justify-center">
                <div className="flex flex-wrap items-center container my-10 mx-6 pt-4">
                    <div className="w-full lg:w-6/12 flex justify-start">
                        {/* <img src={IMAGE} alt="Illustration Mac" class="relative right-50 lg:right-100 w-full lg:w-bg-mac select-none lg:pr-4"/> */}
                        <Img fluid={data.file.childImageSharp.fluid} style={{left: '-30px'}}  className="relative right-50 lg:right-100 w-full lg:w-bg-mac select-none lg:pr-4"/>
                    </div> 
                    <div class="w-full lg:w-6/12 flex flex-col items-center text-center py-10">
                        <H2 className="my-2 leading-10">VOUS CHERCHEZ À VOUS <br/> DÉMARQUER DE VOS CONCURRENTS{' '}?</H2> 
                        <P className="mt-6 text-base lg:text-2xl">Optez pour une identité visuelle attrayante et efficace</P> 
                        <Button href="#portfolio" className="mt-6 bg-transparent border-2 border-white rounded-full py-3 px-4 text-white text-sm uppercase font-medium focus:outline-none hover:bg-white hover:text-green-600 transition duration-300">
                            Mes réalisations
                        </Button>
                    </div>
                </div>
            </div>
            
        <div><div class="wave wave1"></div></div>
        </header>
        </>
    )
}

 
const H2 = styled.h2`
    text-transform: uppercase;
    font-weight: 500;
    color: white;
    font-size: 30px;
    @media only screen and (max-width: 655px){
        font-size: 25px;
    };
    @media only screen and (max-width: 639px){
        font-size: 23px;
    };
    @media only screen and (max-width: 572px){
        font-size: 22px;
    };
    @media only screen and (max-width: 551px){
        font-size: 18px;
    };
    @media only screen and (max-width: 380px){
        font-size: 13px;
    };
`;

const P = styled.p`
    color: white;
    font-size: 22px;
    @media only screen and (max-width: 655px){
        font-size: 20px;
    };
    @media only screen and (max-width: 639px){
        font-size: 20px;
    };
    @media only screen and (max-width: 551px){
        font-size: 17px;
    };
    @media only screen and (max-width: 380px){
        font-size: 13px;
    };
`;

const Button = styled.a`
    &:hover{
        color: #6cbc8f !important;
        background-color: #fff !important;
    }
`;
