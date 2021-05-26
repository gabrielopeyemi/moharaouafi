import React, {useState} from 'react';
import Img from 'gatsby-image';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

//import logo images
import CashArcadeOne from './../../assets/Image/LogoClients/CashArcade/CashArcadeOne.png';
import CashArcadeTwo from './../../assets/Image/LogoClients/CashArcade/CashArcadeTwo.png';

import DEBSOne from './../../assets/Image/LogoClients/DEBS/DEBSOne.png';
import DEBSTwo from './../../assets/Image/LogoClients/DEBS/DEBSTwo.png';

import fruiteoOne from './../../assets/Image/LogoClients/Fruiteo/fruiteoOne.png';
import fruiteoTwo from './../../assets/Image/LogoClients/Fruiteo/fruiteoTwo.png';

import SauceSissiOne from './../../assets/Image/LogoClients/SauceSissi/SauceSissiOne.png';
import SauceSissiTwo from './../../assets/Image/LogoClients/SauceSissi/SauceSissiTwo.png';

import VictoriaInfinityOne from './../../assets/Image/LogoClients/VictoriaInfinity/VictoriaInfinityOne.png';
import VictoriaInfinityTwo from './../../assets/Image/LogoClients/VictoriaInfinity/VictoriaInfinityTwo.png';

import LaxessOne from "./../../assets/Image/LogoClients/caisse-depargne/L'axessOne.png";
import LaxessTwo from "./../../assets/Image/LogoClients/caisse-depargne/L'axessTwo.png";

import cfdtOne from "./../../assets/Image/LogoClients/cfdt/cfdtOne.png";
import cfdtTwo from "./../../assets/Image/LogoClients/cfdt/cfdtTwo.png";

import envibusOne from "./../../assets/Image/LogoClients/envibus/envibusOne.png";
import envibusTwo from "./../../assets/Image/LogoClients/envibus/envibusTwo.png";

export default function HeroFive() {
    const Data = useStaticQuery(graphql`
        query clientLogo {
            allMarkdownRemark(filter: {frontmatter: {group: {eq: "ClientLogo"}}}) {
                nodes {
                    frontmatter {
                        Name
                        group
                        date(fromNow: false)
                        title
                        stack
                        slug
                        imageBlue {
                            childImageSharp {
                                fluid (maxWidth: 2048, quality: 90){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image {
                            childImageSharp {
                                fluid (maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        `);
    const Clients = Data.allMarkdownRemark.nodes;
    console.log({Clients});
    const [imageStatus, setImageStatus] = useState(true)

    const [imageOne, setImageOne] = useState(CashArcadeOne)
    const [imageDEBS, setImageDEBS] = useState(DEBSOne)
    const [imagefruiteo, setImagfruiteo] = useState(fruiteoOne)
    const [imageSauceSissi, setImageSauceSissi] = useState(SauceSissiOne)
    const [imageVictoriaInfinity, setImageVictoriaInfinity] = useState(VictoriaInfinityOne)
    const [imageLaxess, setImageLaxess] = useState(LaxessOne)
    const [imagecfdt, setImagecfdt] = useState(cfdtOne)
    const [imageenvibus, setImageenvibus] = useState(envibusOne) 
    const breakPoints = [
      {
          width: 1, itemsToShow: 1
      },
      {
          width: 550, itemsToShow: 2
      },
      {
          width: 768, itemsToShow: 4
      },
      {
          width: 1200, itemsToShow: 4
      }
  ]
  return (
    <section className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
      <div className="block container">
          <div className="w-full flex flex-col lg:flex-row items-baseline">
              <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>Ils me font confiance</h1> 
              <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary"></span>
          </div>
          <div className="flex flex-wrap items-center my-10 lg:my-20">
            <Carousel 
                outerSpacing={10}
                itemPadding={[10, 50]}
                breakPoints={breakPoints}
              >
                 {Clients.map((client) => (
                    <>
                        <Img  
                            style={{width: '100%', borderRadius: '10px'}} 
                            onFocus={ () => void 0 } 
                            onMouseOver={() => alert('HAHA')} 
                            onClick={()=> alert('hello')}
                            onMouseLeave={()=> setImageStatus(true)} 
                            fluid={imageStatus ? client.frontmatter.image.childImageSharp.fluid : client.frontmatter.imageBlue.childImageSharp.fluid} 
                        />
                    </>
                ))}
            </Carousel> 
          </div>
      </div>
  </section>
  );
};

// const Image = styled(Img)`
//     width: 100px;
// `;