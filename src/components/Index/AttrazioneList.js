export default function AttrazioneList(props) {
     return (
          <div className="room-list">
               <div className="row">
                    <div className="col-lg-5 col-md-6">
                         <a href="room-details.html">
                              <img src={props.img} alt="" />
                         </a>
                    </div>
                    <div className="col-lg-7 col-md-6 align-self-center">
                         <div className="room-list-text">
                              <h3>
                                   <a href="room-details.html">{props.title}</a>
                              </h3>
                              <p>
                                   {props.description}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}