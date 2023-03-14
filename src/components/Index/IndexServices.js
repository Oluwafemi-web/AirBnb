import { useState, useEffect } from 'react'
import image from '../img/services.webp'
import ServiceItems from './ServiceItems'
import sanityClient from '../../client'
export default function IndexServices() {
     const [service, updateServie] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "service"] {
               title,
               description,
               
                    iconImage{
                         asset->{
                              _id,
                              url
                         },
                    alt

               }
          }`).then(data => updateServie(data))
               .catch(console.error)
     }, [])
     return (
          <section className="services-area ptb-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>our awesome services</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-lg-5">
                              <ul role="tablist" className="nav nav-tabs">
                                   {service && service.map((item, index) => <ServiceItems key={index} title={item.title} description={item.description} icon={item.iconImage.asset.url} />)}

                              </ul>
                         </div>
                         <div className="col-lg-7">
                              <div className="tab-content">
                                   <div id="spa" className="tab-pane active" role="tabpanel">
                                        <img src={image} alt="" />
                                   </div>
                                   <div id="swim" className="tab-pane" role="tabpanel">
                                        <img src={image} alt="" />
                                   </div>
                                   <div id="restaurant" className="tab-pane" role="tabpanel">
                                        <img src={image} alt="" />
                                   </div>
                                   <div id="conference" className="tab-pane" role="tabpanel">
                                        <img src={image} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}