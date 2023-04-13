import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import AttrazioneList from "./Index/AttrazioneList";
import { Link } from "react-router-dom";
export default function Attrazione() {
     const [attrazioneList, setAttrazioneList] = useState(null)
     const [attrazioneText, setText] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "attrazionedescription"] {
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
          sanityClient.fetch(`*[_type == "attrazione"] {
               roomname,
               description,
               image{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setAttrazioneList(data))
               .catch(console.error)
     }, [])


     return (
          attrazioneText && attrazioneText.map((text, index) => <div key={index}>
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
                                                  <li>Our Staff</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="room-area pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8 mx-auto">
                                   <div className="section-title text-center">
                                        <h3>{text.title}</h3>
                                        <p>
                                             {text.description}
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              {/* {teamList && teamList.map((team, index) => <TeamList key={index} url={team.image.asset.url} position={team.position} name={team.name} bio={team.bio} />)} */}

                         </div>
                    </div>
                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   {attrazioneList && attrazioneList.map((item, index) => <AttrazioneList key={index} img={item.image.asset.url} title={item.roomname} description={item.description} />)}
                              </div>
                         </div>
                    </div>

               </section>

          </div>)

     )
}