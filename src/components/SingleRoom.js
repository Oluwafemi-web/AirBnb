import { useEffect, useState, useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/pagination";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import LanguageContext from "./context/language-context";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import IndexRoomItems from "./Index/IndexRoomItems";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

export default function SingleRoom() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const nav1 = useRef(null);
  const nav2 = useRef(null);

  function changeSlide() {
    const currentSlideIndex = nav2.current.innerSlider.state.currentSlide;
    controlledSwiper.slideTo(currentSlideIndex);
  }

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
  }, [ctx.languageData]);

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
          <div className="row center">
            <div className="col-xl-10 col-lg-8 col-12">
              <div className="room-slider-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Controller]}
                  spaceBetween={50}
                  slidesPerView={1}
                  ref={nav1}
                  autoplay={false}
                  onSwiper={(swiper) => setControlledSwiper(swiper)}
                  loop
                  className="room-slider"
                >
                  {singleRoom.images.map((item, index) => (
                    <SwiperSlide key={index} className="slider-image">
                      <img src={item.asset.url} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="row nav-row">
                  <Slider
                    className="slider-nav"
                    // asNavFor={nav1.current}
                    ref={nav2}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    afterChange={changeSlide}
                  >
                    {singleRoom.images.map((item, index) => (
                      <div className="nav-image" key={index}>
                        <img src={item.asset.url} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
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
                    <i className="zmdi zmdi-check" />
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
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm10}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
                    {singleRoom.rm11}
                  </span>
                  <span>
                    <i className="zmdi zmdi-check" />
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
