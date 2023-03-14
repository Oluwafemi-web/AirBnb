
import React, { useState, useEffect } from "react"
import sanityClient from '../../client'
import IndexRoomItems from './IndexRoomItems'
export default function IndexRoom() {
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
          <section className="room-area pt-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>our favorite rooms</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="container-fluid overflow-hidden">
                    {roomData && roomData.map((room, index) => <IndexRoomItems key={index} title={room.title} url={room.mainImage.asset.url} alt={room.mainImage.alt} price={room.price} description={room.description} />)}
               </div>
          </section>

     )
}