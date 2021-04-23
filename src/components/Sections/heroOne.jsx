import React from 'react'
import INavbar from '../Navigation' 
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function HeroOne() {

    const data = useStaticQuery(graphql`
        query Banner {
            file(relativePath: {eq: "Imagewelcomes.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log({VY: data});
    return (
        <header className='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
        <INavbar />
        <div class="flex justify-center">
            <div class="flex flex-wrap items-center container my-10 mx-6 pt-4">
                <div class="w-full lg:w-6/12 flex justify-start">
                    {/* <img src={img} alt="Illustration Mac" class="relative right-50 lg:right-100 w-full lg:w-bg-mac select-none lg:pr-4"/> */}
                    <Img fluid={data.file.childImageSharp.fluid} style={{left: '-30px'}}  className="relative right-50 lg:right-100 w-full lg:w-bg-mac select-none lg:pr-4"/>
                </div> 
                <div class="w-full lg:w-6/12 flex flex-col items-center text-center py-10">
                    <h2 style={{lineHeight: 1.5, fontWeight: '900'}} class="my-2 text-white text-xl lg:text-3xl leading-10 uppercase font-medium lg:font-medium">VOUS CHERCHEZ À VOUS <br/> DÉMARQUER DE VOS CONCURRENTS ? </h2> 
                    <p class="mt-6 text-white text-base lg:text-2xl uppercase font-light">Basée sur nice, nous pouvons nous rencontrer autour d’un café pour discuter de votre projet ou par email si vous vous trouvez en dehors de nice</p> 
                    <button class="mt-10 bg-transparent border-2 border-white rounded-full py-3 px-4 text-white text-sm uppercase font-medium focus:outline-none hover:bg-white hover:text-green-600 transition duration-300">Mes réalisations</button>
                </div>
            </div>
        </div>

        </header>
    )
}
