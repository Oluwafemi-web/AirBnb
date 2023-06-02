import "./css/footer.css";
import Socials from "./Socials";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import FooterImage from './FooterImage'
export default function IndexFooter(props) {
  const [socials, updateSocials] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"] {
               facebook,
               instagram,
              tiktok,

          }`
      )
      .then((data) => updateSocials(data))
      .catch(console.error);
  }, []);
  return (
    socials &&
    socials.map((item, index) => (
      <footer className="footer-area" key={index}>
        {/* Footer Widget Start */}
        <div className="footer-widget-area bg-dark">
          <div className="container">
            <div className="row mb-n60">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
                <div className="single-footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={props.logo} alt="Oestin" />
                    </a>
                  </div>
                  <p>{props.description}</p>
                </div>
              </div>
              <div className="col-xl-3 offset-lg-1 col-lg-4  col-md-6 col-sm-6 col-12 mb-60">
                <div className="single-footer-widget">
                  <h3>contact us</h3>
                  <div className="c-info">
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span>
                      {props.address} <br />
                    </span>
                  </div>
                  <div className="c-info">
                    <span>
                      <FaEnvelope />
                    </span>
                    <span>{props.email}</span>
                  </div>
                  <div className="c-info">
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <span>{props.number}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 offset-lg-1 col-lg-3 col-md-6 col-sm-6 col-12 mb-60">
                <div className="single-footer-widget">
                  <div className="social-icons">
                    <Socials
                      facebook={item.facebook}
                      instagram={item.instagram}
                      tiktok={item.tiktok}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    ))
  );
}
