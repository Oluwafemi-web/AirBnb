import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import EventItems from "./EventItems";
import { Link } from "react-router-dom";
export default function Servizi() {
  async function filterGalleryOnLoad() {
    // Wait for DOM to load completely
    await new Promise((resolve) => {
      if (document.readyState === "loading") {
        document.addEventListener("load", resolve);
      } else {
        resolve();
      }
    });

    // Get all the filter buttons
    const galleryFilter = document.querySelector(".event-menu");
    console.log(galleryFilter);
    const filterButtons = galleryFilter.querySelectorAll("button");

    // Get all the gallery items
    const galleryItems = document.querySelectorAll(".single-event");

    // Add click event listener to each filter button
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove "active" class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add "active" class to clicked button
        this.classList.add("active");

        // Get the filter value from the button
        const filterValue = this.getAttribute("data-filter");

        // Loop through all gallery items
        galleryItems.forEach(function (item) {
          // Check if the item has the same class as the filter value or if the filter value is "*"
          if (item.classList.contains(filterValue) || filterValue === "*") {
            // Show the item
            // item.parentElement.style.position = "relative";
            item.style.display = "block";
          } else {
            // Hide the item
            // item.parentElement.style.position = "absolute";
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Call the async function to run the code when the DOM is completely loaded
  filterGalleryOnLoad();
  const [eventData, setEvent] = useState(null);
  const [eventText, setText] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "eventdescription"] {
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
          }`
      )
      .then((data) => setText(data))
      .catch(console.error);
  }, []);

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
