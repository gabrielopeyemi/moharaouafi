import React from 'react';
import polaroidPC from './../../assets/Image/Polaroid/polaroid-ordinateur-PC.jpg'
import polaroidMobile from './../../assets/Image/Polaroid/polaroid-mobile-MOBILE.jpg'
export default function Herofour() {
  return (
    <div>
      <img src={polaroidPC} alt="polaroid-ordinateur.jpg" class="hidden lg:block bg-cover select-none"/> 
      <img src={polaroidMobile} alt="polaroid-mobile.jpg" class="block lg:hidden bg-cover select-none"/>
    </div>
  );
}
