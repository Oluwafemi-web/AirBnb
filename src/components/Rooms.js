import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import RoomItem from "./RoomItem";
import image from './img/1.webp'
import { Link } from "react-router-dom";
export default function Room() {
     const [roomData, setRoom] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[_type == "room"] {
               title,
               price,
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setRoom(data))
               .catch(console.error)
     }, [])

     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${image})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>room - grid view</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <Link to="/">Home</Link>
                                                  </li>
                                                  <li>Room - grid view</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="room-area pt-90 room-grid">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8 mx-auto">
                                   <div className="section-title text-center">
                                        <h3>our atr rooms</h3>
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
                              {roomData && roomData.map((room, index) => <RoomItem key={index} title={room.title} url={room.mainImage.asset.url} alt={room.mainImage.alt} price={room.price} description={room.description} />)}

                         </div>
                    </div>
               </section>
          </>

     )
}