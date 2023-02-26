import React from "react";
//import Profile from "./Profile";

export default function InvitedMates({show, setShow}) {

  function Mate() {
    return (
      <div className='mate'>
        <div className="right">
            <img
              className="img--profile"
              src="./assets/images/random_photo.png"
              alt="logo"
            ></img>
            <div> gameHunter</div>
          </div>
          <div className='left'>
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
    )
    }

  return (
    <div className="invitedMate">
        <h2>Invited Friends</h2>
        <Mate />
        <Mate />
        <Mate />
        <Mate />
        <Mate />
        <div className='invitedMate--btn'>
          <button className='btn-remove'>Remove</button>
          <button onClick={()=> {
              setShow(!show)
          }} className='btn-play'>Play</button>
        </div>
    </div>
  );
}
