import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import IndexRoomItems from "./IndexRoomItems";
export default function IndexRoom() {
  const [roomData, setRoom] = useState(null);
  const [roomText, setText] = useState(null);
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
        `*[_type == "indexroom"] {
               title,
               description,
               slug,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`
      )
      .then((data) => setRoom(data))
      .catch(console.error);
  }, []);
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
