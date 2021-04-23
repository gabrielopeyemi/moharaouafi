import React from 'react';

//Image
import One from '../../assets/Image/NumberedIcon/Icone-1.png';
import Two from '../../assets/Image/NumberedIcon/Icone-2.png';
import Three from '../../assets/Image/NumberedIcon/Icone-3.png';
import Four from '../../assets/Image/NumberedIcon/Icone-4.png';



export default function HeroSeven() {
    const Data = [
        {
            id: 1,
            img: One,
            title: '1er Contact',
            content: 'Discutons de votre projet ! Nous évaluerons ensemble vos besoins puis je vous enverrai un devis adapté à votre demande (clair et détaillé). Un acompte vous sera également demandé au début de la prestation.'
        },
        {
            id: 2,
            img: Two,
            title: 'Planning',
            content: 'Je vous propose un planning récapitulatif des étapes clés du projet. Un projet, selon son envergure et mon planning, peut demander 1 à 2 mois pour se concrétiser, il est donc nécessaire de me contacter avec un peu d’avance.'
        },
        {
            id: 3,
            img: Three,
            title: 'Création',
            content: 'Place aux différentes propositions selon vos requêtes ! Différents visuels vous seront proposés. A force d’échanges, la piste sélectionnée est finalisée selon vos retours, afin de correspondre parfaitement à vos attentes.',
        },
        {
            id: 4,
            img: Four,
            title: 'Finalisation',
            content: 'L’étape ultime ! la concrétisation du projet ! Une fois la création validée, je vous fournis les fichiers dans un panel de formats adaptés à vos besoins.'
        }
    ]
  return (
    <>
        <section className="flex justify-center mx-6 sm:mt-10 lg:mt-40">
           <div className="block container">
               <div className="w-full flex flex-col lg:flex-row items-baseline mb-10">
                   <h1 className="text-gray-600 text-2xl lg:text-6xl font-bold uppercase">Les différentes étapes</h1> 
                   <span className="text-base lg:text-2xl font-semibold lg:ml-4 mt-2 text-primary">Déroulement d'un projet</span>
                </div> 
                <div className="flex flex-wrap justify-between w-full mt-10 lg:my-8">
                    {Data.map((data, i)=>(
                        <div className="w-full lg:w-6/12 flex justify-center">
                            <div className="w-96 pr-6 py-6 lg:p-6 lg:hover:shadow-md">
                                <img src={data.img} alt={data.img} className="h-30"/> 
                                <h2 className="text-gray-500 font-semibold text-xl uppercase">{data.title}</h2> 
                                <p className="text-gray-600 text-base mt-6">
                                     {data.content}
                                </p>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}

// const Card = (props) => {
//     const { img, content, title }= props.data;
//     console.log({props})
//     return(
//         <div classNameName='col-md-6'>
//             <Div classNameName="card">
//                 {/* <Img src={image} classNameName="img-thumbnail" alt={image}/> */}
//                 <div classNameName="card-body"> 
//                     <Img src={img} alt={img} />
//                     <CardHeader classNameName="card-title">{title}</CardHeader>
//                     <Paragraph classNameName="card-text">{content}</Paragraph>
//                     {/* <a href="#" classNameName="btn btn-primary">Go somewhere</a> */}
//                 </div>
//             </Div>
//         </div>
//     )
// }
