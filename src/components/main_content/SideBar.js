import React from "react";

export default function SideBar() {
  function toggle() {
    console.log("toggle");
  }

  return (
    <nav className="sidebar">
      <ul>
        <li className="x">
            <i className="fa-solid fa-table"></i> Dashboard
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-solid fa-bolt"></i> Tournaments
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-solid fa-trophy"></i> Leaderboard
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-solid fa-users"></i> Team finder
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-brands fa-fantasy-flight-games"></i> Challenges
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-regular fa-building"></i> Organizations
        </li>
        <li className="x" onClick={toggle}>
          <i className="fa-regular fa-newspaper"></i> News
        </li>
      </ul>
    </nav>
  );
}
