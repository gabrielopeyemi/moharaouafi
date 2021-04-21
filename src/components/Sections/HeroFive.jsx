import React, {useState} from 'react';
import SectionHeader from '../SectionHeader';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';


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
    const header = {
        one:  `Ils me font confiance`
    };
    
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
          width: 768, itemsToShow: 3
      },
      {
          width: 1200, itemsToShow: 4
      }
  ]
  return (
    <>
        <SectionHeader header={ header }/>
        <Div>
          <Carousel 
            outerSpacing={60}
            itemPadding={[10, 50]}
            breakPoints={breakPoints}
          >
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageOne(CashArcadeTwo)} onMouseLeave={()=> setImageOne(CashArcadeOne)} src={imageOne} alt={imageOne}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageDEBS(DEBSTwo)} onMouseLeave={()=> setImageDEBS(DEBSOne)} src={imageDEBS} alt={imageDEBS}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImagfruiteo(fruiteoTwo)} onMouseLeave={()=> setImagfruiteo(fruiteoOne)} src={imagefruiteo} alt={imagefruiteo}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageSauceSissi(SauceSissiTwo)} onMouseLeave={()=> setImageSauceSissi(SauceSissiOne)} src={imageSauceSissi} alt={imageSauceSissi}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageVictoriaInfinity(VictoriaInfinityTwo)} onMouseLeave={()=> setImageVictoriaInfinity(VictoriaInfinityOne)} src={imageVictoriaInfinity} alt={imageVictoriaInfinity}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageLaxess(LaxessTwo)} onMouseLeave={()=> setImageLaxess(LaxessOne)} src={imageLaxess} alt={imageLaxess}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImagecfdt(cfdtTwo)} onMouseLeave={()=> setImagecfdt(cfdtOne)} src={imagecfdt} alt={imagecfdt}/>
            <img maxWidth="50%" className="img-fluid" onMouseOver={()=> setImageenvibus(envibusTwo)} onMouseLeave={()=> setImageenvibus(envibusOne)} src={imageenvibus} alt={imageenvibus}/>
          </Carousel>                                                                                                                                                              
        </Div> 
    </>
  );
}
const Div = styled.div`
  display: flex;
  
`;
const Img = styled.img`

`;
