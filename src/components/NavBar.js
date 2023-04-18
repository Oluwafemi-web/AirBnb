import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import './css/NavBar.css'
import './css/meanmenu.css'
import sanityClient from "../client";




export default function NavBar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [clicked, setClicked] = useState(false)
     const [header, updateHeader] = useState(null)


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
     useEffect(() => {
          sanityClient.fetch(`*[_type == "header"] {
               logo{
                    asset->{
                         _id,
                         url
                    }
               },
               contact,
               facebook,
               instagram,
               twitter,
               pinterest,

          }`).then(data => updateHeader(data))
               .catch(console.error)
     }, [])


     return (
          <header className={`header-area fixed header-sticky ${isScrolled ? 'sticky' : ''}`}>
               <div className="container">
                    {header && header.map((item, index) =>
                         <div className="row" key={index}>
                              <div className="col-xl-5 col-lg-4 col-sm-4 col-12">
                                   <div className="logo">
                                        <a href="/">
                                             <img src={item.logo.asset.url} alt="Oestin" />
                                        </a>
                                   </div>
                              </div>
                              <div className="col-xl-7 col-lg-8 col-sm-8 col-12">
                                   <div className="header-top fix">
                                        <div className="header-contact">
                                             <span className="text-theme">Contact:</span>
                                             <span>{item.contact}</span>
                                        </div>
                                        <div className="header-links">
                                             <a href={item.facebook}>
                                                  <FaFacebookF />
                                             </a>
                                             <a href={item.twitter}>
                                                  <FaTwitter />
                                             </a>
                                             <a href={item.instagram}>
                                                  <FaInstagram />
                                             </a>
                                             <a href={item.pinterest}>
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
                    )}

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