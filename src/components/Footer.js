import './css/footer.css'
import Socials from './Socials'
// import { useState, useEffect } from 'react'
// import sanityClient from '../client'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
// import FooterImage from './FooterImage'
export default function IndexFooter(props) {
     // const [image, updateImage] = useState(null)
     // useEffect(() => {
     //      sanityClient.fetch(`*[_type == "footerimage"] {
     //           mainImage{
     //                asset->{
     //                     _id,
     //                     url
     //                }
     //           }

     //      }`).then(data => updateImage(data))
     //           .catch(console.error)
     // }, [])
     return (
          <footer className="footer-area">
               {/* Footer Widget Start */}
               <div className="footer-widget-area bg-dark">
                    <div className="container">
                         <div className="row mb-n60">
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
                                   <div className="single-footer-widget">
                                        <div className="footer-logo">
                                             <a href="index.html">
                                                  <img src={props.logo} alt="Oestin" />
                                             </a>
                                        </div>
                                        <p>
                                             {props.description}
                                        </p>
                                        <div className="social-icons">
                                             <Socials />
                                        </div>
                                   </div>
                              </div>
                              <div className="col-xl-3 offset-lg-1 col-lg-4  col-md-6 col-sm-6 col-12 mb-60">
                                   <div className="single-footer-widget">
                                        <h3>contact us</h3>
                                        <div className="c-info">
                                             <span>
                                                  <FaMapMarkerAlt />
                                             </span>
                                             <span>
                                                  {props.address} <br />
                                             </span>
                                        </div>
                                        <div className="c-info">
                                             <span>
                                                  <FaEnvelope />
                                             </span>
                                             <span>
                                                  {props.email}
                                                  <br />
                                                  {props.email}
                                             </span>
                                        </div>
                                        <div className="c-info">
                                             <span>
                                                  <FaPhoneAlt />
                                             </span>
                                             <span>
                                                  {props.number}
                                                  <br />
                                                  {props.number}
                                             </span>
                                        </div>
                                   </div>
                              </div>
                              {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mb-60">
                                   <div className="single-footer-widget">
                                        <h3>quick links</h3>
                                        <ul className="footer-list">
                                             <li>
                                                  <a href="index.html">Home</a>
                                             </li>
                                             <li>
                                                  <a href="team.html">Stuffs</a>
                                             </li>
                                             <li>
                                                  <a href="room-grid.html">Suits &amp; Rooms</a>
                                             </li>
                                             <li>
                                                  <a href="event.html">Event</a>
                                             </li>
                                             <li>
                                                  <a href="location.html">Location</a>
                                             </li>
                                             <li>
                                                  <a href="contact.html">Contact</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
                                   <div className="single-footer-widget">
                                        <h3>collections</h3>
                                        <div className="instagram-image">
                                             {image && image.map((item, index) => <FooterImage key={index} image={item.mainImage.asset.url} />)}
                                        </div>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </div>
               {/* Footer Widget End */}
               {/* Footer Bottom Area Start */}
               {/* <div className="footer-bottom-area bg-black">
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col-auto">
                                   <div className="footer-text text-center">
                                        <span>
                                             © 2021 <b className="text-white">Oestin</b> Made with{" "}
                                             <i className="fa fa-heart text-danger" /> by{" "}
                                             <a href="https://hasthemes.com/">
                                                  <b>HasThemes</b>
                                             </a>
                                             <span></span>
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div> */}
               {/* Footer Bottom Area End */}
          </footer>

     )
}