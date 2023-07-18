import { useEffect, useState, useContext } from "react";
import LanguageContext from "./context/language-context";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import IndexRoomItems from "./Index/IndexRoomItems";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function SingleAttrazione() {
  const { slug } = useParams();
  const [singleAttrazione, setSingleAttrazione] = useState(null);
  const [roomData, setRoom] = useState(null);
  const ctx = useContext(LanguageContext);
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
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}" && language == $language]{
               roomname,
               innerdescription,
               slug,
               language,
               image{
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
                  roomname,
                  innerdescription,
                  slug,
                  language,
                  image{
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
      .then((data) => setSingleAttrazione(data[0]))
      .catch(console.error);
  }, [slug, ctx.languageData]);
  if (!singleAttrazione) return <div>Loading...</div>;
  return (
    <>
      <section
        className="breadcrumb-area overlay-dark-2 bg-3"
        style={{
          backgroundImage: `url(${singleAttrazione.bannerimage.asset.url})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-text text-center">
                <h2>{singleAttrazione.roomname}</h2>
                <div className="breadcrumb-bar"></div>
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
                          width: "100%",
                          position: "relative",
                          left: 0,
                          top: 0,
                          transition: "opacity 500ms ease 0s",
                        }}
                      >
                        <img src={singleAttrazione.image.asset.url} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="room-details-text">
                <h3 className="room-details-title">Descrizione</h3>
                <p>{singleAttrazione.innerdescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="room-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="room-details-title">Nelle Vicinanze</h3>
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
