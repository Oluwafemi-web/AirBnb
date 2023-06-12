import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import { Link } from "react-router-dom";
import SingleAttrazione from "../SingleAttrazione";
export default function IndexRoomItems(props) {
  return (
    <div className="single-room medium">
      <img src={props.url} alt="" />
      <div className="room-hover text-center">
        <div className="hover-text">
          <h3>
            <a href="">{props.title}</a>
          </h3>
          <p>{props.description}</p>
          <div className="room-btn">
            <Link to={"/indexroom/" + props.slug} className="default-btn">
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
