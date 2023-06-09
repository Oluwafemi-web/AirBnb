import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderItem from "./SliderItem";
import sanityClient from "../client";
// import './css/slider.css'

export default function Sliders(props) {
  const [slider, updateSlider] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const sliderItemRef = useRef();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "slider"]{
               description,
               mainImage{
                    asset->{
                         _id,
                         url
                    }
               },
               titleimg{
                    asset->{
                         _id,
                         url
                    }
               },
          }`
      )
      .then((data) => updateSlider(data))
      .catch(console.error);
  }, []);

  if (slider === null) console.log(slider);
  return (
    <section className="slider-area">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {slider &&
          slider.map((slide, index) => (
            <SliderItem
              ref={sliderItemRef}
              key={index}
              description={slide.description}
              imgs={slide.mainImage.asset.url}
              titleimg={slide.titleimg.asset.url}
              isActive={activeIndex === index}
            />
          ))}
      </Carousel>
    </section>
  );
}
