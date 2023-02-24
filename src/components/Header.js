import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./assets/images/esport_manager.png" alt="logo"></img>
      </div>
      <div className="header--aside">
        <div className="header--search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                className=""
                placeholder="Search by Summoner name"
                aria-label="Username"
            />
        </div>
            <img className='img--profile' src="./assets/images/random_photo.png" alt="logo"></img>
            <h5> Collins </h5>
      </div>
    </header>
  );
}
