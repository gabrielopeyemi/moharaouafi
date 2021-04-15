import React from 'react'
import img from "./../../assets/Image/mac.png";

export default function HeroOne() {
    return (
        <>
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
                                    <div className="home-content">
                                        <h1 className="home-title text-white text-center">UNE QUESTION, UN PROJET ?</h1>
                                        <p className="text-white mt-3 f-20  text-center uppercase
                                        ">Basée sur nice, nous pouvons nous rencontrer autour d’un café pour discuter de votre projet ou par email si vous vous trouvez en dehors de </p>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
