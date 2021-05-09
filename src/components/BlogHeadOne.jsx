import React from 'react';
import styled from 'styled-components';
import INavbar from './NavigationOther';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function HeadOne(props) {

    const data = useStaticQuery(graphql`
        query Bannertwo {
            file(relativePath: {eq: "Imagewelcomes.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    const { Title, subTitle } = props;
    console.log({VY: Title});
    return (
        <>
        <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
            <INavbar />
            <div class="flex justify-center">
                <div class="flex flex-wrap items-center container my-10 mx-6 pt-4">
                    <div class="w-full flex flex-col items-center text-center py-10">
                        <H2 class="my-2 leading-10"> { Title } </H2> 
                        <P class="mt-6 text-base lg:text-2xl">{ subTitle }</P> 
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
    font-weight: 500 !important;
    color: white;
    font-size: 27px;
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
