import React from "react";
import Sliders from "./Slider";
import IndexAbout from "./Index/IndexAbout";
import IndexRoom from "./Index/IndexRooms";
import IndexServices from "./Index/IndexServices";
import IndexCounter from "./Index/IndexCounter";
import IndexGallery from "./Index/IndexGallery";
import IndexTeam from "./Index/IndexTeam";
import IndexAdvert from "./Index/IndexAdvert"
import IndexPricing from "./Index/IndexPricing";
// import IndexBlog from "./Index/IndexBlog";
// import IndexClient from "./Index/IndexClient"
// import NavBar from "./NavBar";
export default function Home() {
     return (
          // <NavBar />
          <>
               <Sliders />
               <IndexAbout />
               <IndexRoom />
               <IndexServices />
               <IndexCounter />
               <IndexGallery />
               <IndexTeam />
               <IndexAdvert />
               <IndexPricing />
               {/* <IndexBlog /> */}
               {/* <IndexClient /> */}
          </>
     )
}