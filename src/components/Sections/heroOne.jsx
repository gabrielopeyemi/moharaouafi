import React from 'react'
import img from "./../../assets/Image/mac.png";
import INavbar from '../Navigation'

export default function HeroOne() {
    return (
        <header clasName='w-full' style={{backgroundImage: 'linear-gradient(#7dce93, #59aa8a)'}}>
        <INavbar />
        <section className="bg-home bg-home-4" id="home">
            <div className="bg-overlay"></div>
                <div class="wave wave1"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="home-img">
                                        <img src={img} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="w-full lg:w-6/12 flex flex-col items-center text-center py-10">
                                        <h1 style={{lineHeight: 1.2}} className="my-2 text-white text-xl lg:text-3xl leading-10 uppercase font-medium lg:font-medium">VOUS CHERCHEZ À VOUS <br/> DÉMARQUER DE VOS CONCURRENTS ?</h1>
                                        <p className="mt-6 text-white text-base lg:text-2xl uppercase font-light">OPTEZ POUR UNE IDENTITÉ VISUELLE ATTRAYANTE ET EFFICACE
MES RÉALISATIONS</p>                    <button className='mt-10 bg-transparent border-2 border-white rounded-full py-3 px-4 text-white text-sm uppercase font-medium focus:outline-none hover:bg-white hover:text-green-600 transition duration-300'>MES RÉALISATIONS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </header>
    )
}
