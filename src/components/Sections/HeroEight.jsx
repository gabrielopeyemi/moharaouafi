import React from 'react';
import SectionHeader from './../SectionHeader'
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import One from  './../../assets/Image/test/profil-1.png'
import Two from './../../assets/Image/test/profil-2.png'
import Three from './../../assets/Image/test/profil-3.png'



export default function HeroEight() {
    const Header = {
        one: "Les avis clients",
        two: "Leurs avis sont précieux !"
    }
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

    ]

    // https://moharaouafi.fr/wp-json/wp/v2/posts

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
    <Div className='justify-center mt-10 lg:mt-36 lg:mb-20 mx-6'>
        <SectionHeader header = { Header } />
        <Carousel >
            {Datas.map((data, i)=>{
                const {content, name, img, project, id} = data;
                return(
                    <Card key={id}>
                        <p>
                            {content}
                        </p>
                        <Profile>
                            <Img src={img} alt={img} />
                            <About>
                                <H2>{name}</H2>
                                <Span>{project}</Span>
                            </About>
                        </Profile>
                    </Card>
                )
            })}
        </Carousel>
    </Div>
  );
}

const Div = styled.div`
    background-image: url('./../../assets/Image/Avis/ok.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50px 150px; 
`;

const Card = styled.div`
    margin: 20px;
    padding: 20px;
    background-color: #e3e3e3;
    border-radius: 10px;
    box-shadow: var(#000000, 0 0 #0000), var(#000000, 0 0 #0000), var(#000000);
`;

const Profile = styled.div`
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