// import GalleryItems from "./GalleryItems"
import sanityClient from "../../client"
import link from '../img/link.webp'
import linkhover from '../img/link-hover.webp'
import search from '../img/search.webp'
import searchhover from '../img/search-hover.webp'
import { useState, useEffect } from "react"
import {

     MDBCol,
     MDBRow,
} from 'mdb-react-ui-kit';
export default function IndexGallery() {

     const [galleryData, setGallery] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[_type == "gallery"] {
               title,
               description,
                Image1{
                    asset->{
                         _id,
                         url
                    },
                    alt

               },
               Image2{
                    asset->{
                         _id,
                         url
                    },
                    alt

               },
               Image3{
                    asset->{
                         _id,
                         url
                    },
                    alt

               },
               Image4{
                    asset->{
                         _id,
                         url
                    },
                    alt

               },
               Image5{
                    asset->{
                         _id,
                         url
                    },
                    alt

               },
               Image6{
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
          galleryData && galleryData.map((item, index) => <section className="gallery-area pt-90 pt-bm-90" key={index}>
               <div className="container">
                    <div className="row">
                         <div className="col-md-8 mx-auto">
                              <div className="section-title text-center">
                                   <h3>{item.title}</h3>
                                   <p>
                                        {item.description}
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
                         style={{ position: "relative" }}
                    >
                         <MDBRow>
                              <MDBCol lg={3} md={10} className='mb-4 mb-lg-0'>
                                   <div className="item-gallery">
                                        <img
                                             src={item.Image1.asset.url}
                                             className='w-100 shadow-1-strong mb-4 thumb'
                                             alt='Boat on Calm Water'
                                        />

                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image1.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </MDBCol>

                              <MDBCol lg={3} className='mb-4 mb-lg-0 '>
                                   <div className="item-gallery">

                                        <img
                                             src={item.Image2.asset.url}
                                             className='w-100 shadow-1-strong mb-4'
                                             alt='Mountains in the Clouds'
                                        />
                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image2.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="item-gallery">
                                        <img
                                             src={item.Image5.asset.url}
                                             className='w-100 shadow-1-strong mb-4'
                                             alt='Boat on Calm Water'
                                        />
                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image5.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </MDBCol>

                              <MDBCol lg={3} className='mb-4 mb-lg-0'>
                                   <div className="item-gallery">

                                        <img
                                             src={item.Image3.asset.url}
                                             className='w-100 shadow-1-strong mb-4'
                                             alt='Mountains in the Clouds'
                                        />
                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image3.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="item-gallery">

                                        <img
                                             src={item.Image6.asset.url}
                                             className='w-100 shadow-1-strong mb-4'
                                             alt='Boat on Calm Water'
                                        />
                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image6.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </MDBCol>

                              <MDBCol lg={3} className='mb-4 mb-lg-0'>
                                   <div className="item-gallery">

                                        <img
                                             src={item.Image4.asset.url}
                                             className='w-100 shadow-1-strong mb-4'
                                             alt='Waves at Sea'
                                        />
                                        <div className="hover-gallery">
                                             <div className="gallery-icon">
                                                  <a href="/">
                                                       <span className="p-img">
                                                            <img src={link} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={linkhover} alt="" />
                                                       </span>
                                                  </a>
                                                  <a className="image-popup" href={item.Image4.asset.url}>
                                                       <span className="p-img">
                                                            <img src={search} alt="" />
                                                       </span>
                                                       <span className="s-img">
                                                            <img src={searchhover} alt="" />
                                                       </span>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </MDBCol>
                         </MDBRow>

                    </div>

               </div>
          </section>)
     )
}


