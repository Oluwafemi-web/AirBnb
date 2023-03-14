import sanityClient from "../../client"
import { useState, useEffect } from "react"
import TeamList from "./TeamList"
export default function IndexTeam() {
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
          <section className="team-area ptb-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>our special staff</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente
                                        sque vel volutpat felis, eu condimentum massa. Pellentesque mollis
                                        eros vel mattis tempor. Aliquam
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="row">
                         {teamList && teamList.map((team, index) => <TeamList key={index} url={team.image.asset.url} position={team.position} name={team.name} bio={team.bio} />)}

                    </div>
               </div>
          </section >

     )
}