// import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import Socials from './Socials';
import image from './img/1.webp'
import { Link } from "react-router-dom";

export default function Contact() {
     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${image})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>contact us</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <Link to="/">Home</Link>
                                                  </li>
                                                  <li>Contact Us</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <div className="google-map-area">
                    {/* Google Map Area Start */}
                    <div className="google-map-area w-100">
                         <iframe
                              className="contact-map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"
                         />
                    </div>
                    {/* Google Map Area Start */}
               </div>
               <section className="contact-form-area pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-4">
                                   <h4 className="contact-title">contact info</h4>
                                   <div className="contact-text">
                                        <p>
                                             <span className="c-icon">
                                                  <FaPhoneAlt />
                                             </span>
                                             <span className="c-text">0123456789</span>
                                        </p>
                                        <p>
                                             <span className="c-icon">
                                                  <FaEnvelope />
                                             </span>
                                             <span className="c-text">demo@example.com</span>
                                        </p>
                                        <p>
                                             <span className="c-icon">
                                                  <FaMapMarkerAlt />
                                             </span>
                                             <span className="c-text">Your address goes here</span>
                                        </p>
                                   </div>
                                   <h4 className="contact-title">social media</h4>
                                   <div className="link-social">
                                        <Socials />
                                   </div>
                              </div>
                              <div className="col-md-8">
                                   <h4 className="contact-title">send your massage</h4>
                                   <form id="contact-form" action="mail.php" method="post">
                                        <div className="row">
                                             <div className="col-md-6">
                                                  <input type="text" name="name" placeholder="Enter Name" />
                                             </div>
                                             <div className="col-md-6">
                                                  <input type="email" name="email" placeholder="Enter Email" />
                                             </div>
                                             <div className="col-md-12">
                                                  <textarea
                                                       name="message"
                                                       cols={30}
                                                       rows={10}
                                                       placeholder="Message here"
                                                       defaultValue={""}
                                                  />
                                                  <button type="submit" className="default-btn">
                                                       SUBMIT
                                                  </button>
                                             </div>
                                        </div>
                                   </form>
                                   <p className="form-messege" />
                              </div>
                         </div>
                    </div>
               </section>

          </>
     )
}