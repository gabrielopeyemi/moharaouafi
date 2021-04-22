import React from 'react';
import styled from 'styled-components';
import IMG from './../../assets/Image/Contact/plane.png'
import SectionHeader from './../SectionHeader'
import "./../../assets/css/tailwind.css";

export default function HeroTen() {
    const header = {
        one: 'Vous avez un projet en tête?',
        two: `N'hésitez pas à me faire part de votre projet pour qu'ensemble nous lui donnions vie !`
    }
  return (
    <>
        <div id='contact' className="relative flex flex-wrap justify-center mx-6">
            <div className="block container lg:mt-10 mb-20">
                <SectionHeader header = { header } />
                <div style={{marginTop: 40, marginBottom: 40}}>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4' style={{alignSelf: 'center'}}>
                            <div className="text-primary">
                                <div className="flex flex-col">
                                    <div>
                                        <h1 className="uppercase font-bold">Email:</h1> 
                                        <span className="font-light">Contact@Moharaouafi.fr</span>
                                    </div> 
                                    <div>
                                        <h1 className="uppercase font-bold">Téléphone:</h1> 
                                        <span>06.26.52.02.09</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="text-primary">
                                <h1 className="uppercase font-bold">Address:</h1> 
                                <span>12 Boulevard de Cessole Nice</span> <br/>
                                <span>Provence-Alpes-Côte d'Azur</span>  <br/>
                                <span>06000 Nice</span>
                            </div> 
                        </div>
                        <div className='col-md-6 col-lg-4'>
                            <h2 className="text-gray-600 text-2xl font-light text-center mb-10">Contacter moi</h2> 
                            <div>
                                <div className="rounded-lg space-y-4 lg:w-contact-form">
                                    <div>
                                        <label  className="sr-only">Nom</label> 
                                        <input id="name" name="name" type="text" required="required" placeholder="Nom" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                                    </div> 
                                    <div>
                                        <label className="sr-only">Email address</label> 
                                        <input id="email-address" name="email" type="email" autocomplete="email" required="required" placeholder="Email address" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                                    </div> 
                                    <div>
                                        <label className="sr-only">Message</label> 
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required="required" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm resize-none">
                                        </textarea>
                                    </div>
                                </div> 
                                <div className="mt-4">
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4'  style={{alignSelf: 'center'}}>
                            <div className="hidden lg:block lg:ml-20 mt-10 lg:mt-0">
                                <img src={IMG} alt="submit" className="w-40 lg:w-60"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center container mt-8">
                    <div className="w-full flex flex-wrap justify-center container">
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 1099px;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    flex-wrap: wrap;
`;

const H2 = styled.h2`
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
    color: grey;
`;

const Form = styled.div`
    width: 50%;
    padding: 0 20px 0 20px
`;

const Textarea = styled.textarea`
    height: 300px !important;
`;

const Img = styled.img`
    width: 17rem;
    padding: 30px;
`;
const Input = styled.input`
    width: 100%
`;

const Button = styled.a`
    background-color: #61b38c;
    color: white;
    &:hover{
        color: white;
    }
`

const AddressDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 1098px;
    margin: auto;
    color: #61b38c;
`;
const DivA = styled.div`
    margin: 2rem;
    width: 25%;
`;

const H1 = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    color: #6dbd8f !important;
`;
const Span = styled.span`

`;