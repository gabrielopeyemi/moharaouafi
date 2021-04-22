import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {ENavbar} from "../components/Navigation";

export class FAQ extends Component {
    render() {
        return (
            <>
                <header style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
                    <ENavbar />
                </header>
                <div className='justify-center mt-10 lg:mt-36 lg:mb-20 mx-6'>
                    <div className='block container'>
                        <div class="w-full flex flex-col justify-center lg:flex-row items-baseline">
                            <h1 class="text-gray-600 text-2xl lg:text-5xl font-bold uppercase">Foire aux questions</h1>
                        </div>
                        <AccordionDiv />
                    </div>
                </div>
            </>
        );
    }
}


const AccordionDiv = () =>{
    const Data =[
        {
            id: 0,
            num: '0',
            head: 'Pourquoi faire appel à un graphiste freelance ? ',
            content: `En faisant le choix de travailler avec un graphiste freelance, vous n'aurez qu'une seule personne en contact permanent avec vous par mail ou par téléphone. De ce fait, nous évitons la perte d'informations et de temps par des intermédiaires. Travaillant seul, le graphiste freelance n'a pas d'horaires fixes, il établit son emploi du temps en fonction de sa charge de travail, contrairement aux agences qui ont des salariés ayant des horaires de bureaux. Ayant moins de charges qu'une grande structure, ses prix sont donc plus compétitifs sans pour autant négliger la qualité de son travail . Enfin, le graphiste freelance est là pour vous apporter des solutions et vous satisfaire rapidement. Il est un véritable professionnel passionné et curieux en veille permanente des nouvelles tendances. La satisfaction du client est pour lui sa priorité. `,

        },
        {
            id: 1,
            num: '1',
            head: 'Je souhaite travailler avec vous pour ma communication, comment procéder ?',
            content: `ER CONTACT : Discutons de votre projet l Nous évaluons ensemble vos besoins puis je vous envoie un devis adapté à votre demande Un acompte vous sera également demandé au début de la prestation. PLANNING: Je vous propose un planning récapitulatif des étapes clés du projet. Un projet, selon son envergure et mon planning, peut demander 1 à 2 mois pour se concrétiser, il est donc nécessaire de me contacter avec un peu d'avance. CRÉATION : Je commence par préparer plusieurs propositions de visuels que je vous présente. La piste sélectionnée est finalisée selon vos retours, afin de correspondre parfaitement à vos attentes. FINALISATION : Place à la finalisation des fichiers l Une fois la création validée je vous fournis les fichiers dans des formats adaptés à vos besoins (logos vectorisés, pdf pour les fichiers à imprimer...). `,

        },
        {
            id: 2,
            num: '2',
            head: 'Je cherche un graphiste freelance mais je ne suis pas de la région, pouvons nous travailler ensemble ?',
            content: `Habitant proche de NICE (12 Boulevard de Cessole), je travaille avec des clients de la France entière. Ce n'est donc pas un obstacle pour travailler ensemble. Les échanges se feront alors essentiellement par mail ou par téléphone. Vous serez ainsi informé régulièrement de l'avancé du projet que vous soyez à 5km ou à 800km de NICE.`,

        },
        {
            id: 3,
            num: '3',
            head: 'Combien coûte un graphiste freelance ? ',
            content: `Chaque projet est différent avec ses spécificités qui lui est propre, je ne peux donc pas vous donner de grille tarifaire. En effet, chaque devis est tarifé en fonction du cahier des charges que vous me transmettrez. Sachez enfin qu'à titre d'information, un graphiste freelance est payé aux environs de 300 € / jour`,

        },
        {
            id: 4,
            num: '4',
            head: 'Quels sont les délais de création ?',
            content: `Les délais de création dépendent de la taille du projet. Je m'engage toutefois à ce que la création graphique soit terminée au maximum dans les 5 jours pour les petits projets et 15 jours pour les plus gros projets après validation du devis et du cahier des charges. `,

        },
        {
            id: 5,
            num: '5',
            head: 'Quelles sont les informations à donner dans le cahier des charges ?',
            content: `Afin de faciliter la communication ainsi que la compréhension je me base sur votre cahier des charges. Pour tous vos projets de création de logo, flyer, plaquette commerciale etc... Celui-ci doit être composé de plusieurs éléments: - Les objectifs - La cibles - Les concurrents - Les spécifications techniques - Le délais Si la tâche vous paraît compliquée, pas d'inquiétude, nous le remplissons ensemble et gratuitement.`,

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
            head: `Comment s'effectue le paiement de vos prestations ?`,
            content: `Le paiement s'effectue soit par virement bancaire, soit par des paiements en ligne ( PAYPAL, STRIPE... ). `,

        },
        {
            id: 8,
            num: '8',
            head: `L'impression des fichiers est-elle prise en charge ?`,
            content: `J'ai l'habitude de travailler en collaboration avec un imprimeur, avec lequel j'ai des tarifs préférentiels. Toutefois il est de votre droit de demander les fichiers numériques et de choisir vous même votre imprimeur.`,

        },
        {
            id: 9,
            num: '9',
            head: `Faites vous des mises à jour de logo ?`,
            content: `Effectivement cela s'appelle une refonte de logo. Cela vous permet de conserver votre image de marque tout en restant dans les tendances graphiques actuelles. Il est conseillé de faire un refont de logo tous les 3 ans. `,

        },
    ]
    return(
        <div className='my-10 lg:my-20'>
            <Accordion>
                {Data.map((data, i)=>(
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={data.num} style={{padding: '30px'}}>
                            {data.head}
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={data.num}>
                            <Card.Body>{data.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    )
}
export default FAQ;