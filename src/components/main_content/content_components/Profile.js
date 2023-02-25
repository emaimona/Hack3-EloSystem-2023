import React from 'react'

export default function Profile() {

    let miniStyle = {
        color: '#CE4444'
    }
    let miniStyle2 = {
        color: '#A6763F'
    }

    return (
       <div className='profile'>
            <div className='div1'>
                <div className='div1-1'>
                    <p> Player profile</p>
                    <div className='group'>
                        <div className="group-1">
                            <img className='img--profile' src="./assets/images/random_photo.png" alt="logo"></img>
                        </div>
                        <div className="group-2">
                            <p className="name">Collins</p>
                            <p className="country">
                                Country: Eucador
                            </p>

                        </div>
                    </div>
                </div>
                

                <div className='div1-2'>
                    {/* a table with 3 rows and 3 columns */}
                    <table>
                        <tr>
                            <td><b>Rank</b></td>
                            <td className='val' style={miniStyle}>1</td>
                        </tr>
                        <tr>
                            <td><b>Rating</b></td>
                            <td className='val' style={miniStyle2}>2500</td>
                        </tr>
                        <tr>
                            <td><b>Highest Rating</b></td>
                            <td className='val' style={miniStyle}>3500</td>
                        </tr>
                    </table>
                            

                </div>
                <div className='div1-3'>
                    <h4>Last status</h4>
                    <div className="stat">
                        <span className="dot">•</span>
                        <p className="last">&nbsp;Active 4 hours ago</p>
                    </div>
                    
                </div>
            </div>
            <div className='div2'>
                <div className='div2-1'>
                    <div className='div2-1-top'>
                        <p>Ranking solo</p>
                    </div>
                    <div className='div2-1-bottom'></div>
                </div>
                <div className='div2-2'></div>
                <div className='div2-3'></div>
            </div>
       </div>
    )
}