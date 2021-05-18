import React, { useState } from 'react';
import '../styles/css/navbar.css';
import { Link } from 'gatsby';
import {
  FaTimes
} from 'react-icons/fa';
import LogoImage from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BarsIcons} from './Icons'

const INavbar = () => {
  
    const [navbarOpen , setNavbarOpen ] = useState(false)
    return (
      <>
        <nav className="flex justify-center">
          <div className="relative flex items-center justify-between container my-6 mx-6">
            <Link to="/" aria-current="page" className="router-link-exact-active router-link-active">
              <LogoImage />
            </Link> 
            <ul className="hidden lg:flex">
              <li className="uppercase mx-5 text-white font-medium text-lg">
                <Link to="/">Service</Link>
              </li> 
              <li className="uppercase mx-5 text-white font-medium text-lg">
                <Link to="/">Portfolio</Link>
              </li> 
              <li className="uppercase mx-5 text-white font-medium text-lg">
                <Link to="/blogs">Blog</Link>
              </li>
              <li className="uppercase mx-5 text-white font-medium text-lg">
                <Link to="/">Contact</Link>
              </li> 
              <li className="uppercase mx-5 text-white font-medium text-lg">
                <Link to="/faq" className="">F.A.Q</Link>
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
                          <Link to="/">Service</Link>
                        </li> 
                        <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                          <Link to="/">Portifolio</Link>
                        </li> 
                        <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                          <Link to="/blogs">Blog</Link>
                        </li> 
                        <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                          <Link to="/">Contact</Link>
                        </li> 
                        <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                          <Link href="/faq" className="">F.A.Q</Link>
                        </li>
                      </ul>
                    </nav>
                    <span className="bm-cross-button cross-style">
                      <FaTimes onClick={()=> setNavbarOpen(false)} style={{color: 'white'}}/>
                    </span>
                  </div>
                  <div style={{right: '250px', width: '30px', height: '30px'}}>
                    {/* <FaBars onClick={() => setNavbarOpen(true)}  style={{color: 'white', left: 'auto', right: '36px'}}/> */}
                    <FontAwesomeIcon icon={["fas", "coffee"]} />
                    <BarsIcons handleClick={() => setNavbarOpen(true)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  
export const ENavbar = (props) => {
  
  const [navbarOpen , setNavbarOpen ] = useState(false)




  return (
    <>
      <nav className="flex justify-center">
        <div className="relative flex items-center justify-between container my-6 mx-6">
          <Link to="/" aria-current="page" className="router-link-exact-active router-link-active">
            {/* <img src="/images/logo.png?56846975d83dfd72b117c36f98fed657" alt="Logo" className="w-24 h-12"/> */}
            <LogoImage />
          </Link> 
          <ul className="hidden lg:flex">
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <Link to="/blogs">Blog</Link>
            </li>
            <li className="uppercase mx-5 text-white font-medium text-lg">
              <Link to="/faq" className="">F.A.Q</Link>
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
                        <Link to="/blogs">Blog</Link>
                      </li> 
                      <li onClick={()=> setNavbarOpen(false)} className="uppercase my-4 -ml-4 text-white font-medium text-lg">
                        <Link to="/faq" className="">F.A.Q</Link>
                      </li>
                    </ul>
                  </nav>
                  <span className="bm-cross-button cross-style">
                    <FaTimes onClick={()=> setNavbarOpen(false)} style={{color: 'white'}}/>
                  </span>
                </div>
                <div style={{right: '250px', width: '30px', height: '30px'}}>
                  {/* <FaBars onClick={() => setNavbarOpen(true)}  style={{color: 'white', left: 'auto', right: '36px'}}/> */}
                  <FontAwesomeIcon icon={["fas", "coffee"]} />
                  <BarsIcons handleClick={() => setNavbarOpen(true)}/>
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