import React from 'react';
import emailjs from 'emailjs-com';
import IMG from './../../assets/Image/Contact/plane.png'
import SectionHeader from './../SectionHeader';
import Address from './../Address';
import "./../../assets/css/tailwind.css";

export default function HeroTen() {
    const header = {
        one: 'Vous avez un projet en tête?',
        two: `N'hésitez pas à me faire part de votre projet pour qu'ensemble nous lui donnions vie !`
    }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ydkhg5c', 'template_jykovgr', e.target, 'user_0PSkAfEGIfVOCK5zvxcMY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
  return (
    <>
        <div id='contact' className="relative flex flex-wrap justify-center mx-6">
            <div className="block container lg:mt-10 mb-20">
                <SectionHeader header = { header } />
                <div style={{marginTop: 40, marginBottom: 40}}>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 addressz' style={{alignSelf: 'center'}}>
                            <div className="address-left">
                                <Address />
                            </div>
                        </div>
                        <form className='col-md-6 col-lg-4' onSubmit={sendEmail}>
                            <h2 style={{fontWeight: 700}} className="text-gray-600 text-2xl font-light text-center mb-10">Contactez-moi</h2> 
                            <div>
                                <div className="rounded-lg space-y-4 lg:w-contact-form">
                                    <div>
                                        <label className="sr-only">Nom</label> 
                                        <input id="name" name="name" type="text" required="required" placeholder="Nom" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                                    </div> 
                                    <div>
                                        <label className="sr-only">E-mail adresse</label> 
                                        <input id="email-address" name="email" type="email" autocomplete="email" required="required" placeholder="Email address" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                                    </div> 
                                    <div>
                                        <label className="sr-only">Message</label> 
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required="required" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm resize-none">
                                        </textarea>
                                    </div>
                                </div> 
                                <div className="mt-4">
                                    <input type="submit" placeholder="Envoyer" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" />
                                </div>
                            </div>
                        </form>
                        <div className='col-md-6 col-lg-4'  style={{alignSelf: 'center'}}>
                            <div className="hidden lg:block lg:ml-20 mt-10 lg:mt-0">
                                <img src={IMG} alt="submit" className="w-40 lg:w-60"/>
                            </div>
                            <div className="address-bottom" >
                                <Address />
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