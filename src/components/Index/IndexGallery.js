// import GalleryItems from "./GalleryItems"
import sanityClient from "../../client";
import link from "../img/link.webp";
import linkhover from "../img/link-hover.webp";
import search from "../img/search.webp";
import searchhover from "../img/search-hover.webp";
import { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
export default function IndexGallery() {
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
    const galleryFilter = document.querySelector(".gallery-filter");

    const filterButtons = galleryFilter.querySelectorAll("button");

    // Get all the gallery items
    const galleryItems = document.querySelectorAll(".item-gallery");

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
            item.parentElement.style.position = "relative";
            item.style.display = "block";
          } else {
            // Hide the item
            item.parentElement.style.position = "absolute";
            item.style.display = "none";
          }
        });
      });
    });
  }

  // Call the async function to run the code when the DOM is completely loaded
  filterGalleryOnLoad();

  const [galleryData, setGallery] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gallery"] {
               category,
                Image{
                    asset->{
                         _id,
                         url
                    },
                    alt
               }
          
          }`
      )
      .then((data) => setGallery(data))
      .catch(console.error);
  }, []);
  // console.log(galleryData);
  return (
    <section className="gallery-area pt-90 pt-bm-90">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="section-title text-center">
              <h3>Gallery</h3>
              {/* <p>{item.description}</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-filter">
          <button data-filter="*" className="active">
            All
          </button>
          <button data-filter="appartamenti">Appartamenti</button>
          <button data-filter="restaurent">Home Restaurant</button>
          <button data-filter="attrazioni">Attrazioni</button>
        </div>
        <div
          className="gallery gallery-masonry"
          style={{ position: "relative" }}
        >
          <MDBRow className="wd-100" style={{ margin: "0px" }}>
            {galleryData &&
              galleryData.map((item, index) => (
                <MDBCol lg={3} md={10} className="mb-4 mb-lg-0" key={index}>
                  <div className={`item-gallery ${item.category}`}>
                    <img
                      src={item.Image.asset.url}
                      className="w-100 shadow-1-strong mb-4 thumb"
                      alt="Boat on Calm Water"
                    />

                    <div className="hover-gallery">
                      <div className="gallery-icon">
                        <a href="#">
                          <span className="p-img">
                            <img src={link} alt="" />
                          </span>
                          <span className="s-img">
                            <img src={linkhover} alt="" />
                          </span>
                        </a>
                        <a className="image-popup" href={item.Image.asset.url}>
                          <span className="p-img">
                            <img src={search} alt="" />
                          </span>
                          <span className="s-img">
                            <img src={searchhover} alt="" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </MDBCol>
              ))}
          </MDBRow>
        </div>
      </div>
    </section>
  );
}
