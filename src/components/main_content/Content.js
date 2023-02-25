import React from 'react'
import TeamMateFinder from './content_components/TeamMateFinder'
import LeaderBoard from './content_components/Leaderboard'
import Profile from './content_components/Profile'

export default function Content() {
    return (
        <div className='content'>
            <LeaderBoard />
            <TeamMateFinder/>
            <TeamMateFinder/>
            <TeamMateFinder/>
            <TeamMateFinder/>
            <Profile/>

        </div>
        
    )
}