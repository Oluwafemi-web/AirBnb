import { Link } from "react-router-dom"
export default function PricingItems(props) {
     return (
          <div className="col-md-4 col-sm-6">
               <div className="single-pricing">
                    <div className="package-name">
                         <h3>{props.package}</h3>
                         <h1>
                              <span className="currency">$</span>{props.price}
                              <span className="count">/per night</span>
                         </h1>
                    </div>
                    <div className="package-offer">
                         <span>{props.details}</span>
                         <span>{props.details2}</span>
                         <span>{props.details3}</span>
                         <span className="">{props.details4}</span>
                         <span className="">{props.details5}</span>
                    </div>
                    <div className="signup-btn">
                         <Link to="" className="default-btn">
                              SIGN UP
                         </Link>
                    </div>
               </div>
          </div>
     )
}