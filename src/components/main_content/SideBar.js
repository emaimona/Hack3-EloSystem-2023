import React from "react";

export default function SideBar() {

    function toggle() {
        console.log("togle")
    }


    return (
        <div className="sidebar">
        <ul>
            <li className="sidebar-focus" onClick={toggle}>
            <i className="fa-solid fa-table"></i> Dashboard
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-solid fa-bolt"></i>Tournaments
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-solid fa-trophy"></i> Leaderboard
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-solid fa-users"></i> Team finder
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-brands fa-fantasy-flight-games"></i> Challenges
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-regular fa-building"></i> Organizations
            </li>
            <li className="" onClick={toggle}>
            <i className="fa-regular fa-newspaper"></i> News
            </li>
        </ul>
        </div>
    )
}
