import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {
    DiNodejsSmall,
    DiReact,
    DiPhp,
    DiJavascript1,
    DiPython,
    DiJava,
    DiRuby
} from 'react-icons/di';
import {
    BsArrowRight
} from 'react-icons/bs'
export default function WhatWillDo() {
    return (
        <>
            <div className="what-we-do">
                <Container>
                    <Row>
                        <div className="col-md-8">
                            <div className="left-v5">
                                <div className="ot-heading">
                                    <span>
                                        // Experience. Execution. Excellence.
                                    </span>
                                    <h2 class="main-heading">What We Actually Do</h2>
                                </div>
                                <ul className="tech-wrap">
                                    <li className="text-box">
                                        <DiNodejsSmall />
                                    </li>
                                    <li className="text-box">
                                        <DiReact />
                                    </li>
                                    <li className="text-box">
                                        <DiPhp />
                                    </li>
                                    <li className="text-box">
                                        <DiPython />
                                    </li>
                                    <li className="text-box">
                                        <DiJava />
                                    </li>
                                    <li className="text-box">
                                        <DiJavascript1 />
                                    </li>
                                    <li className="text-box">
                                        <DiRuby />
                                    </li>
                                </ul>
                                <p>
                                Engitech is the partner of choice for many of the world’s 
                                leading enterprises, SMEs and technology challengers. We 
                                help businesses elevate their value through custom software 
                                development, product design, QA and consultancy services.
                                </p>
                                <a className='btn' href="#">
                                   <BsArrowRight /> HIRE US NOW
                                </a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
