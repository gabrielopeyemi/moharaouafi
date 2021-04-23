import React from 'react'
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

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
    console.log({data})
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
                    <div className="block lg:hidden text-gray-500 text-lg font-light my-4">
                        <p>
                            Graphiste Freelance basé dans les Alpes-Maritimes, je mets à disposition mon savoir-faire et ma créativité.
                            <br/><br/>
                            Diplômé des arts appliqués en Design et Graphisme Print, je réalise tout projet nécessitant la création d'un environn...
                        </p> 
                        <span>
                            <a style={{color: '#59aa8a'}} href="#" id="readmore">
                                Lire plus
                            </a> 
                            <a href="#" id="readmore" style={{display: 'none'}}>
                                Lire moins
                            </a>
                        </span>
                    </div> 
                    <p className="hidden lg:block text-gray-500 text-lg font-light my-4">
                            Graphiste Freelance basé dans les Alpes-Maritimes, je mets à disposition mon savoir-faire et ma créativité.
                    </p> 
                    <p className="hidden lg:block text-gray-500 text-lg font-light my-4">
                        Diplômé des arts appliqués en Design et Graphisme Print, je réalise tout projet nécessitant la création d'un environnement graphique. Allant du simple logo aux grands formats (expo, stand, enseigne...) en passant par le web-design.
                    </p> 
                    <p className="hidden lg:block text-gray-500 text-lg font-light my-4">
                        Chaque projet est une création unique, en lien avec vos valeurs et votre activité, adapté à vos besoins en communication. Afin d’affiner votre demande, je suis en étroite collaboration avec des prestataires techniques tels que développeurs web, photographes professionnels, illustrateur.
                    </p> 
                    <p className="hidden lg:block text-gray-500 text-lg font-light my-4">
                        Outre la créativité, ma rigueur et ma réactivité sont également les atouts nécessaires à la bonne gestion d'un projet, du Brief client autour d’un café à la finalisation.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}
