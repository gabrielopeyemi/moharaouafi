import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

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
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageOne(CashArcadeTwo)} onMouseLeave={()=> setImageOne(CashArcadeOne)} src={imageOne} alt={imageOne}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageDEBS(DEBSTwo)} onMouseLeave={()=> setImageDEBS(DEBSOne)} src={imageDEBS} alt={imageDEBS}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImagfruiteo(fruiteoTwo)} onMouseLeave={()=> setImagfruiteo(fruiteoOne)} src={imagefruiteo} alt={imagefruiteo}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageSauceSissi(SauceSissiTwo)} onMouseLeave={()=> setImageSauceSissi(SauceSissiOne)} src={imageSauceSissi} alt={imageSauceSissi}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageVictoriaInfinity(VictoriaInfinityTwo)} onMouseLeave={()=> setImageVictoriaInfinity(VictoriaInfinityOne)} src={imageVictoriaInfinity} alt={imageVictoriaInfinity}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageLaxess(LaxessTwo)} onMouseLeave={()=> setImageLaxess(LaxessOne)} src={imageLaxess} alt={imageLaxess}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImagecfdt(cfdtTwo)} onMouseLeave={()=> setImagecfdt(cfdtOne)} src={imagecfdt} alt={imagecfdt}/>
                <Img maxWidth="10%" className="" onFocus={ () => void 0 } onMouseOver={()=> setImageenvibus(envibusTwo)} onMouseLeave={()=> setImageenvibus(envibusOne)} src={imageenvibus} alt={imageenvibus}/>
              </Carousel> 
          </div>
      </div>
  </section>
  );
};

const Img = styled.img`
    width: 100px;
`;