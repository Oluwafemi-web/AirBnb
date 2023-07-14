import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import sanityClient from "./client";
import "./App.css";
import Contact from "./components/Contact";
import Servizi from "./components/Servizi";
import Home from "./components/Home";
import Room from "./components/Rooms";
import Attrazione from "./components/Attrazione";
import SingleAttrazione from "./components/SingleAttrazione";
import SingleIndexRoom from "./components/Index/SingleIndexRoom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SingleRoom from "./components/SingleRoom";
import LanguageContext from "./components/context/language-context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/default.css";
import "./components/css/style.css";
import "./components/css/slider.css";
import "./components/css/responsive.css";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const languageCtx = useContext(LanguageContext);
  const [footer, updateFooter] = useState(null);
  function enClicked() {
    languageCtx.changeLanguage("en");
  }
  function itClicked() {
    languageCtx.changeLanguage("it");
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"] {
          about,
          address,
          email,
          number,
          logo{
            asset->{
              _id,
              url
            }
          },
        }`
      )
      .then((data) => updateFooter(data))
      .catch(console.error);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar enClicked={enClicked} itClicked={itClicked} />
      <Routes>
        <Route element={<Home />} path="/" exact={true} />
        <Route element={<Servizi />} path="/servizi" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Room />} path="/rooms" />
        <Route element={<SingleAttrazione />} path="/attrazione/:slug" />
        <Route element={<SingleIndexRoom />} path="/indexroom/:slug" />
        <Route element={<SingleRoom />} path="/rooms/:slug" />
        <Route element={<Attrazione />} path="/attrazione" />
      </Routes>
      {footer &&
        footer.map((item, index) => (
          <Footer
            key={index}
            logo={item.logo.asset.url}
            description={item.about}
            email={item.email}
            number={item.number}
            address={item.address}
          />
        ))}
    </BrowserRouter>
  );
}

export default App;
