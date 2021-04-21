import React, { useState, useEffect } from 'react';
import '../styles/css/navbar.css';
import { Link } from 'gatsby';
import { userLinkDirect, sitename } from '../assets/data';
import {
  FaTimes,
  FaBars
} from 'react-icons/fa';
import LogoImage from './Logo'


const INavbar = (props) => {
  
    const [navbarOpen , setNavbarOpen ] = useState(false)
 

  

  return (
    <>
      <nav className="flex justify-center">
        <div className="relative flex items-center justify-between container my-6 mx-6">
          <a href="/" aria-current="page" className="router-link-exact-active router-link-active">
            {/* <img src="/images/logo.png?56846975d83dfd72b117c36f98fed657" alt="Logo" className="w-24 h-12"/> */}
            <LogoImage />
          </a> 
          <ul className="hidden lg:flex">
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <a href="#">Service</a>
            </li> 
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <a href="#">Portfolio</a>
            </li> 
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <a href="javascript:void">Blog</a>
            </li>
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <a href="#">Contact</a>
            </li> 
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <a href="/faq" className="">F.A.Q</a>
            </li>
          </ul> 
          <div className="lg:flex hidden">
          </div> 
          <div className="lg:hidden">
            <div right="" nooverlay="" closeonnavigation="true">
              <div>
                <div className="bm-menu" style={{left: 'auto', right: '0px', width: `${navbarOpen ? '300px': '0px'}`}}>
                  <nav className="bm-item-list">
                    <ul className="flex flex-col">
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <a href="#">Service</a>
                      </li> 
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <a href="#">Portfolio</a>
                      </li> 
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <a href="javascript:void">Blog</a>
                      </li> 
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <a href="#">Contact</a>
                      </li> 
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <a href="/faq" className="">F.A.Q</a>
                      </li>
                    </ul>
                  </nav>
                  <span className="bm-cross-button cross-style">
                    <FaTimes onClick={()=> setNavbarOpen(false)} style={{color: 'white'}}/>
                  </span>
                </div>
                <div style={{right: '250px', width: '30px', height: '30px'}}>
                  <FaBars onClick={() => setNavbarOpen(true)}  style={{color: 'white', left: 'auto', right: '36px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
  }

  export default INavbar