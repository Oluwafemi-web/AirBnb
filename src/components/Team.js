import React, { useState, useEffect } from "react";
import sanityClient from '../client'
import image from './img/1.webp'
import { Link } from "react-router-dom";
import TeamList from "./Index/TeamList";
export default function Team() {
     const [teamList, setTeamList] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "team"] {
               name,
               position,
               bio,
               image{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setTeamList(data))
               .catch(console.error)
     }, [])


     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${image})` }}>

                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>our staff</h2>
                                        <p>A quality room of Oestin with sea or mountain view</p>
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
               <section className="team-area pt-90 team-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-8 mx-auto">
                                   <div className="section-title text-center">
                                        <h3>our special staff</h3>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente
                                             sque vel volutpat felis, eu condimentum massa. Pellentesque mollis
                                             eros vel mattis tempor. Aliquam{" "}
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              {teamList && teamList.map((team, index) => <TeamList key={index} url={team.image.asset.url} position={team.position} name={team.name} bio={team.bio} />)}

                              {/* <div className="col-md-12">
                                   <div className="pagination-content">
                                        <ul className="pagination">
                                             <li>
                                                  <a href="#">1</a>
                                             </li>
                                             <li className="active">
                                                  <a href="#">2</a>
                                             </li>
                                             <li>
                                                  <a href="#">3</a>
                                             </li>
                                        </ul>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </section>

          </>

     )
}