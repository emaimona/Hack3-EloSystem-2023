import React from "react";

export default function SideBar({formId, setFormId}) {

  return (
    <nav className="sidebar">
      <ul>
        <li className={formId === 19 ? "sidebar-focus": ""} onClick={()=> setFormId(1)}>
            <i className="fa-solid fa-table"></i> Dashboard
        </li>
        <li className={formId === 19 ? "sidebar-focus": ""} onClick={()=> setFormId(1)}>
          <i className="fa-solid fa-bolt"></i> Tournaments
        </li>
        <li className={formId === 1 ? "sidebar-focus": ""}  onClick={()=> setFormId(1)}>
          <i className="fa-solid fa-trophy"></i> Leaderboard
        </li>
        <li className={formId === 2 ? "sidebar-focus": ""} onClick={()=> setFormId(2)}>
          <i className="fa-solid fa-users"></i> Team finder
        </li>
        <li className={formId === 19 ? "sidebar-focus": ""} onClick={()=> setFormId(1)}>
          <i className="fa-brands fa-fantasy-flight-games"></i> Challenges
        </li>
        <li className={formId === 19 ? "sidebar-focus": ""} onClick={()=> setFormId(1)}>
          <i className="fa-regular fa-building"></i> Organizations
        </li>
        <li className={formId === 19 ? "sidebar-focus": ""} onClick={()=> setFormId(1)}>
          <i className="fa-regular fa-newspaper"></i> News
        </li>
      </ul>
    </nav>
  );
}
