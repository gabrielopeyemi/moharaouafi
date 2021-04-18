import React from 'react';
import IMG from './../../images/img/polaroid-ordinateur.jpg'
export default function Herofour() {
  return (
    <div className='row'>
        <div className='col-12'>
          <img src={IMG} alt='img' style={{width: '100%'}}/>
        </div>
    </div>
  );
}
