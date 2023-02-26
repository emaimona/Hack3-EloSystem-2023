import React from "react";

export default function Profile() {
  let miniStyle = {
    color: "#CE4444",
    fontWeight:"300"
  };
  let miniStyle2 = {
    color: "#A6763F",
  };

  return (
    <div className="profile">
      <div className="div1">
        <div className="div1-1">
          <p> Player profile</p>
          <div className="group">
            <div className="roup-1">
              <img
                className="img--profile"
                src="./assets/images/random_photo.png"
                alt="logo"
              ></img>
            </div>
            <div className="group-2">
              <p className="name">gamehunter</p>
              <p className="country">Country: Hungary</p>
            </div>
          </div>
        </div>

        <div className="div1-2">
          {/* a table with 3 rows and 3 columns */}
          <table>
            <tr>
              <td>
                <b>Rank</b>
              </td>
              <td className="val" style={miniStyle}>
                Gold 1
              </td>
            </tr>
            <tr>
              <td>
                <b>Rating</b>
              </td>
              <td className="val" style={miniStyle2}>
                2500
              </td>
            </tr>
            <tr>
              <td>
                <b>Highest Rating</b>
              </td>
              <td className="val" style={miniStyle}>
                3500
              </td>
            </tr>
          </table>
        </div>
        <div className="div1-3">
          <h4>Last status</h4>
          <div className="stat">
            <span className="dot">•</span>
            <p className="last">&nbsp;Active 4 hours ago</p>
          </div>
        </div>
      </div>
      <div className="div2">
        <div className="div2-1">
          <div className="div2-1-top">
            <p>Ranking solo</p>
          </div>
          <div className="div2-1-bottom">
            <div className="image">
              <img
                src="./assets/icons/Pcircle.svg"
                alt="icon 2"
                height="100px"
              />
            </div>
            <div className="middle">
              <h2>Gold I</h2>
              <div className="statistics">
                <p className="stats">Stats</p>
                <p className="line">
                  <span className="W" style={{ color: "#976F0C" }}>
                    43W
                  </span>{" "}
                  <span className="L">29L</span> <span>(60%)</span>
                  <div className="progressBar">
                    <div className="progressBar--inner">
                      <div className="progressBar--inner2"></div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="end">
              <img src="./assets/icons/graph.svg" alt="icon 2" height="100px" />
            </div>
          </div>
        </div>
        <div className="div2-2">
          <div className="div2-2-a">
            <h2>Performance</h2>
            <div>
              <img src="./assets/icons/fire.svg" alt="icon 2" height="100px" />
            </div>
            <p style={{ color: "#FD7B06" }}>
              {" "}
              <b>On fire</b>
            </p>
          </div>
          <div className="div2-2-b">
            <img src="./assets/icons/P.svg" alt="icon 2" height="100%" />
          </div>
          <div className="div2-2-c">
            <p>
              <button style={{background:"rgba(22, 91, 170, 1)"}}></button> &nbsp;Top lane
            </p>
            <p>
              <button style={{background:"rgba(161, 85, 185, 1)"}}></button> &nbsp;Mid lane
            </p>
            <p>
              <button style={{background:"rgba(247, 101, 163, 1)"}}></button> &nbsp;Attack damage carry
            </p>
            <p>
              <button style={{background:"rgba(22, 191, 214, 1)"}}></button> &nbsp;Jungler
            </p>
             
             
          </div>
        </div>
        <div className="div2-3">
            <div className="div2-3-a"><p>Achievements</p></div>
            <div className="div2-3-b">
                {/* Table with 4 rows and 4 columns */}
                <table className="profileTable">
                    <tr>
                        <th>Achievements</th>
                        <th>Score</th>
                        <th>Rarity</th>
                        <th>Earned date</th>
                    </tr>
                    <tr>
                        <td className="firstTd">
                            <span className="smallIcons">
                                <img src="./assets/icons/riffle.svg" alt="icon" width="25px" />
                            </span>
                            <div>
                                <p><b>Sniper war</b></p>
                                <p>Killed more than 5 enemies in about 10 seconds.</p>
                            </div>
                        </td>
                        <td>100</td>
                        <td className="flexy">
                            <p>14%</p>
                            <p>(434.3)</p>
                            <p><img src="./assets/icons/fl.svg" alt="icon 2"  /></p>

                        </td>
                        <td>24-02-2023</td>
                    </tr>
                    <tr>
                        <td className="firstTd">
                            <span className="smallIcons">
                                <img src="./assets/icons/bomb.svg" alt="icon" width="25px" />
                            </span>
                            <div>
                                <p><b>Sniper war</b></p>
                                <p>Killed more than 5 enemies in about 10 seconds.</p>
                            </div>
                        </td>
                        <td>98</td>
                        <td className="flexy">
                            <p>14%</p>
                            <p>(434.3)</p>
                            <p><img src="./assets/icons/fl.svg" alt="icon 2"  /></p>

                        </td>
                        <td>27-02-2023</td>
                    </tr>
                    <tr>
                        <td className="firstTd">
                            <span className="smallIcons">
                                <img src="./assets/icons/detective2.svg" alt="icon" width="25px" />
                            </span>
                            <div>
                                <p><b>Sniper war</b></p>
                                <p>Killed more than 5 enemies in about 10 seconds.</p>
                            </div>
                        </td>
                        <td>100</td>
                        <td className="flexy">
                            <p>14%</p>
                            <p>(434.3)</p>
                            <p><img src="./assets/icons/fl.svg" alt="icon 2"  /></p>

                        </td>
                        <td>28-02-2023</td>
                    </tr>
                </table>


            </div>
        </div>
      </div>
    </div>
  );
}
