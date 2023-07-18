import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./css/NavBar.css";
import "./css/meanmenu.css";
import sanityClient from "../client";

export default function NavBar(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [header, updateHeader] = useState(null);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHandler = () => {
    setClicked((prev) => !prev);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header"] {
               logo{
                    asset->{
                         _id,
                         url
                    }
               },
               contact,
               facebook,
               instagram,
               tiktok,

          }`
      )
      .then((data) => updateHeader(data))
      .catch(console.error);
  }, []);

  return (
    <header
      className={`header-area fixed header-sticky ${
        isScrolled ? "sticky" : ""
      }`}
    >
      <div className="container">
        {header &&
          header.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-xl-4 col-lg-3 col-sm-3 col-12">
                <div className="logo" style={{ marginLeft: "-29%" }}>
                  <a href="/">
                    <img src={item.logo.asset.url} alt="Oestin" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-sm-7 col-12">
                <div className="header-top fix">
                  <div className="header-contact">
                    <span className="text-theme">Whatsapp:</span>
                    <span>{item.contact}</span>
                  </div>
                  <div className="header-links">
                    <a href={item.facebook}>
                      <FaFacebookF />
                    </a>
                    <a href={item.tiktok}>
                      <FaTiktok />
                    </a>
                    <a href={item.instagram}>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <NavLinks />
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-2 col-12">
                <div className="main-menu language-list d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <NavLink to="#" onClick={props.itClicked}>
                          IT
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" onClick={props.enClicked}>
                          EN
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mobile-menu-area">
        <div className="container mean-container">
          <div className="mean-bar">
            <a
              href="#nav"
              className={`meanmenu-reveal ${clicked ? "meanclose" : ""}`}
              style={{
                right: 0,
                left: "auto",
                textAlign: "center",
                textIndent: 0,
                fontSize: 22,
              }}
              onClick={clickHandler}
            >
              <span />
              <span />
              <span />
            </a>
            <nav className="mean-nav">
              <ul style={{ display: clicked ? "block" : "none" }}>
                <li>
                  <NavLink to="/" exact="true">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rooms">ROOMS</NavLink>
                </li>
                <li>
                  <NavLink to="/servizi">SERVIZI</NavLink>
                </li>
                <li>
                  <NavLink to="/attrazione">ATTRAZIONI</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACTS</NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={props.itClicked}>
                    IT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={props.enClicked}>
                    EN
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mobile-menu">
                <div className="mean-push" />
                <nav id="dropdown" style={{ display: "none" }}>
                  <ul>
                    <li>
                      <NavLink to="/" exact="true">
                        HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/rooms">ROOMS</NavLink>
                    </li>
                    <li>
                      <NavLink to="/servizi">SERVIZI</NavLink>
                    </li>
                    <li>
                      <NavLink to="/attrazione">ATTRAZIONI</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">CONTACTS</NavLink>
                    </li>
                    <li>
                      <NavLink to="#" onClick={props.itClicked}>
                        IT
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" onClick={props.enClicked}>
                        EN
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
