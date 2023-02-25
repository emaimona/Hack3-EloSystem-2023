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
        <div className="bottomPart">
            <div className="roles">
                <h4>Roles</h4>
                <i className="fa-solid fa-bullseye"></i>
                <i className="fa-solid fa-user-ninja"></i>
                <i className="fa-brands fa-old-republic"></i>
            </div>
            <div className="summon">
                <div className="summoner">
                    <h4>Summoner</h4>
                </div>    
                <div className="bottom">
                    <i className="fa-solid fa-medal"></i>
                    <div className="infoo">
                        <p>Golden boy</p>
                        <p>Latin america</p>
                    </div>
                </div>

                


            </div>
            <div className="div3">
            </div>
        </div>
      </div>
    </div>
  );
}
