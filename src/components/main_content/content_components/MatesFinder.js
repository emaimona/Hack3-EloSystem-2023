import React from "react";
//import Profile from "./Profile";

export default function MatesFinder() {
  return (
    <div className="teamMateFinder mateFinder">
      <div className="teamMate">
        <div className="topPart">
          <div className="faceAndFlag">
            <img
              className="img--profile"
              src="./assets/images/random_photo.png"
              alt="logo"
            ></img>
            <div>gameHunter</div>
          </div>
          <div className="buttons">
            <button className="invite">invite to team</button>
            <button className="more">show more</button>
          </div>
        </div>
        <div className="bottomPart">
          <div className="roles">
            <h4>Roles</h4>
            <img src="./assets/icons/sniper.svg" alt="icon 1"/>
            <img src="./assets/icons/two.svg" alt="icon 2"/>
            <img src="./assets/icons/three.svg" alt="1con 3"/>
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
            <div className="topStats">
              <p className="stats">Stats</p>
              <p className="line">
                <span className="W" style={{color:"#976F0C",}}>43W</span> <span className="L">29L</span>{" "}
                <span>(60%)</span>
              </p>
            </div>
            <div className="progressBar">
              <div className="progressBar--inner">
                <div className="progressBar--inner2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
