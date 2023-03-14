export default function LocationItem(props) {
     return (
          <div className="col-lg-4 col-sm-6 col-12">
               <div className="single-location">
                    <div className="location-image">
                         <a href="#">
                              <img src={props.image} alt="" />
                         </a>
                    </div>
                    <div className="location-text">
                         <h3>
                              <a href="#">{props.location}</a>
                         </h3>
                         <div className="address-distance fix">
                              <span>{props.address}</span>
                              <span>{props.distance}</span>
                         </div>
                    </div>
               </div>
          </div>
     )
}