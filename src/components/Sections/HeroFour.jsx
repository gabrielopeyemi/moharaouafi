import React from 'react';
import IMG from './../../images/img/polaroid-ordinateur.jpg'
export default function Herofour() {
  return (
    <div>
      <img src={IMG} alt="polaroid-ordinateur.jpg" class="hidden lg:block bg-cover select-none"/> 
      <img src={IMG} alt="polaroid-mobile.jpg" class="block lg:hidden bg-cover select-none"/>
    </div>
  );
}
