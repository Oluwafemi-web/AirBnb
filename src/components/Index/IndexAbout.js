import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../context/language-context";
import sanityClient from "../../client";
import { PortableText } from "@portabletext/react";
export default function IndexAbout() {
  const [aboutData, setAbout] = useState(null);
  const ctx = useContext(LanguageContext);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "indexabout" && language == $language] {
               title,
               description,
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
      .then((data) => setAbout(data))
      .catch(console.error);
  }, [ctx.languageData]);
  return (
    <section className="about-area">
      <div className="container">
        {aboutData &&
          aboutData.map((about, index) => (
            <div className="row" key={index}>
              <div className="col-lg-7">
                <div className="video-wrapper mt-90">
                  <div className="video-overlay">
                    <video
                      id="myVideo"
                      autoPlay={true}
                      muted={true}
                      style={{ width: "100%" }}
                      loop={true}
                      src={about.mainImage.asset.url}
                    ></video>
                  </div>
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
