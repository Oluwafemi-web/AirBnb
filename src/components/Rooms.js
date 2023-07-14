import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "./context/language-context";
import sanityClient from "../client";
import RoomItem from "./RoomItem";
import { Link } from "react-router-dom";
export default function Room() {
  const [roomData, setRoom] = useState(null);
  const [roomText, setText] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "roomdescription" && language == $language] {
               heading,
               ptext,
               ctext,
               subheading,
               title,
               language,
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt
               },
               _translations[] {
                    value->{
                         heading,
                         ptext,
                         ctext,
                         subheading,
                         title,
                         language,
                         description,
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
      .then((data) => setText(data))
      .catch(console.error);
  }, [ctx.languageData]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "room" && language == $language] {
               title,
               price,
               slug,
               language,
               description,
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
                      price,
                      description,
                      language,
                      slug,
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

  return (
    roomText &&
    roomText.map((text, index) => (
      <div key={index}>
        <section
          className="breadcrumb-area overlay-dark-2 bg-3"
          style={{ backgroundImage: `url(${text.mainImage.asset.url})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-text text-center">
                  <h2>{text.heading}</h2>
                  <p>{text.subheading}</p>
                  <div className="breadcrumb-bar">
                    <ul className="breadcrumb">
                      <li>
                        <Link to="/">{text.ptext}</Link>
                      </li>
                      <li>{text.ctext}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="room-area pt-90 room-grid">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="section-title text-center">
                  <h3>{text.title}</h3>
                  <p>{text.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {roomData &&
                roomData.map((room, index) => (
                  <RoomItem
                    key={index}
                    title={room.title}
                    url={room.mainImage.asset.url}
                    alt={room.mainImage.alt}
                    price={room.price}
                    description={room.description}
                    slugs={room.slug.current}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    ))
  );
}
