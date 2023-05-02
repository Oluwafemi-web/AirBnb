import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import sanityClient from "../client"
import IndexRoomItems from "./Index/IndexRoomItems"

import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
     return builder.image(source)
}
export default function SingleRoom() {
     const { slug } = useParams();
     const [singleRoom, setSingleRoom] = useState(null);
     const [roomData, setRoom] = useState(null)

     useEffect(() => {
          sanityClient.fetch(`*[slug.current == "${slug}"]{
               roomname,
               subtitle,
               ptext,
               ctext,
               innerdescription,
               slug,
               mainImage{
                    asset->{
                         _id,
                         url
                    }
               },
               bannerimage{
                    asset->{
                         _id,
                         url
                    }
               }
          }`).then((data) => setSingleRoom(data[0])).catch(console.error);
     }, [slug])

     //room query


     useEffect(() => {
          sanityClient.fetch(`*[_type == "indexroom"] {
          title,
          description,
          mainImage{
               asset->{
                    _id,
                    url
               },
               alt

          }
     }`).then(data => setRoom(data))
               .catch(console.error)
     }, [])

     if (!singleRoom) return <div>Loading...</div>
     return (
          <>
               <section className="breadcrumb-area overlay-dark-2 bg-3" style={{ backgroundImage: `url(${singleRoom.bannerimage.asset.url})` }}>
                    <div className="container">
                         <div className="row">
                              <div className="col-12">
                                   <div className="breadcrumb-text text-center">
                                        <h2>{singleRoom.roomname}</h2>
                                        <p>{singleRoom.subtitle}</p>
                                        <div className="breadcrumb-bar">
                                             <ul className="breadcrumb">
                                                  <li>
                                                       <Link to="/">{singleRoom.ptext}</Link>

                                                  </li>
                                                  <li>{singleRoom.ctext}</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="room-details pt-90">
                    <div className="container">
                         <div className="row">
                              <div className="col-xl-12 col-lg-8 col-12">
                                   <div className="room-slider-wrapper">
                                        <div className="room-slider slick-initialized slick-slider slick-active">
                                             <div aria-live="polite" className="slick-list draggable">
                                                  <div
                                                       className="slick-track"
                                                       role="listbox"
                                                       style={{ opacity: 1 }}
                                                  >
                                                       <div
                                                            className="slider-image slick-slide"
                                                            data-slick-index={0}
                                                            aria-hidden="true"
                                                            tabIndex={-1}
                                                            role="option"
                                                            aria-describedby="slick-slide00"
                                                            style={{
                                                                 width: '100%',
                                                                 position: "relative",
                                                                 left: 0,
                                                                 top: 0,
                                                                 transition: "opacity 500ms ease 0s"
                                                            }}
                                                       >
                                                            <img src={singleRoom.mainImage.asset.url} alt="" />
                                                            <div className="cost">
                                                                 <h2>$ 350</h2>
                                                                 <span>Per Night</span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="room-details-text">
                                        <h3 className="room-details-title">description of room</h3>
                                        <p>
                                             {singleRoom.innerdescription}
                                        </p>
                                   </div>
                                   <div className="room-facilities">
                                        <h3 className="room-details-title">room facilities</h3>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Single Room
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  70 sq mt
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />3 Persons
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Free Internet
                                             </span>
                                        </div>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Breakfast Inclide
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Free wi-fi
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Private Balcony
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Free Newspaper
                                             </span>
                                        </div>
                                        <div className="single-facility">
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Full AC
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Flat Screen TV
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-check" />
                                                  Beach View
                                             </span>
                                             <span>
                                                  <i className="zmdi zmdi-close" />
                                                  Room Service
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="room-area">
                         <div className="container">
                              <div className="row">
                                   <div className="col-12">
                                        <h3 className="room-details-title">similar rooms</h3>
                                   </div>
                              </div>
                         </div>
                         <div className="container-fluid overflow-hidden">
                              {roomData && roomData.map((room, index) => <IndexRoomItems key={index} title={room.title} url={room.mainImage.asset.url} alt={room.mainImage.alt} description={room.description} />)}
                         </div>
                    </div>
                    <div style={{ margin: '20px' }}></div>
               </section>
          </>
     )
}