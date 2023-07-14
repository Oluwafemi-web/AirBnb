import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "./context/language-context";
import sanityClient from "../client";
import EventItems from "./EventItems";
import { Link } from "react-router-dom";
export default function Servizi() {
  const [eventData, setEvent] = useState(null);
  const [eventText, setText] = useState(null);
  const ctx = useContext(LanguageContext);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eventdescription" && language == $language] {
               heading,
               ptext,
               ctext,
               subheading,
               title,
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
        `*[_type == "events"] {
               eventName,
               category,
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    }

               }
          }`
      )
      .then((data) => setEvent(data))
      .catch(console.error);
  }, []);

  return (
    eventText &&
    eventText.map((text, index) => (
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

        <section className="event-area pt-90 pt-bm-90">
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
            {/* <div className="row">
              <div className="col-12">
                <div className="event-menu">
                  <button data-filter="*" className="active">
                    {" "}
                    All
                  </button>
                  <button data-filter="music">Music Party</button>
                  <button data-filter="birthday">Birthday Party</button>
                  <button data-filter="conference">Conference</button>
                  <button data-filter="wedding">Wedding Party</button>
                  <button data-filter=".photography">Photography Party</button>
                </div>
              </div>
            </div> */}
            <div className="row event-items">
              {eventData &&
                eventData.map((event, index) => (
                  <EventItems
                    key={index}
                    image={event.mainImage.asset.url}
                    category={event.category}
                    eventTitle={event.eventName}
                    description={event.description}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    ))
  );
}
