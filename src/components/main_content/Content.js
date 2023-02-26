import React from 'react'
import {nanoid} from 'nanoid'
// import TeamMateFinder from './content_components/TeamMateFinder'
import InvitedMates from './content_components/InvitedMates'
import LeaderBoard from './content_components/LeaderBoard'
import Profile from './content_components/Profile'
import MatesFinder from './content_components/MatesFinder'
import Play from './content_components/Play'



console.log('')

/*
    Leaderboard ==> 1
    TeamMateFinder ==> 2
    Profile ==> 3
*/
export default function Content({formId}) {
    const[show, setShow] = React.useState(true)

    function generateTeamMateFinder(nbr) {
        let comp = []
        for (let i=0; i<nbr; i++)
            comp.push(<MatesFinder key={nanoid()}/>)

        return comp
    }
    const component = (formId === 1) ? <LeaderBoard/> : (formId === 2) ? generateTeamMateFinder(10) : <Profile/>
    
    return (
        <div className='content'>
            {   (formId!==2) ? component : <> <InvitedMates show={show} setShow={setShow}/> {component}</> }
        <Play show={show} setShow={setShow}/>
        </div>
    )
}