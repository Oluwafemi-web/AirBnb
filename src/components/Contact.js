// import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import sanityClient from '../client'
import Socials from './Socials';
import { Link } from "react-router-dom";

export default function Contact() {
     const [contactDetails, setDetails] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "contacts"] {
               heading,
               subheading,
               phone,
               email,
               address,
               facebook,
               instagram,
               twitter,
               pinterest,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setDetails(data))
               .catch(console.error)
     }, [])
     return (
          contactDetails && contactDetails.map((details, index) => <div key={index}>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${details.mainImage.asset.url})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>{details.heading}</h2>
                                        <p>{details.subheading}</p>
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

               <div className="google-map-area" style={{ marginTop: '70px' }}>
                    {/* Google Map Area Start */}
                    <div className="google-map-area w-100">
                         <iframe title='mao'
                              className="contact-map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.995897552329!2d18.374831415407343!3d40.05319248559249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134414618186d813%3A0x88441cf80da37c48!2sVico%20dei%20Cirioli%2C%2073037%20Poggiardo%20LE%2C%20Italy!5e0!3m2!1sen!2sng!4v1680744740058!5m2!1sen!2sng"
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
                                             <span className="c-text">{details.phone}</span>
                                        </p>
                                        <p>
                                             <span className="c-icon">
                                                  <FaEnvelope />
                                             </span>
                                             <span className="c-text">{details.email}</span>
                                        </p>
                                        <p>
                                             <span className="c-icon">
                                                  <FaMapMarkerAlt />
                                             </span>
                                             <span className="c-text">{details.address}</span>
                                        </p>
                                   </div>
                                   <h4 className="contact-title">social media</h4>
                                   <div className="link-social">
                                        <Socials facebook={details.facebook} instagram={details.instagram} twitter={details.twitter} pinterest={details.pinterest} />
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

          </div>)
     )
}