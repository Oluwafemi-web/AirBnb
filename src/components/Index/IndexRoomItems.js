export default function IndexRoomItems(props) {
     return (

          <div className="single-room medium">
               <img src={props.url} alt="" />
               <div className="room-hover text-center">
                    <div className="hover-text">
                         <h3>
                              <a href="room-details.html">{props.title}</a>
                         </h3>
                         <p>
                              {props.description}
                         </p>
                         <div className="room-btn">
                              <a href="room-details.html" className="default-btn">
                                   DETAILS
                              </a>
                         </div>
                    </div>
                    {/* <div className="p-amount">
                         <span>{props.price}</span>
                         <span className="count">Per Night</span>
                    </div> */}
               </div>
          </div>

     )
}