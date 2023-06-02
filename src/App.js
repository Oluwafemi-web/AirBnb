import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/default.css";
import "./components/css/style.css";
import "./components/css/slider.css";
import "./components/css/responsive.css";

function App() {
  const [footer, updateFooter] = useState(null);

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
      <NavBar />
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
      {/* <IndexNews /> */}
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
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
