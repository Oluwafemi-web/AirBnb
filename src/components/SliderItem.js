import React, { forwardRef } from "react";
import Carousel from "react-bootstrap/Carousel";

const SliderItem = forwardRef((props, ref) => {
  return (
    <Carousel.Item
      ref={ref}
      className={`overlay ${props.isActive ? "active" : ""}`}
    >
      <img className="d-block w-100" src={props.imgs} alt="First slide" />
      <Carousel.Caption>
        <div className="banner-content">
          {/* <h1>{props.titleimg}</h1> */}
          <img src={props.titleimg} style={{ width: "40%" }}></img>
          <p style={{ fontSize: "22px" }}>{props.description}</p>
          <div className="banner-btn">
            <a className="default-btn" href="/rooms">
              explore
            </a>
          </div>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

export default SliderItem;
