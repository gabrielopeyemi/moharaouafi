import React from 'react'
import {
    AiOutlineGlobal,
    AiOutlineApple,
    AiOutlineAndroid,
    AiOutlineDesktop
} from 'react-icons/ai';
export default function OurServices() {
    return (
        <>
            <div class="container">
                <div className="our-service-section">
                    <div className="row">
                        <div className="col-12 text-center text--uppercase">
                            <div className="ot-heading">
                                <span>// our service</span>
                                <h2 className="main-heading">We Offer a Wide <br/> Variety of IT Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="box-container">
                                <div className="box-icon">
                                    <AiOutlineGlobal/>
                                </div>
                                <div className="box-text">
                                    web
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="box-container">
                                <div className="box-icon">
                                    <AiOutlineAndroid/>
                                </div>
                                <div className="box-text">
                                    andriod
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="box-container">
                                <div className="box-icon">
                                    <AiOutlineApple/>
                                </div>
                                <div className="box-text">
                                    ios
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="box-container">
                                <div className="box-icon">
                                    <AiOutlineDesktop/>
                                </div>
                                <div className="box-text">
                                    desktop
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
