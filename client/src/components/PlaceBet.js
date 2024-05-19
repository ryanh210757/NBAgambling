import React, {useState} from "react";

export default function PlaceBet(props){
    let teamName = props.name
    let odds = props.odds
    const [wager, setWager] = useState("")
    const [payout, setPay] = useState("")
  
    console.log(teamName)
    console.log(odds)
    const onSubmit = async () => {
        const data = {
            teamName,
            odds,
            wager,
            payout
        }
        console.log(data)

        const url = "http://127.0.0.1:5000/place_bet"
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if(response.status !== 201 && response.status !== 200){
          const message = await response.json()
          alert(data.message)
        }else{
          //successful
        }
    }
    return (
        <div>
          <input id="wager" type="text" placeholder="Enter wager" value={wager} onChange={(e) => {
            setWager(e.target.value)
            setPay(e.target.value * 5)
            }}/>
          <input id="payout"  type="text" placeholder="To win" value={payout} />
          <button onClick={() => onSubmit()}>Bet Now</button>
        </div>
    )
}