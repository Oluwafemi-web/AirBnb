import React, { useState, useEffect } from "react";
import Socials from "../Socials";
import sanityClient from "../../client";
export default function IndexAbout() {
  const [aboutData, setAbout] = useState(null);

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
                    <img src={about.mainImage.asset.url} alt="" />
                  </div>
                  <a
                    className="video-popup"
                    href="https://www.youtube.com/watch?v=rXcp6s0VjZk"
                  ></a>
                </div>
              </div>
              <div className="col-lg-5" style={{ textAlign: "center" }}>
                <div className="about-text">
                  <div className="section-title">
                    <h3>{about.title}</h3>
                    <p>{about.description}</p>
                  </div>
                  <div
                    className="about-links"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
