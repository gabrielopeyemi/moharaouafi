import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {ENavbar} from "../components/Navigation";
import HeadOne from './../components/HeadOne';
import Layout from './../components/layout';
import SEO from "../components/seo";
export class FAQ extends Component {
    render() {
        return (
            <Layout>
                <HeadOne Title='FOIRE AUX QUESTION'/>
                <div className='justify-center mt-10 lg:mt-36 lg:mb-20 mx-6'>
                    <div className='block container'>
                        <AccordionDiv />
                    </div>
                </div>
            </Layout>
        );
    }
}


const AccordionDiv = () =>{
    const Data = [
        {
            id: 0,
            num: '0',
            head: 'Pourquoi faire appel à un graphiste freelance ? ',
            content: `En faisant le choix de travailler avec un graphiste freelance, vous n'aurez qu'une seule personne en contact permanent avec vous par mail ou par téléphone. De ce fait, nous évitons la perte d'informations et de temps par des intermédiaires. `,
            contentTwo: `Travaillant seul, le graphiste freelance n'a pas d'horaires fixes, il établit son emploi du temps en fonction de sa charge de travail, contrairement aux agences qui ont des salariés ayant des horaires de bureaux. `,
            contentThree: `Ayant moins de charges qu'une grande structure, ses prix sont donc plus compétitifs sans pour autant négliger la qualité de son travail. Enfin, le graphiste freelance est là pour vous apporter des solutions et vous satisfaire rapidement. Il est un véritable professionnel passionné et curieux en veille permanente des nouvelles tendances. `,
            contentFour: `La satisfaction du client est pour lui sa priorité.`,

        },
        {
            id: 1,
            num: '1',
            head: 'Je souhaite travailler avec vous pour ma communication, comment procéder ?',
            content: `PREMIER CONTACT : Discutons de votre projet ! Nous évaluons ensemble vos besoins puis je vous envoie un devis adapté à votre demande Un acompte vous sera également demandé au début de la prestation.`,
            contentTwo: `PLANNING : Je vous propose un planning récapitulatif des étapes clés du projet. Un projet, selon son envergure et mon planning, peut demander 1 à 2 mois pour se concrétiser, il est donc nécessaire de me contacter avec un peu d'avance.`, 
            contentThree: `CRÉATION : Je commence par préparer plusieurs propositions de visuels que je vous présente. La piste sélectionnée est finalisée selon vos retours, afin de correspondre parfaitement à vos attentes.`,  
            contentFour: `FINALISATION : Place à la finalisation des fichiers l Une fois la création validée je vous fournis les fichiers dans des formats adaptés à vos besoins (logos vectorisés, pdf pour les fichiers à imprimer...).`,

        },
        {
            id: 2,
            num: '2',
            head: 'Je cherche un graphiste freelance mais je ne suis pas de la région, pouvons nous travailler ensemble ?',
            content: `Habitant à Nice (12 Boulevard de Cessole), je travaille avec des clients de la France entière. Ce n'est donc pas un obstacle pour travailler ensemble. Les échanges se feront alors essentiellement par mails ou par téléphone. Vous serez ainsi informé régulièrement de l'avancé du projet que vous soyez à 5 kilomètres ou à 800 kilomètres de Nice.`,

        },
        {
            id: 3,
            num: '3',
            head: 'Combien coûte un graphiste freelance ? ',
            content: `Chaque projet est différent avec ses spécificités qui lui est propre, je ne peux donc pas vous donner de grille tarifaire. En effet, chaque devis est tarifé en fonction du cahier des charges que vous me transmettrez. Sachez enfin qu'à titre informatif, un graphiste freelance est payé aux environs de 300 €/jour.`,

        },
        {
            id: 4,
            num: '4',
            head: 'Quels sont les délais de création ?',
            content: `Les délais de création dépendent de la taille du projet. Je m'engage toutefois à ce que la création graphique soit terminée au maximum dans les 5 jours pour les petits projets et 15 jours pour les plus gros projets après validation du devis et du cahier des charges.`,

        },
        {
            id: 5,
            num: '5',
            head: 'Quelles sont les informations à donner dans le cahier des charges ?',
            content: `Afin de faciliter la communication ainsi que la compréhension, je me base sur votre cahier des charges. Pour tous vos projets de création de logo, flyer, plaquette commerciale et autres; celui-ci doit être composé de plusieurs éléments :`,
            contentTwo: `- Les objectifs`, 
            contentThree: `- La cible`,
            contentFour: `- Les concurrents`,
            contentSix: `- Les spécifications techniques`,
            contentSeven: `- Le délais`,
            contentEight: `Si la tâche vous paraît compliquée, pas d'inquiétude, nous le remplirons ensemble et gratuitement.`,
        },
        {
            id: 6,
            num: '6',
            head: 'Combien de modifications puis-je demander ? ',
            content: `Le nombre de modifications est illimité. Le premier round de modification est offert. Pour les rounds suivant le tarif varie en fonction de la création graphique demandée. Il n'y a pas de limite au nombre de modifications que vous demandez par round. Le but du fonctionnement par round est de clarifier la communication pour les modifications.`,

        },
        {
            id: 7,
            num: '7',
            head: `Quels sont les moyens de paiement ?`,
            content: `Sur la plupart des projets, je demande un acompte de 30% avant de planifier le travail. Cette avance est versée par l’intermédiaire d’un virement bancaire (d’autres options de paiement sont possibles sur demande).`,

        },
        {
            id: 8,
            num: '8',
            head: `L'impression des fichiers est-elle prise en charge ?`,
            content: `J'ai l'habitude de travailler en collaboration avec un imprimeur, avec lequel des tarifs préférentiels. Toutefois, il est de votre droit de demander les fichiers numériques et de choisir vous même votre imprimeur.`,

        },
        {
            id: 9,
            num: '9',
            head: `Faites vous des mises à jour de logo ?`,
            content: `Effectivement, cela s'appelle une refonte de logo. Cela vous permet de conserver votre image de marque tout en restant dans les tendances graphiques actuelles. Il est conseillé de faire une refonte de logo tous les 3 ans.`,

        },
    ]
    return(
        <div className='my-10 lg:my-20'>
            <SEO title="FAQ - Moha Raouafi" keywords={[`Graphiste freelance print & web • la …`]} />
            <Accordion>
                {Data.map((data, i)=>(
                    <Card style={{ margin: '10px'}}>
                        <Accordion.Toggle as={Card.Header} eventKey={data.num} style={{padding: '30px'}}>
                            {data.head}
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={data.num}>
                            <Card.Body>
                                <Paragraph>
                                    {data.content}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentTwo}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentThree}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentFour}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentFive}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentSix}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentSeven}
                                </Paragraph>
                                <Paragraph>
                                    {data.contentEight}
                                </Paragraph>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    )
}

const Paragraph = styled.p`
    margin: 10px 0;
`;
export default FAQ;
