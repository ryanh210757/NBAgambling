import React from "react";
import Baccarrat from "./Baccarat";
import Navbar from "./Navbar";
import baccarat from "../images/Baccarat.jpg"
import nba from "../images/NBA-Betting.webp"
import '../index.css'

export default function Home(){
  return (
    <>
    <Navbar />
    <h1>SELECT YOUR GAME</h1>
    <div className="container">
      <div className="bacarrat">
        <h1>Baccarat</h1>
        <button onClick={() => <Baccarrat/>}><img className="image" src={baccarat}/></button>
      </div>
      <div className="sportsbook">
        <h1>Sportsbook</h1>
        <button><img className="image" src={nba}/></button>
      </div>
    </div>
    </>
  )
}