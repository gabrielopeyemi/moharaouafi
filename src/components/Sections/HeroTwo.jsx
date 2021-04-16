import React from 'react'
import SectionHeader from './../SectionHeader';
import IMG from './../../images/img/moha.png';
import styled from 'styled-components'

export default function HeroTwo() {
    const header = {
        one: 'QUI JE SUIS',
        two: 'Graphiste et webdesigner créative'
    }
    const headertwo = {
        one: 'MOHA RAOUAFI',
        two: 'Nice, France'
    }
    return ( 
    <Div >
        <SectionHeader header = { header }/>
        <div className = 'row' >
            <div className = 'col-md-4' >
                <img className = 'img-fluid' src = { IMG } alt = 'mogh' />
            </div> 
            <div className = 'col-md-8' >
                <SectionHeader header = { headertwo }/>
                <P>Graphiste Freelance basé dans les Alpes-Maritimes, je mets à disposition mon savoir-faire et ma créativité.</P>
                <P>Diplômé des arts appliqués en Design et Graphisme Print, je réalise tout projet nécessitant la création d'un environnement graphique. Allant du simple logo aux grands formats (expo, stand, enseigne...) en passant par le web-design. </P>
                <P>Chaque projet est une création unique, en lien avec vos valeurs et votre activité, adapté à vos besoins en communication. Afin d’affiner votre demande, je suis en étroite collaboration avec des prestataires techniques tels que développeurs web, photographes professionnels, illustrateur.</P>
                <P>Outre la créativité, ma rigueur et ma réactivité sont également les atouts nécessaires à la bonne gestion d'un projet, du Brief client autour d’un café à la finalisation. </P>
            </div> 
        </div > 
    </Div>
    )
}

const P = styled.p`
    color: #6b7280;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
`;
const Div = styled.div`
    max-width: 1280px;
    width: 100%;   
    margin: 1.5rem 1.5rem 1.5rem 1.5rem;
`;