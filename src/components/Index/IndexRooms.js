import React, { useState, useEffect, useContext } from "react";
import sanityClient from "../../client";
import IndexRoomItems from "./IndexRoomItems";
import LanguageContext from "../context/language-context";
export default function IndexRoom() {
  const [roomData, setRoom] = useState(null);
  const [roomText, setText] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexroomtext"] {
               title,
               description
          }`
      )
      .then((data) => setText(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexroom" && language == $language] {
               title,
               description,
               language,
               slug,
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
    <section className="room-area pt-90">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {roomText &&
              roomText.map((text, index) => (
                <div className="section-title text-center" key={index}>
                  <h3>{text.title}</h3>
                  <p>{text.description}</p>
                </div>
              ))}
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
              description={room.description}
              slug={room.slug.current}
            />
          ))}
      </div>
    </section>
  );
}
