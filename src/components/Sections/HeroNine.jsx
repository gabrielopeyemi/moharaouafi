import React from 'react';
import styled from 'styled-components';
import BGIMG from './../../assets/Image/DiscoveryCall/web.jpg'

export default function HeroNine() {
  return (
    <>
       <section className="flex flex-wrap justify-center mt-20 lg:mt-0 w-full bg-cover bg-discover-smartphone lg:bg-discover-laptop bg-dating text-white lg:pb-0 pt-10 mb-20">
           <div className="flex justify-center items-center flex-col text-center container mt-10 lg:py-4">
               <div className="my-6 mx-6 font-semibold uppercase text-xl">
                   Profitez d’un diagnostic gratuit de votre communication !
                </div> 
                <div className="mt-6 mx-6 font-medium uppercase text-lg">
                    Vous souhaitez faire évoluer vos supports de  communication, revoir votre image de marque ?
                </div> 
                <div className="mb-6 mx-6 font-medium uppercase text-lg">
                    Avez-vous pensé à faire un diagnostic gratuit de vos outils de communication?
                </div> 
                <div className="my-6 mx-6 font-light uppercase max-w-2xl">
                    Je vous propose un RDV gratuit de 1 heures pendant lequel nous analysons vos supports, votre image et vos objectifs.
                </div> 
                <a target="_blank" href="https://calendly.com/moharaouafi/diagnostic" className="flex items-center roup animation duration-300 ease-in-out relative lg:w-96 mb-20 hover:bg-opacity-90 uppercase justify-center my-10 py-3 px-4 text-sm font-medium rounded-md text-primary bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-100">
                    <svg viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" className="w-6 fill-current text-primary">
                        <g>
                            <g>
                                <path d="m344.572 342.658c-5.042-8.604-13.132-14.728-22.782-17.246-9.651-2.52-19.702-1.129-28.304 3.914l-49.766 29.162c-4.605 2.7-9.986 3.445-15.151 2.097s-9.497-4.627-12.225-9.28l-86.088-144.433c-2.699-4.606-3.444-9.987-2.096-15.152 1.348-5.166 4.626-9.497 9.232-12.196l49.761-29.17h.001c8.603-5.042 14.727-13.133 17.245-22.783 2.518-9.649 1.128-19.701-3.915-28.303l-47.352-80.798c-5.043-8.603-13.133-14.727-22.783-17.245-9.649-2.518-19.702-1.127-28.303 3.915l-34.04 19.95c-31.867 18.676-54.081 50.22-60.947 86.543-.768 4.063 1.903 7.98 5.965 8.747 4.066.767 7.98-1.902 8.747-5.965 5.811-30.737 24.069-57.599 50.344-74.294l69.933 119.32-12.225 7.165c-8.057 4.722-13.792 12.298-16.149 21.333-2.358 9.034-1.056 18.447 3.693 26.55l86.088 144.434c9.749 16.631 31.208 22.228 47.837 12.482l12.225-7.165 69.933 119.32c-53.119 28.649-120.042 10.218-150.817-42.292l-147.332-248.924c-8.288-14.139-13.313-29.508-14.937-45.678-.413-4.114-4.073-7.111-8.198-6.701-4.114.413-7.114 4.083-6.701 8.198 1.841 18.328 7.533 35.74 16.934 51.779l147.331 248.926c23.755 40.53 66.54 63.132 110.438 63.132 21.929 0 44.14-5.643 64.386-17.509l34.04-19.951c8.604-5.042 14.728-13.132 17.246-22.782 2.518-9.648 1.128-19.7-3.914-28.303zm-236.4-270.627-23.176-39.543 24.621-14.43c5.153-3.021 11.172-3.851 16.952-2.345 5.78 1.508 10.625 5.176 13.645 10.329l47.354 80.798c3.021 5.153 3.853 11.173 2.345 16.952-1.508 5.78-5.176 10.625-10.329 13.645l-24.62 14.43zm273.181 375.947c-1.508 5.779-5.176 10.624-10.329 13.644l-24.621 14.431-69.967-119.379 24.62-14.43c5.154-3.02 11.175-3.852 16.953-2.344 5.78 1.508 10.625 5.176 13.645 10.329l47.354 80.797c3.021 5.152 3.853 11.172 2.345 16.952z"></path><path d="m469.01 64.824c-23.985-23.802-55.732-36.874-89.498-36.874-.331 0-.666.002-.996.004-69.622.529-126.181 57.614-126.082 127.25.066 46.49 25.341 88.983 66.068 111.301v27.242c0 4.824 2.721 9.079 7.099 11.104 1.668.771 3.426 1.149 5.168 1.149 2.83 0 5.614-.998 7.889-2.932l25.735-21.875c25.453 3.022 51.583-1.79 74.053-13.575 3.661-1.92 5.073-6.445 3.153-10.107s-6.447-5.071-10.107-3.152c-15.913 8.345-33.891 12.757-51.99 12.757-4.781 0-9.617-.309-14.372-.918-3.433-.441-6.898.583-9.513 2.804l-22.142 18.821v-22.955c0-4.533-2.482-8.668-6.479-10.792-36.697-19.495-59.53-57.388-59.589-98.893-.087-61.432 49.807-111.79 111.222-112.257.294-.003.586-.004.879-.004 29.788 0 57.797 11.533 78.955 32.53 21.368 21.206 33.136 49.463 33.136 79.567 0 30.381-11.955 58.823-33.662 80.085-2.954 2.893-3.003 7.634-.11 10.587 2.894 2.953 7.633 3.003 10.587.11 24.607-24.103 38.158-56.343 38.158-90.782.001-34.124-13.339-66.156-37.562-90.195z"></path><path d="m436.418 104.125h-113.828c-4.135 0-7.486 3.351-7.486 7.486s3.351 7.486 7.486 7.486h113.828c4.135 0 7.486-3.351 7.486-7.486s-3.351-7.486-7.486-7.486z"></path><path d="m436.418 147.47h-61.725c-4.135 0-7.486 3.351-7.486 7.486s3.351 7.486 7.486 7.486h61.725c4.135 0 7.486-3.351 7.486-7.486s-3.351-7.486-7.486-7.486z"></path><path d="m322.59 162.443h17.249c4.135 0 7.486-3.351 7.486-7.486s-3.351-7.486-7.486-7.486h-17.249c-4.135 0-7.486 3.351-7.486 7.486s3.351 7.486 7.486 7.486z"></path><path d="m322.59 205.788h113.828c4.135 0 7.486-3.351 7.486-7.486s-3.351-7.486-7.486-7.486h-113.828c-4.135 0-7.486 3.351-7.486 7.486-.001 4.135 3.351 7.486 7.486 7.486z">
                                </path>
                            </g>
                        </g>
                    </svg> 
                    <span className="ml-3">
                        Réserver un appel gratuit
                    </span>
                </a>
            </div>
        </section>
    </>
  );
}


const Div = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    padding-bottom: 3.5rem;
    text-transform: uppercase;
    background-repeat: no-repeat;
    background-position: 50% 50%; 
    /* color: white; */

`;

const Header = styled.h1`
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 1.5rem;
    font-weight: 600;
    color: #fff;
`;

const SpanOne = styled.p`
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    margin: 1.5rem;
`;

const Svg = styled.svg`
    width: 1.5rem;
    color: #61b38c !important;
`

const SpanTwo = styled.p`
    color: #fff;
    text-align: center;
    margin: 1.5rem;
`;

const Button = styled.a`
    text-align: center;
    color: #61b38c;
    background-color: #fff !important;
    border-color: #fff !important;
    &:hover{    
        color: #61b38c;
    }
`;