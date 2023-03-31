import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sanityClient from './client';
import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';
import Home from './components/Home'
import Room from './components/Rooms';
import Team from './components/Team';
import Locations from './components/Location';
import Activities from './components/Activities';
import NavBar from './components/NavBar';
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/default.css'
import './components/css/style.css'
import './components/css/slider.css'
import './components/css/responsive.css'
// import IndexNews from './components/Index/IndexNews';

function App() {
  const [footer, updateFooter] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "footer"] {
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
     

    }`).then(data => updateFooter(data))
      .catch(console.error)
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' exact={true} />
        <Route element={<Events />} path='/events' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Locations />} path='/location' />
        <Route element={<Room />} path='/rooms' />
        <Route element={<Team />} path='/team' />
        <Route element={<Activities />} path='/activities' />

      </Routes>
      {/* <IndexNews /> */}
      {footer && footer.map((item, index) => <Footer key={index} logo={item.logo.asset.url} description={item.about} email={item.email} number={item.number} address={item.address} />)}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
