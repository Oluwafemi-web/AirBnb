import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import image from './img/1.webp'
import EventItems from "./EventItems";
import { Link } from "react-router-dom";
export default function Events() {
     const [eventData, setEvent] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[_type == "events"] {
               eventName,
               category,
               description,
               author,
               mainImage{
                    asset->{
                         _id,
                         url
                    }

               }
          }`).then(data => setEvent(data))
               .catch(console.error)
     }, [])

     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${image})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>events</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <Link to="/">Home</Link>
                                                  </li>
                                                  <li>Events</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="event-area pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8 mx-auto">
                                   <div className="section-title text-center">
                                        <h3>upcoming events</h3>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente sque
                                             vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel
                                             mattis tempor. Aliquam{" "}
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="event-menu">
                                        <button data-filter="*" className="active">
                                             {" "}
                                             All
                                        </button>
                                        <button data-filter=".music">Music Party</button>
                                        <button data-filter=".birthday">Birthday Party</button>
                                        <button data-filter=".conference">Conference</button>
                                        <button data-filter=".wedding">Wedding Party</button>
                                        <button data-filter=".photography">Photography Party</button>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="row event-items"
                         >
                              {eventData && eventData.map((event, index) => <EventItems key={index} image={event.mainImage.asset.url} category={event.category} eventTitle={event.eventName} author={event.author} description={event.description} />)}

                         </div>
                    </div>

               </section>
          </>

     )
}