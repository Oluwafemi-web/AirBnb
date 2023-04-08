import React from "react";
import Sliders from "./Slider";
import IndexAbout from "./Index/IndexAbout";
import IndexGallery from "./Index/IndexGallery";
import IndexRoom from "./Index/IndexRooms";

export default function Home() {


     return (

          <>
               <Sliders />
               <IndexAbout />
               <IndexRoom />

               <IndexGallery />

          </>
     )
}