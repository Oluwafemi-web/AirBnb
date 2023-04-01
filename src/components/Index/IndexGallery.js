import GalleryItems from "./GalleryItems"
import sanityClient from "../../client"
import { useState, useEffect } from "react"
export default function IndexGallery() {
     const [galleryData, setGallery] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[_type == "gallery"] {
               category,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`).then(data => setGallery(data))
               .catch(console.error)
     }, [])
     return (
          <section className="gallery-area pt-90">
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>our gallery</h3>
                                   <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellente
                                        sque vel volutpat felis, eu condimentum massa. Pellentesque mollis
                                        eros vel mattis tempor. Aliquam
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="gallery-container">
                    <div className="gallery-filter">
                         <button data-filter="*" className="active">
                              All
                         </button>
                         <button data-filter=".spa">Spa</button>
                         <button data-filter=".restaurent">Restaurent</button>
                         <button data-filter=".gym">Gym</button>
                         <button data-filter=".hotel">Hotel</button>
                    </div>
                    <div
                         className="gallery gallery-masonry"
                         style={{ position: "relative", height: "497.125px" }}
                    >
                         {galleryData && galleryData.map((room, index) => <GalleryItems key={index} category={gallery.category} img={room.mainImage.asset.url} alt={room.mainImage.alt} />)}

                    </div>
               </div>
          </section>

     )
}