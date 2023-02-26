import React from "react";
import User from './User'

function LeaderBoard() {
  return (
    <div className="leaderBoard">
        <div className="top">
          <h1>LeaderBoard</h1>
          <div className="dropdown">
            <div className="btn">
              <button className="dropbtn">League of Legends</button>
              <img src="./assets/images/down.png" alt="down"></img>
            </div>
            <div className="dropdown-content">
              <span>League of Legends</span>
              <span>Counter strike</span>
              <span>Pub G</span>
            </div>
          </div>
        </div>
        <div className="leaderBoardMain">
          <div className="leaderBoard--top">
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15H0.833333C0.61232 15 0.400358 15.0988 0.244078 15.2746C0.0877975 15.4504 0 15.6889 0 15.9375V30H8.33333V15.9375C8.33333 15.6889 8.24554 15.4504 8.08926 15.2746C7.93297 15.0988 7.72101 15 7.5 15Z" fill="#494464" fillOpacity="0.8"/>
              <path d="M20 0H13.3333C13.1123 0 12.9004 0.0987722 12.7441 0.274588C12.5878 0.450403 12.5 0.688859 12.5 0.9375V30H20.8333V0.9375C20.8333 0.688859 20.7455 0.450403 20.5893 0.274588C20.433 0.0987722 20.221 0 20 0Z" fill="#494464" fillOpacity="0.8"/>
              <path d="M32.5 7.5H25.8333C25.6123 7.5 25.4004 7.59877 25.2441 7.77459C25.0878 7.9504 25 8.18886 25 8.4375V30H33.3333V8.4375C33.3333 8.18886 33.2455 7.9504 33.0893 7.77459C32.933 7.59877 32.721 7.5 32.5 7.5Z" fill="#494464" fillOpacity="0.8"/>
            </svg>
            <h3>User</h3>
            <h3>Total score</h3>
            <h3>K/D/A</h3>
            <h3>Rank</h3>
          </div>
          
          <div className="leaderBoard--users">
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
            <User id={"8"}/>
         
          </div>
        </div>
        <div className="pages">

        </div>
    </div>
  );
}

export default LeaderBoard;
