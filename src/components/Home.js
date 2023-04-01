import React from "react";
import Sliders from "./Slider";
import IndexAbout from "./Index/IndexAbout";
import IndexGallery from "./Index/IndexGallery";
import IndexRoom from "./Index/IndexRooms";
// import IndexCounter from "./Index/IndexCounter";
// import IndexTeam from "./Index/IndexTeam";
// import IndexAdvert from "./Index/IndexAdvert"
// import IndexPricing from "./Index/IndexPricing";
export default function Home() {
     return (
          // <NavBar />
          <>
               <Sliders />
               <IndexAbout />
               <IndexRoom />
               {/* <IndexServices /> */}
               {/* <IndexCounter /> */}
               <IndexGallery />
               {/* <IndexTeam /> */}
               {/* <IndexAdvert /> */}
               {/* <IndexPricing /> */}
               {/* <IndexBlog /> */}
               {/* <IndexClient /> */}
          </>
     )
}