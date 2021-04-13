import React from 'react'
import img from "./../../assets/Image/mac.png";

export default function HeroOne() {
    return (
        <>
        <section className="bg-home bg-home-4" id="home">
            <div className="bg-overlay"></div>
                <div class="wave wave1"></div>
                <a id="video" className="player" data-property="{videoURL:'http://youtu.be/dwfjayxRvqw',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="home-img">
                                        <img src={img} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="home-content">
                                        <h1 className="home-title text-white text-center">UNE QUESTION, UN PROJET ?</h1>
                                        <p className="text-white mt-3 f-20  text-center">Basée sur nice, nous pouvons nous rencontrer autour d’un café pour discuter de votre projet ou par email si vous vous trouvez en dehors de nice</p>
                                        
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
