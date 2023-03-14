export default function EventItems(props) {
     return (
          <div
               className={`single-event col-md-6 col-12 ${props.category.toLowerCase()}`}
          >
               <div className="single-event-item">
                    <img src={props.image} alt="" />
                    <div className="event-text">
                         <h3 className="event-title">{props.eventTitle}</h3>
                         <h3 className="author-name">By : {props.author}</h3>
                         <p>
                              {props.description}
                         </p>
                    </div>
               </div>
          </div>
     )
}