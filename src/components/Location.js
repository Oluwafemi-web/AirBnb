import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import LocationItem from "./LocationItem";
import { Link } from "react-router-dom";
export default function Location() {
     const [locationData, setLocation] = useState(null)
     const [locationText, setText] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "locationdescription"] {
               heading,
               subheading,
               title,
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setText(data))
               .catch(console.error)
     }, [])

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
          locationText && locationText.map((text, index) => <div key={index}>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${text.mainImage.asset.url})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>{text.heading}</h2>
                                        <p>{text.subheading}</p>
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
                                        <h3>{text.title}</h3>
                                        <p className="pb-10">
                                             {text.description}
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              {locationData && locationData.map((item, index) => <LocationItem key={index} location={item.name} image={item.mainImage.asset.url} address={item.address} distance={item.distance} />)}
                         </div>

                    </div>


               </section>
          </div>)

     )
}