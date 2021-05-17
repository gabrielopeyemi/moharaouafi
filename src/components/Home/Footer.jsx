import React from 'react';
import styled from 'styled-components';
import '../../styles/css/main.css'
import LogoImage from '../Logo';
import artstationIcon from './../../assets/icon/artstation.png';



export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 px-6 lg:px-8 py-12 relative">
            <div className="max-w-screen-xl mx-auto mb-6 lg:mb-8 flex items-center justify-between">
                <LogoImage /> 
                <a href="#" className="flex items-center">
                    <span>Aller en haut</span> 
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18">
                        </path>
                    </svg>
                </a>
            </div> 
            <div className="max-w-screen-xl mx-auto border-t-2 border-gray-700 pt-8 space-y-10">
                <div className="md:grid md:grid-cols-5 space-y-2 md:space-y-0">
                    <div className="md:col-span-1 py-1 md:pr-4 md:border-r-2 md:border-gray-700">
                        <h5 className="text-xl font-bold text-white leading-none">Newsletter</h5>
                    </div> 
                    <div className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
                        <form action="#" className="flex items-center justify-between">
                            <input id="email-address" name="email" type="email" required="required" autocomplete="email" placeholder="Email address" className="w-10/12 mr-2 appearance-none bg-transparent rounded-md relative block px-3 py-2 border border-gray-300 placeholder-gray-500 focus:ring-1 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/> 
                            <button type="submit" className="w-2/12 group relative flex justify-center py-2 px-10 text-sm font-medium rounded-md focus:border-gray-800 text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div> 
                <div className="md:grid md:grid-cols-5 space-y-2 md:space-y-0">
                    <div className="md:col-span-1 py-1 md:pr-4 md:border-r-2 md:border-gray-700">
                        <h5 className="text-xl font-bold text-white leading-none">Suivez-moi</h5>
                    </div> 
                <nav className="col-span-4 col-start-2 md:pl-12 lg:pl-24">
                    <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-12">
                        <li>
                            <a target="_blank" href="https://www.artstation.com/moharaouafi" className="flex space-x-2 font-normal text-base hover:text-gray-200">
                                <Img src={artstationIcon} alt={artstationIcon} />
                                <span>Artstation</span>
                            </a>
                        </li> 
                        <li>
                            <a target="_blank" href="https://www.instagram.com/moharaouafi" className="flex space-x-2  font-normal text-base hover:text-gray-200">
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd">
                                    </path>
                                </svg> 
                                <span>Instagram</span>
                            </a>
                        </li> 
                        <li>
                            <a target="_blank" href="#" className="flex space-x-2  font-normal text-base hover:text-gray-200">
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd">
                                    </path>
                                </svg> 
                                <span>Facebook</span>
                            </a>
                        </li> 
                        <li>
                            <a target="_blank" href="https://www.behance.net/moharaouafi" className="flex space-x-2  font-normal text-base hover:text-gray-200">
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z">
                                    </path>
                                </svg> 
                                <span>Behance</span>
                            </a>
                        </li> 
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/moha-raouafi" className="flex space-x-2  font-normal text-base hover:text-gray-200">
                                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                    </path>
                                </svg> 
                                <span> Linkedin</span>
                            </a>
                        </li>
                        </ul>
                    </nav>
                </div>
            </div> 
            <div className="max-w-screen-xl mx-auto  space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-700 pt-8 ">
                <p className="text-sm text-center md:text-left">Créatif et attentif aux dernières tendances, je façonne vos supports de communication papier en créant un graphisme innovant tout en vous accompagnant dans votre projet</p>          
                <P className="text-sm text-center md:text-left">© Moha Raouafi – Tous droits réservés | <a href='https://docs.google.com/document/d/1MkduyztnskBDZnGJ67kF2YWlFbqxt-bKJJP7fEotkk8/edit?usp=sharing'>Mentions légales</a> | <a href='https://docs.google.com/document/d/1RVk2i3QdPIgwNH9K-nT-lm-jans-lr0eguRDBCPzSes/edit?usp=sharing'>CGV</a> </P>
            </div>
        </footer> 
    )
}


const Img = styled.img`
    width: 20px;
    height: 20px;
`;

const P = styled.p`
    font-weight: 800
   
`;