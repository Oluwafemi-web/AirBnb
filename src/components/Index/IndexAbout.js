import React from "react";
import Socials from '../Socials'
import { FaPlayCircle } from "react-icons/fa";

export default function IndexAbout() {
     return (
          <section className="about-area">
               <div className="container">

                    <div className="row">
                         <div className="col-lg-7">
                              <div className="video-wrapper mt-90">
                                   <div className="video-overlay">
                                        <img src="img/banner/4.jpg" alt="" />
                                   </div>
                                   <a
                                        className="video-popup"
                                        href="https://www.youtube.com/watch?v=rXcp6s0VjZk"
                                   >
                                        <FaPlayCircle />
                                   </a>
                              </div>
                         </div>
                         <div className="col-lg-5">
                              <div className="about-text">
                                   <div className="section-title">
                                        <h3>about us</h3>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Utjij
                                             enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                             nisi utjjij aliquip ex ea commodo consequat.
                                        </p>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                             eiusmod tempor incididunt ut labore.
                                        </p>
                                        <p>
                                             Fipsum dolor sit amet, consectetur adipisicing elit, sed do
                                             eiusmod tempor
                                        </p>
                                   </div>
                                   <div className="about-links">
                                        <Socials />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}