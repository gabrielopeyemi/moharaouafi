import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';


//image
import One from  './../../assets/Image/test/profil-1.png'
import Two from './../../assets/Image/test/profil-2.png'
import Three from './../../assets/Image/test/profil-3.png'
import BG from '../../assets/Image/Avis/ok.png';



export default function HeroEight() {
    const Datas = [
        {
            id: 1,
            name: 'Karine',
            project: 'DESIGN ARCHITECTURALE',
            content: `"Moha est un professionnel avec un grand P : réactivité, disponibilité, écoute, patience, pédagogie, tarifs attractifs. Je l'ai sollicité pour la création de logo, site internet, dépliants, papier à en-tête, cartes de visite... et il a respecté en touts points mes attentes en m'apportant au passage des informations très utiles pour le développement de ma communication. Je le recommande vivement. Merci Moha !"`,
            img: One,
        },
        {
            id: 2,
            name: 'Gabriel',
            project: 'Oratoris',
            content: `"J'ai fait appel à Moha Raouafi pour la refonte de mon logo, la réalisation de cartes de visite et de panneaux de signalisation. Je suis très satisfaite du résultat et ma clientèle a montré son enthousiasme. Chez Moha, j'ai particulièrement apprécié l'écoute, la sensibilité, le respect de mes souhaits, l'adaptabilité, la réactivité, la vigilance et la fluidité à mettre en œuvre les différents intervenants. Merci Moha Raouafi. `,
            img: Two,

        },
        {
            id: 3,
            name: 'Laurence',
            project: 'Victoria Infinity',
            content: `“De la création d'un site internet à celle d'un dépliant, Moha Raouafi sait mettre à notre service ses multiples compétences dans le travail : fiable, à l'écoute et d'excellent conseil, ses propositions sont d'une grande efficacité.”`,            img: Three,
        }
    ];
    // https://moharaouafi.fr/wp-json/wp/v2/posts
  return (
    <section className="flex justify-center mt-10 lg:mt-36 lg:mb-20 mx-6">
        <div class="absolute w-illustration" style={{left: '-180px', zIndex: -1000, marginBottom: '100px', marginTop: '100px'}}>
            <img src={BG} alt="illustration" style={{zIndex: -1000}}/>
        </div>
        <div className="block container">
            <div className="w-full flex flex-col lg:flex-row items-baseline">
                <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase" style={{fontFamily: `'Poppins', sans-serif`}}>Les avis clients</h1> 
                <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">
                    Leurs avis sont précieux !
                </span>
            </div>
            <div className="flex flex-wrap items-center my-10 lg:my-20">
            <Carousel >
            {Datas.map((data)=>{
                const {content, name, img, project, id} = data;
                return(
                    <Card key={id}>
                        <p> 
                            <i>
                                {content}
                            </i>
                        </p>
                        <Profile>
                            {/* <Img src={img} alt={img} /> */}
                            <About>
                                <H2>{name}</H2>
                                <Span>{project}</Span>
                            </About>
                        </Profile>
                    </Card>
                )
            })}
        </Carousel>
            </div>
        </div>
    </section>
  );
}
const Card = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
    opacity: 80%
`;

const Profile = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;
const Img = styled.img`
    width: 60px;
    height: 60px;
    margin: 10px;
`;

const About = styled.div`
    display: flex;
    flex-direction: column
`;

const H2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 0;
`;
const Span = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
`;
