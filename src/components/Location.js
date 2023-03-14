import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import LocationItem from "./LocationItem";
import image from './img/1.webp'
import { Link } from "react-router-dom";
export default function Location() {
     const [locationData, setLocation] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[_type == "location"] {
               name,
               address,
               distance,
               mainImage{
                    asset->{
                         _id,
                         url
                    }

               }
          }`).then(data => setLocation(data))
               .catch(console.error)
     }, [])

     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${image})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>near places</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <Link to="/">Home</Link>
                                                  </li>
                                                  <li>Near Places</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="location-area pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8 mx-auto">
                                   <div className="section-title text-center">
                                        <h3>near nice places</h3>
                                        <p className="pb-10">
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente sque
                                             vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel
                                             mattis tempor. Aliquam{" "}
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              {locationData && locationData.map((item, index) => <LocationItem key={index} location={item.name} image={item.mainImage.asset.url} address={item.address} distance={item.distance} />)}
                         </div>

                    </div>


               </section>
          </>

     )
}