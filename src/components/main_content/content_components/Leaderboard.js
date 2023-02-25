import React from "react";

function LeaderBoard() {
  return (
    <div className="container">
      <div className="top">
        <h3>Leaderboard</h3>
        <div className="dropdown">

        </div>
      </div>
      <div className="leaderBoardMain">
        <div className="title">
            <img src="./assets/icons/bars.svg" alt="icon 1"/>
            <p className="user">User</p>
            <p className = "score">Score</p>
            <p className = "winRate">Win rate</p>
            <p className = "KDA">K/D/A</p>
        </div>
        <div className="names">
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
            <div className="item4"></div>
        </div>
      </div>
      <div className="pages">

      </div>
    </div>
  );
}

export default LeaderBoard;
