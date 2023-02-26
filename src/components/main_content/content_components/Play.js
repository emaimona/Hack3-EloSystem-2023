import React from "react";
// import MatesFinder from "./MatesFinder";
// import InvitedMates from "./InvitedMates";

export default function Play({ show, setShow }) {
  return (
    <div className={!show ? "play--container" : "show"}>
      <div className="popUp">
        <div className="players">
          <div className="playersTxt">
            <p>Players</p>
          </div>
          <div className="randomImages">
            <div className="randomImg1">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
            <div className="randomImg2">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
            <div className="randomImg3">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className="bottomPop">
            <div className="smallPbar">
              <div className="smallPbar2"></div>
            </div>
            <button
              className="btn-1"
              onClick={() => {
                setShow(!show);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="enemies">
          <div className="playersTxt">
            <p>Players</p>
          </div>
          <div className="randomImages">
            <div className="randomImg4">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
            <div className="randomImg5">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
            <div className="randomImg6">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
          </div>
          <div className="bottomPop">
            <button className="btn-Play">Play </button>
          </div>
        </div>
      </div>
    </div>
  );
}
