import React from 'react'


export default function SideBar() {
    return (
        <div className='sidebar'>
            <ul>
                <li><i class="fa-solid fa-table"></i> Dashboard</li>
                <li><i class="fa-solid fa-bolt"></i>Tournaments</li>
                <li><i class="fa-solid fa-trophy"></i> Leaderboard</li>
                <li><i class="fa-solid fa-users"></i> Team finder</li>
                <li>Challenges</li>
                <li>Organizations</li>
                <li><i class="fa-regular fa-newspaper"></i> News</li>
            </ul>
        </div>
    )
}