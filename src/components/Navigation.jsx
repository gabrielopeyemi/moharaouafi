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
  
  
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);
  const [navbar, setNavbar] = useState(false)
 

  const handleClick = () => {
    setClick(!click)
    console.log('click')
  };
  const closeMobileMenu = (e) => setClick(false);
  const closeMobileLogout = e => {
    console.log('kk');
    setClick(false);
    window.localStorage.removeItem('token');
    window.location = '/login';
  }
  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setbutton(false);
      } else {
        setbutton(true);
      }
    }
    const changeBackground = () => {
      console.log(window.scrollY);
      if (window.screenX >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  window.addEventListener('resize', showButton)
  window.addEventListener('scroll', changeBackground)
  }, [])
  



  

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
           <LogoImage />
            {/* <i className="fab fa-typo3"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick} style={{color: 'white'}}>
            {click ? <FaTimes/> : <FaBars/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <div className="menu-icon" onClick={handleClick} style={{color: 'white'}}>
              {click ? <FaTimes/> : <FaBars/> }
            </div>
            {userLinkDirect.map((link) => {
              
              return(
                <li className={link.cName}>
                  <Link to={link.direction} className={link.cname} onClick={link.cFun ? closeMobileLogout : closeMobileMenu}>
                    {link.name}
                  </Link>
                </li>
            )
            })}
          </ul>
        </div>
      </nav>
    </>
  );
  }

  export default INavbar