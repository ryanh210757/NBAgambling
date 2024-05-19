import React from 'react'
import { Link } from 'react-router-dom'
import BetSlip from './BetSlip'
import '../index.css'

export default function Navbar(){
    return (
        <nav> 
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/mybetslip"><li>My Bets</li></Link>
                <Link to="/mybetslip"><li>Login</li></Link>
                <Link to="/mybetslip"><li>Signup</li></Link>
            </ul>
        </nav>
        
    )
}