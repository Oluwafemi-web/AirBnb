import { useState, useEffect } from "react"
import sanityClient from "../../client"
import PricingItems from "./PricingItems"
export default function IndexPricing() {
     const [prices, updatePrices] = useState(null)
     useEffect(() => {
          sanityClient.fetch(`*[_type == "pricing"] {
               package,
               price,
               packageDetails,
               packageDetails2,
               packageDetails3,
               packageDetails4,
               packageDetails5,

          }`).then(data => updatePrices(data))
               .catch(console.error)
     }, [])

     return (
          <section className="pricing-area ptb-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>Our Pricing</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente
                                        sque vel volutpat felis, eu condimentum massa. Pellentesque mollis
                                        eros vel mattis tempor. Aliquam
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="row">
                         {prices && prices.map((items, index) => <PricingItems key={index} package={items.package} price={items.price} details={items.packageDetails} details2={items.packageDetails2} details3={items.packageDetails3} details4={items.packageDetails4} details5={items.packageDetails5} />)}

                    </div>
               </div>
          </section>

     )
}