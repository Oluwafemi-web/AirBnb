import { useEffect, useState, useContext, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LanguageContext from "./context/language-context";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import IndexRoomItems from "./Index/IndexRoomItems";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function SingleRoom() {
  const nav1 = useRef(null);
  const nav2 = useRef(null);

  const { slug } = useParams();
  const [singleRoom, setSingleRoom] = useState(null);
  const [roomData, setRoom] = useState(null);
  const ctx = useContext(LanguageContext);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
               title,
               description,
               images[]{
                asset->{
                  _id,
                  url
                }
               },
               rm1,
               rm2,
               rm3,
               rm4,
               rm5,
               rm6,
               rm7,
               rm8,
               rm9,
               rm10,
               rm11,
               rm12,
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
               },
               _translations[] {
                value->{
                  title,
                  description,
                  images[]{
                    asset->{
                      _id,
                      url
                    }
                   },
                  rm1,
                  rm2,
                  rm3,
                  rm4,
                  rm5,
                  rm6,
                  rm7,
                  rm8,
                  rm9,
                  rm10,
                  rm11,
                  rm12,
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
                }
             }
          }`,
        { language: ctx.languageData }
      )
      .then((data) => setSingleRoom(data[0]))
      .catch(console.error);
  }, [slug, ctx.languageData]);

  //room query

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexroom" && language == $language] {
          title,
          description,
          slug,
          language,
          mainImage{
               asset->{
                    _id,
                    url
               },
               alt
          },
          _translations[] {
            value->{
              title,
          description,
          slug,
              language,
              mainImage{
                asset->{
                  _id,
                  url
                },
                alt
              }
            }
         }
     }`,
        { language: ctx.languageData }
      )
      .then((data) => setRoom(data))
      .catch(console.error);
  }, []);

  if (!singleRoom) return <div>Loading...</div>;

  return (
    <>
      <section
        className="breadcrumb-area overlay-dark-2 bg-3"
        style={{ backgroundImage: `url(${singleRoom.bannerimage.asset.url})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-text text-center">
                <h2>{singleRoom.title}</h2>
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
                <Slider
                  className="room-slider"
                  asNavFor={nav2.current}
                  ref={nav1}
                  prevArrow={<></>}
                  nextArrow={<></>}
                >
                  {singleRoom.images.map((item) => (
                    <div className="slider-image" key={item._id}>
                      <img src={item.asset.url} />
                    </div>
                  ))}
                </Slider>
                <div className="row nav-row">
                  <Slider
                    className="slider-nav"
                    asNavFor={nav1.current}
                    ref={nav2}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {singleRoom.images.map((item) => (
                      <div className="nav-image" key={item._id}>
                        <img src={item.asset.url} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* <div className="room-slider slick-initialized slick-slider slick-active">
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
                          width: "100%",
                          position: "relative",
                          left: 0,
                          top: 0,
                          transition: "opacity 500ms ease 0s",
                        }}
                      >
                        <img src={singleRoom.mainImage.asset.url} alt="" />
                      </div>
                    </div>
                  </div>
                </div> */}
              <div className="room-details-text">
                <h3 className="room-details-title">Descrizione</h3>
                <p>{singleRoom.innerdescription}</p>
              </div>
              <div className="room-facilities">
                <h3 className="room-details-title">Room Facilities</h3>
                <div className="single-facility">
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm1}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm2}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm3}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm4}
                  </span>
                </div>
                <div className="single-facility">
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm5}
                  </span>
                  <span>
                    <i className="zmdi zmdi-close" />
                    {singleRoom.rm6}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm7}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm8}
                  </span>
                </div>
                <div className="single-facility">
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm9}
                  </span>
                  <span>
                    <i className="zmdi zmdi-close" />
                    {singleRoom.rm10}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm11}
                  </span>
                  <span>
                    <i className="zmdi zmdi-close" />
                    {singleRoom.rm12}
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
                <h3 className="room-details-title">A Pochi Passi da Casa</h3>
              </div>
            </div>
          </div>
          <div className="container-fluid overflow-hidden">
            {roomData &&
              roomData.map((room, index) => (
                <IndexRoomItems
                  key={index}
                  title={room.title}
                  url={room.mainImage.asset.url}
                  alt={room.mainImage.alt}
                  slug={room.slug.current}
                  description={room.description}
                />
              ))}
          </div>
        </div>
        <div style={{ margin: "20px" }}></div>
      </section>
    </>
  );
}
