import React, { useState, useEffect, useRef } from "react";

import sanityClient from "../../client";
import { PortableText } from "@portabletext/react";
export default function IndexAbout() {
  const [aboutData, setAbout] = useState(null);
  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, [aboutData]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexabout"] {
               title,
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    },
                    alt

               }
          }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);
  return (
    <section className="about-area">
      <div className="container">
        {aboutData &&
          aboutData.map((about, index) => (
            <div className="row" key={index}>
              <div className="col-lg-7">
                <div className="video-wrapper mt-90">
                  <div className="video-overlay">
                    {/* <img src={about.mainImage.asset.url} alt="" /> */}
                    <video
                      id="myVideo"
                      ref={videoRef}
                      autoPlay={true}
                      muted={true}
                      style={{ width: "100%" }}
                      loop={true}
                      src={about.mainImage.asset.url}
                    ></video>
                  </div>
                  {/* <a
                    className="video-popup"
                    href="https://www.youtube.com/watch?v=rXcp6s0VjZk"
                  ></a> */}
                </div>
              </div>
              <div className="col-lg-5" style={{ textAlign: "center" }}>
                <div className="about-text">
                  <div className="section-title">
                    <h3>{about.title}</h3>
                    <PortableText value={about.description} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
