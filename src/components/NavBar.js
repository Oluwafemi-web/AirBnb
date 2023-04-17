import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter, FaPinterestP } from "react-icons/fa";
import './css/NavBar.css'
import './css/meanmenu.css'

import logo from './logo.webp'




export default function NavBar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [clicked, setClicked] = useState(false)

     useEffect(() => {
          function handleScroll() {
               if (window.pageYOffset > 200) {
                    setIsScrolled(true);
               } else {
                    setIsScrolled(false);
               }
          }

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const clickHandler = () => {
          setClicked(prev => !prev)
     }



     return (
          <header className={`header-area fixed header-sticky ${isScrolled ? 'sticky' : ''}`}>
               <div className="container">
                    <div className="row">
                         <div className="col-xl-5 col-lg-4 col-sm-4 col-12">
                              <div className="logo">
                                   <a href="/">
                                        <img src={logo} alt="Oestin" />
                                   </a>
                              </div>
                         </div>
                         <div className="col-xl-7 col-lg-8 col-sm-8 col-12">
                              <div className="header-top fix">
                                   <div className="header-contact">
                                        <span className="text-theme">Contact:</span>
                                        <span>+393397263322</span>
                                   </div>
                                   <div className="header-links">
                                        <a href="https://www.facebook.com/">
                                             <FaFacebookF />
                                        </a>
                                        <a href="https://twitter.com/">
                                             <FaTwitter />
                                        </a>
                                        <a href="https://plus.google.com/">
                                             <FaGooglePlusG />
                                        </a>
                                        <a href="https://www.instagram.com/">
                                             <FaInstagram />
                                        </a>
                                        <a href="https://www.pinterest.com/">
                                             <FaPinterestP />
                                        </a>
                                   </div>
                              </div>
                              {/* Mainmenu Start */}
                              <div className="main-menu d-none d-lg-block">
                                   <nav>
                                        <NavLinks />
                                   </nav>
                              </div>
                              {/* Mainmenu End */}
                         </div>
                    </div>
               </div>
               {/* Mobile Menu Area start */}
               <div className="mobile-menu-area">
                    <div className="container mean-container">
                         <div className="mean-bar">
                              <a
                                   href="#nav"
                                   className={`meanmenu-reveal ${clicked ? 'meanclose' : ''}`}
                                   style={{
                                        right: 0,
                                        left: "auto",
                                        textAlign: "center",
                                        textIndent: 0,
                                        fontSize: 22
                                   }} onClick={clickHandler}
                              >
                                   <span />
                                   <span />
                                   <span />
                              </a>
                              <nav className="mean-nav">
                                   <ul style={{ display: clicked ? 'block' : 'none' }}>

                                        <li>
                                             <NavLink to="/" exact="true">HOME</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/rooms">ROOMS</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/servizi">SERVIZI</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/attrazione">ATTRAZIONE</NavLink>
                                        </li>
                                        <li>
                                             <NavLink to="/contact">CONTACT</NavLink>
                                        </li>
                                   </ul>
                              </nav>
                         </div>
                         <div className="row">
                              <div className="col-12">
                                   <div className="mobile-menu">
                                        <div className="mean-push" />
                                        <nav id="dropdown" style={{ display: "none" }}>
                                             <ul>
                                                  <li>
                                                       <NavLink to="/" exact="true">HOME</NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink to="/rooms">ROOMS</NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink to="/servizi">SERVIZI</NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink to="/attrazione">ATTRAZIONE</NavLink>
                                                  </li>
                                                  <li>
                                                       <NavLink to="/contact">CONTACT</NavLink>
                                                  </li>
                                             </ul>
                                        </nav>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Mobile Menu Area end */}
          </header >

     )
}