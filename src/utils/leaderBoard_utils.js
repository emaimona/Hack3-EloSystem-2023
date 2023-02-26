// import React from 'react'

// export function topLaneTank(won, K, D, A, damageTaken,damageHealed, turretKills, inhibitorKills, damageToTurrets, csPerMinute, visionScore, crowdControlScore, damageDone) {
//     const totalScore = won * 100 + K/D/A * 20 + damageTaken * 0.15 + damageHealed * 0.2 + turretKills * 5 + inhibitorKills * 10 + csPerMinute * 3 + visionScore * 0.1 + crowdControlScore * 0.1 + damageDone * 0.02
//     return totalScore
// }



// export function topLaneBruiser(won,K,D,A, damageDone, damageTaken, damageHealed,turretKills, inhibitorKills, crowdControlScore, csPerMinute, visionScore ) {
//     conts totalScore = won * 100 + K/D/A * 20 + damageDone * 0.04 + damageTaken * 0.1 + Damage Healed * 0.1 + Turret Kills * 5 + Inhibitor Kills * 10 + CS per minute * 3 + Vision Score * 0.1 + Crowd Control Score * 0.05
//     return totalScore
// }

/* export function jungleTank(won,K,D,A, damageTaken, damageHealed,turretKills, inhibitorKills, damageDone, csPerMinute, visionScore, crowdControlScore){
    const totalScore = won * 100 + K/D/A * 20 + damageTaken * 0.15 + damageHealed * 0.2 + turretKills * 5 + inhibitorKills * 10 + damageDone * 0.02 + csPerMinute * 3 + visionScore * 0.2 + crowdControlScore * 0.1
    return totalScore
}
/*
/*
    export function jungleAssassin(won,K,D,A, damageDone, damageTaken, damageHealed,turretKills, inhibitorKills, csPerMinute, visionScore, crowdControlScore){
    const totalScore =  won*100 + K/D/A * 20 + damageDone * 0.04 + damageTaken * 0.05 + damageHealed * 0.1 + turretKills * 5 + inhibitorKills * 10 + csPerMinute * 3 + visionScore * 0.2 + crowdControlScore * 0.05
    return totalScore
*/
/*
    export function midLane(won,K,D,A, damageDone, damageTaken, damageHealed,turretKills, inhibitorKills, csPerMinute, visionScore, crowdControlScore){
    const totalScore =  won*100 + K/D/A * 20 + damageDone * 0.04 + damageTaken * 0.05 + damageHealed * 0.1 + turretKills * 5 + inhibitorKills * 10 + csPerMinute * 3 + visionScore * 0.15 + crowdControlScore * 0.05
    return totalScore
*/
/*
    export function adCarry
*/

/*


AD Carry:
Total Score = (Win or Lose) * 100 + K/D/A * 20 + Damage Done * 0.04 + Damage Taken * 0.03 + Damage Healed * 0.2 + Turret Kills * 5 + Inhibitor Kills * 10 + CS per minute * 5 + Vision Score * 0.1 + Crowd Control Score * 0.05
Support (Mage):
Total Score = (Win or Lose) * 100 + K/D/A * 20 + Damage Done * 0.03 + Damage Taken * 0.05 + Damage Healed * 0.1 + Turret Kills * 5 + Inhibitor Kills * 10 + CS per minute * 1 + Vision Score * 0.2 + Crowd Control Score * 0.05
Support (Healer):
Total Score = (Win or Lose) * 100 + K/D/A * 20 + Damage Done * 0.01 + Damage Taken * 0.1 + Damage Healed * 0.5 + Turret Kills * 5 + Inhibitor Kills * 10 + CS per minute * 1 + Vision Score * 0.3 + Crowd Control Score * 0.05
*/







// const urlSurmonesIron = 'https://euw1.api.riotgames.com/lol/league-e*p/v4/entries/RANKED_SOLO_5*5/IRON/I?page=1&api_key=RGAPI-3fbce5d0-e518-4e13-bcce-2fc1e728de01'

// const urlSurmonesBronze = 'https://euw1.api.riotgames.com/lol/league-e*p/v4/entries/RANKED_SOLO_5*5/BRONZE/I?page=1&api_key=RGAPI-3fbce5d0-e518-4e13-bcce-2fc1e728de01'

// const urlSurmonesSilver = 'https://euw1.api.riotgames.com/lol/league-e*p/v4/entries/RANKED_SOLO_5*5/SILVER/I?page=1&api_key=RGAPI-3fbce5d0-e518-4e13-bcce-2fc1e728de01'



// let dataIron = () => { 
//     fetch(urlSurmonesIron).then(res => res.json()).then( dat => {
//         const summoner = dat.map( obj => obj['summonerName'])
//         return summoner
//     })
// }

// let dataBronze = fetch(urlSurmonesBronze)
//     .then(res => res.json())
//     .then( dat => {
//         const summoner = dat.map( obj => obj['summonerName'] )
//         return summoner
// })

// let dataSilver = fetch(urlSurmonesSilver)
//     .then(res => res.json())
//     .then( dat => {
//         const summoner = dat.map( obj => obj['summonerName'] )
//         return summoner
// })


// console.log(dataIron, 'dasdf')

// e*port default dataIron;

