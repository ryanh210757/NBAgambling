import React from "react"
import '../index.css'

export default function Baccarat(){
    let deckID
    const [playerCards, setPlayerCards] = React.useState([])
    const [bankerCards, setBankerCards] = React.useState([])
     
 
    function handleClick(){
        fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckID = data.deck_id
        })
    }

    function drawCard(){
            fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=4`)
            .then(res => res.json())
            .then(data => {
                console.log(data.cards)
                data.cards.map(item => setPlayerCards(item[0]))
              console.log(playerCards)
            })
       
    }

 
 

    return (
       <div className="baccarat">
            <h1>Baccarat loading...</h1>
            <button onClick={handleClick}>New Deck</button>
            <button onClick={drawCard}>Get card</button>
       </div>
       
    )
}