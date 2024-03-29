import React, { useState, useEffect, useContext } from "react";
import sanityClient from "../client";
import LanguageContext from "./context/language-context";
import { Link } from "react-router-dom";
export default function Attrazione() {
  const [attrazioneList, setAttrazioneList] = useState(null);
  const [attrazioneText, setText] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "attrazionedescription" && language == $language] {
               heading,
               subheading,
               title,
               ptext,
               ctext,
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
               subheading,
               title,
               ptext,
               ctext,
               language,
               description,
                  image{
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
        `*[_type == "attrazione" && language == $language] {
         roomname,
         description,
         imagedescription,
         slug,
         language,
         image{
              asset->{
                   _id,
                   url
              },
              alt
         },
         _translations[] {
            value->{
              roomname,
              description,
              imagedescription,
              slug,
              language,
              image{
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
      .then((data) => setAttrazioneList(data))
      .catch(console.error);
  }, [ctx.languageData]);

  return (
    attrazioneText &&
    attrazioneText.map((text, index) => (
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
        <section className="room-area pt-90">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="section-title text-center">
                  <h3>{text.title}</h3>
                  <p>{text.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* {teamList && teamList.map((team, index) => <TeamList key={index} url={team.image.asset.url} position={team.position} name={team.name} bio={team.bio} />)} */}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {attrazioneList &&
                  attrazioneList.map((item, index) => (
                    <div className="room-list" key={index}>
                      <div className="row">
                        <div className="col-lg-5 col-md-6 single-room large pd-none">
                          <Link
                            to={"/attrazione/" + item.slug.current}
                            key={item.slug.current}
                          >
                            <img src={item.image.asset.url} alt="" />
                            <div className="room-hover text-center">
                              <div className="hover-text">
                                <h3>{item.roomname}</h3>
                                <p>{item.imagedescription}</p>
                                {/* <div className="room-btn">
                                  <Link
                                    to={"/rooms/" + props.slugs}
                                    key={props.slugs}
                                    className="default-btn"
                                  >
                                    DETAILS
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-7 col-md-6 align-self-center pd-20">
                          <div className="room-list-text">
                            <h3>
                              <Link
                                to={"/attrazione/" + item.slug.current}
                                key={item.slug.current}
                              >
                                {item.roomname}
                              </Link>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    ))
  );
}
