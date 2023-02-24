import React from "react";
import Profile from "./Profile";

export default function TeamMateFinder() {
  return (
    <div className="teamMateFinder">
      <div className="teamMate">
        <div className="topPart">
          <div className="faceAndFlag">
            <img
              className="img--profile"
              src="./assets/images/random_photo.png"
              alt="logo"
            ></img>
            <p>Collins</p>

          </div>
          <div className="buttons">
            <button className="invite">invite to team</button>
            <button className="more">show more</button>
          </div>
        </div>
        <div className="bottomPart"></div>
      </div>
    </div>
  );
}
