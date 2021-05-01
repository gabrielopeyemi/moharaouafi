import React from 'react';

import ServiceCard from './../ServiceCard';
import one from './../../images/img/services/1.png';
import two from './../../images/img/services/2.png';
import three from './../../images/img/services/3.png';
import four from './../../images/img/services/4.png';
import five from './../../images/img/services/5.png';
import six from './../../images/img/services/6.png';

export default function HeroThree() {
  const Data = [
      {
        id: 1,
      name: 'IDENTITÉ VISUELLE',
      desc: 'Nous élaborons ensemble votre nouvelle image ou une refonte de votre marque qui serait originale et attirante : Logotype, charte graphique…',
      image: one,
    },
    {
      id: 2,
    name: 'WEBDESIGN',
    desc: `Conception graphique d'interface de site internet : site vitrine, site e-commerce, bannière, newsletter, signature mail…`,
    image: two,
    },
    {
      id: 3,
    name: 'ÉDITION ET PRINT',
    desc: `Votre identité créée et déclinée pour l'édition, un message clair et engageant : brochure, flyers, carte de visite, affiche, papeterie…`,
    image: three,
    },
    {
      id: 4,
    name: 'IMPRESSION',
    desc: `Je pourrais mettre ma passion pour le "Print" à votre service afin de suivre vos documents jusqu'à l'impression et m'assurer de leur qualité.`,
    image: four,
    },
    {
      id: 5,
    name: 'ILLUSTRATION',
    desc: `Je prends en main votre demande d'illustration de A à Z, je réalise des illustrations graphiques pour ajouter du piment à vos projets.`,
    image: five
    },
    {
      id: 6,
    name: 'FORMATION',
    desc: `Formation possible entre autres des logiciels suivants : Adobe Photoshop, Adobe Illustrator, Adobe XD, Adobe InDesign..`,
    image: six
    },
  ];
  return (
    <section className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
        <div className="block container">
            <div className="w-full flex flex-col lg:flex-row items-baseline">
                <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>Mes Services</h1> 
                <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">
                  Ce que je peux faire pour vous
                </span>
            </div>
            <div className="flex flex-wrap items-center my-10 lg:my-20">
              <div className='row'>
                {Data.map((data, i)=>(
                  <ServiceCard data={data} key={i}/>
                ))}
              </div>
            </div>
        </div>
    </section>
  );
};
