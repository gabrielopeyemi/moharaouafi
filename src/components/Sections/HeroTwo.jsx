import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';

export default function HeroTwo() {
    const data = useStaticQuery(graphql`
        query imgfisrt {
            file(relativePath: {eq: "Picture-profil.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    console.log({data});
    const [ showFullText, setShowFullText] = useState(true);
    const [ showFullButton, setShowButton] = useState(false);
    useEffect(()=>{
        
    },[]);
    const handleTextToShow = () => {
        if (window.innerWidth < 787 ){
            setShowFullText(false);
        } else setShowFullText(true);
    }
    window.addEventListener('resize', () => {
        console.log({HN: window.innerWidth})
        if (window.innerWidth < 787 ){
            setShowFullText(false);
            console.log({showFullText});
            return
        } 
        if (window.innerWidth > 787){
            setShowFullText(true);
            console.log({showFullText});
            return;
        }
    });
    const handleShowFullText = ()=> {
        setShowFullText(!showFullText);
        setShowButton(!showFullButton);
    }
    return ( 
        <section className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
        <div className="block container">
            <div className="w-full flex flex-col lg:flex-row items-baseline">
                <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>QUI JE SUIS ?</h1> 
                <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">
                    Graphiste et webdesigner créative
                </span>
            </div>
            <div className="flex flex-wrap items-center my-10 lg:my-20">
                <div className="w-full flex justify-center lg:w-4/12">
                    <Img fluid={data.file.childImageSharp.fluid} className="w-64 lg:w-96 pr-10 pb-10"/>
                </div> 
                <div className="w-full lg:w-8/12">
                    <div className="w-full flex flex-col lg:flex-row items-baseline mb-8">
                        <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase">MOHA RAOUAFI</h1> 
                        <span className="text-green-400 text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">Nice, France</span>
                    </div> 
                    <ShortText 
                        showFullText={showFullText} 
                        style={{displace: showFullText ? 'none' : ''}}
                    >
                        <p>
                            Graphiste Freelance basé dans les Alpes-Maritimes, je mets à disposition mon savoir-faire et ma créativité.
                            <br/>
                            <br/>
                            Diplômé des arts appliqués en Design et Graphisme Print, je réalise tout projet nécessitant la création d'un environn...
                        </p> 
                        <span 
                            style={{color: '#59aa8a', cursor: 'pointer'}} 
                            onClick={handleShowFullText}
                        >
                            Lire plus
                        </span>
                    </ShortText>
                    <FullText 
                        showFullText={showFullText} 
                        style={{displace: showFullText ? '' : 'none'}}
                    >
                        <p className="text-gray-500 text-lg font-light my-4">
                                Graphiste Freelance basé dans les Alpes-Maritimes, je mets à disposition mon savoir-faire et ma créativité.
                        </p> 
                        <p className="text-gray-500 text-lg font-light my-4">
                            Diplômé des arts appliqués en Design et Graphisme Print, je réalise tout projet nécessitant la création d'un environnement graphique. Allant du simple logo aux grands formats (expo, stand, enseigne...) en passant par le web-design.
                        </p> 
                        <p className="text-gray-500 text-lg font-light my-4">
                            Chaque projet est une création unique, en lien avec vos valeurs et votre activité, adapté à vos besoins en communication. Afin d’affiner votre demande, je suis en étroite collaboration avec des prestataires techniques tels que développeurs web, photographes professionnels, illustrateur.
                        </p> 
                        <p className="text-gray-500 text-lg font-light my-4">
                            Outre la créativité, ma rigueur et ma réactivité sont également les atouts nécessaires à la bonne gestion d'un projet, du Brief client autour d’un café à la finalisation.
                        </p>
                        <span 
                            style={{display: showFullButton ? '': 'none', color: "#59aa8a", cursor: 'pointer'}} 
                            onClick={handleShowFullText}
                        >
                            Lire moins
                        </span>
                    </FullText>
                </div>
            </div>
        </div>
    </section>
    )
}

const FullText = styled.div`
    display: ${(p) => p.showFullText ?  '' : 'none'};
    animation: 6s;
`;

const ShortText = styled.div`
    display: ${(p) => p.showFullText ? 'none' : 'block'};
    /* @media only screen and (max-width: 767px){
        display: none !important;
    } */
`;

const Span = styled.span`
    p
`;