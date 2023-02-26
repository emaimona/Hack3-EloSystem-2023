import React from 'react'
import {nanoid} from 'nanoid'
import TeamMateFinder from './content_components/TeamMateFinder'
import LeaderBoard from './content_components/LeaderBoard'
import Profile from './content_components/Profile'

/*
    Leaderboard ==> 1
    TeamMateFinder ==> 2
    Profile ==> 3
*/
export default function Content({formId}) {
    function generateTeamMateFinder(nbr) {
        let comp = []
        for (let i=0; i<nbr; i++)
            comp.push(<TeamMateFinder key={nanoid()}/>)

        return comp
    }
    const component = (formId === 1) ? <LeaderBoard/> : (formId === 2) ? generateTeamMateFinder(10) : <Profile/>
    
    return (
        <div className='content'>
            {component}
        </div>
        
    )
}