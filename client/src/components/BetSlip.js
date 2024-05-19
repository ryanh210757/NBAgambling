import React, {useState, useEffect} from 'react'


export default function BetSlip(props){
  console.log("this is bets slipos" + props.bets)
    return (
        <>
     
        <h3>YOUR BETS</h3>
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Odds</th>
                    <th>Wager</th>
                    <th>Payout</th>
                </tr>
            </thead>
            <tbody>
                {props.bets ? props.bets.bets.map((item) => (
                    <tr key={item.id}>
                        <td>{item.teamName}</td>
                        <td>{item.odds}</td>
                        <td>{item.wager}</td>
                        <td>{item.payout}</td>
                    </tr>
                )) : <h3>You have no bets</h3>}
            </tbody>
        </table>
      
        </>
    )
}