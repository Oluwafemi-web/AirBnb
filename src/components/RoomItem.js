import { Link } from "react-router-dom"
export default function RoomItem(props) {
     return (
          <div className="col-lg-6 col-sm-6 col-12">
               <div className="single-room">
                    {/* < img src={room.mainImage.asset.url} alt={room.mainImage.alt} /> */}
                    < img src={props.url} alt={props.alt} />

                    <div className="room-hover text-center">
                         <div className="hover-text">
                              <h3>{props.title}</h3>
                              {/* <div className="p-amount">
                                   <span>{props.price}</span>
                                   <span className="count">Per Night</span>
                              </div> */}
                              <p>{props.description}</p>
                              <div className="room-btn">
                                   <Link to={"/rooms/" + props.slugs} key={props.slugs}
                                        className="default-btn">DETAILS</Link>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}