import React from 'react'
import {useEffect, useState} from 'react'
import Navbar from './Navbar'
import BetSlip from './BetSlip'
import PlaceBet from './PlaceBet'



export default function Sportsbook(){
  const [matchUp, setMatchUp] = useState([])
  const [bettingSlip, setBettingSlip] = useState([])
  const [bets, setBets] = useState([])
  const [teamName, setTeamName] = useState("")
  const [odds, setOdds] = useState("")

  useEffect(() => {

    fetchBets()
    fetch('https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&markets=h2h&apiKey=3b34e68dedd330d81dcfcb13d343e091&oddsFormat=american')
    .then(res => res.json())
    .then(data => {
      setMatchUp(data)
    })
  }, [])

    const fetchBets = async () => {
      const response = await fetch("http://127.0.0.1:5000/mybets")
      const data = await response.json()
      setBets(data.bets)
      console.log("this is data . bets " + data.bets)
  }
  
  const handleClick = (name, odds) => {
    const bet = {
        name,
        odds
      }
    setTeamName(name)
    setOdds(odds)
    setBettingSlip(prev => [...prev, bet])
  }
  
  console.log(bettingSlip)

  return (
    <div className="App">
      <Navbar />
      <h1>Hello, Gamblers!</h1>
      <h1>Upcoming NBA games</h1>
      {matchUp.map(item => (
        <div className='betLine'>
          <h2>{item.bookmakers[0].markets[0].outcomes[0].name}</h2>
          <button >{item.bookmakers[0].markets[0].outcomes[0].price}</button>
            @
          <h2>{item.bookmakers[0].markets[0].outcomes[1].name}</h2>
          <button onClick={() => {
                handleClick(item.bookmakers[0].markets[0].outcomes[1].name, item.bookmakers[0].markets[0].outcomes[1].price)
              }}>{item.bookmakers[0].markets[0].outcomes[1].price}</button>
        
        </div>))}
      {bettingSlip ? bettingSlip.map(item => 
          <div>
            <h3>{item.name}{item.odds}</h3>
          </div>) : <h1>Select a team</h1>
      }
      {bettingSlip ? 
        <PlaceBet name={teamName} odds={odds}/> : <></>}
        <BetSlip bets={bets}/>
    </div>
  )
}