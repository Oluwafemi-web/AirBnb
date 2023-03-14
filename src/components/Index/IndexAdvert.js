import { Link } from "react-router-dom"
export default function IndexAdvert() {
     return (
          <section className="advertise-area bg-2 overlay-dark">
               <div className="container">
                    <div className="row">
                         <div className="col-12">
                              <div className="advertise-text">
                                   <h1>
                                        get <span>15% off</span> on any other events...
                                   </h1>
                                   <Link to="" className="default-btn">
                                        Book Now
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )
}