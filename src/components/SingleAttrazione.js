import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
     return builder.image(source)
}
export default function SingleAttrazione() {
     const { slug } = useParams();
     const [singleAttrazione, setSingleAttrazione] = useState(null);
     useEffect(() => {
          sanityClient.fetch(`*[slug.current == "${slug}"]{
               roomname,
               description,
               slug,
               image{
                    asset->{
                         _id,
                         url
                    }
               }
          }`).then((data) => setSingleAttrazione(data[0])).catch(console.error);
     }, [slug])
     if (!singleAttrazione) return <div>Loading...</div>
     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3">
                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>{singleAttrazione.roomname}</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <a href="index.html">Home</a>
                                                  </li>
                                                  <li>Room Details</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="room-details pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-xl-12 col-lg-8 col-12">
                                   <div className="room-slider-wrapper">
                                        <div className="room-slider slick-initialized slick-slider slick-active">
                                             <div aria-live="polite" className="slick-list draggable">
                                                  <div
                                                       className="slick-track"
                                                       role="listbox"
                                                       style={{ opacity: 1, width: 4350 }}
                                                  >
                                                       <div
                                                            className="slider-image slick-slide"
                                                            data-slick-index={0}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide00"
                                                            style={{
                                                                 width: 870,
                                                                 position: "relative",
                                                                 left: 0,
                                                                 top: 0,
                                                                 transition: "opacity 500ms ease 0s"
                                                            }}
                                                       >
                                                            <img src={singleAttrazione.image.asset.url} alt="" />
                                                            <div className="cost">
                                                                 <h2>$ 350</h2>
                                                                 <span>Per Night</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="room-details-text">
                                        <h3 className="room-details-title">description of room</h3>
                                        <p>
                                             {singleAttrazione.description}
                                        </p>
                                   </div>
                                   <div className="room-facilities">
                                        <h3 className="room-details-title">room facilities</h3>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Single Room
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  70 sq mt
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />3 Persons
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Free Internet
                                             </span>
                                        </div>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Breakfast Inclide
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Free wi-fi
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Private Balcony
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Free Newspaper
                                             </span>
                                        </div>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Full AC
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Flat Screen TV
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Beach View
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Room Service
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="room-area">
                         <div className="container">
                              <div className="row">
                                   <div className="col-12">
                                        <h3 className="room-details-title">similar rooms</h3>
                                   </div>
                              </div>
                         </div>
                         <div className="container-fluid overflow-hidden">
                              <div className="single-room small">
                                   <img src="img/room/1.jpg" alt="" />
                                   <h3>Royal Suit</h3>
                                   <div className="room-hover text-center">
                                        <div className="hover-text">
                                             <h3>
                                                  <a href="room-details.html">Royal Suit</a>
                                             </h3>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam,
                                             </p>
                                             <div className="room-btn">
                                                  <a href="room-details.html" className="default-btn">
                                                       DETAILS
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="p-amount">
                                             <span>$220</span>
                                             <span className="count">Per Night</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="single-room large">
                                   <img src="img/room/2.jpg" alt="" />
                                   <h3>Deluxe Suit</h3>
                                   <div className="room-hover text-center">
                                        <div className="hover-text">
                                             <h3>
                                                  <a href="room-details.html">Deluxe Suit</a>
                                             </h3>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam,
                                             </p>
                                             <div className="room-btn">
                                                  <a href="room-details.html" className="default-btn">
                                                       DETAILS
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="p-amount">
                                             <span>$150</span>
                                             <span className="count">Per Night</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="single-room small">
                                   <img src="img/room/3.jpg" alt="" />
                                   <h3>Single Room</h3>
                                   <div className="room-hover text-center">
                                        <div className="hover-text">
                                             <h3>
                                                  <a href="room-details.html">Single Room</a>
                                             </h3>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam,
                                             </p>
                                             <div className="room-btn">
                                                  <a href="room-details.html" className="default-btn">
                                                       DETAILS
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="p-amount">
                                             <span>$120</span>
                                             <span className="count">Per Night</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="single-room medium">
                                   <img src="img/room/4.jpg" alt="" />
                                   <h3>Double Room</h3>
                                   <div className="room-hover text-center">
                                        <div className="hover-text">
                                             <h3>
                                                  <a href="room-details.html">Double Room</a>
                                             </h3>
                                             <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam,
                                             </p>
                                             <div className="room-btn">
                                                  <a href="room-details.html" className="default-btn">
                                                       DETAILS
                                                  </a>
                                             </div>
                                        </div>
                                        <div className="p-amount">
                                             <span>$100</span>
                                             <span className="count">Per Night</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}