import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BetSlip from './components/BetSlip'
import Baccarat from './components/Baccarat'


export default function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/baccarat" element={<Baccarat />}/>
          <Route path="/mybetslip" element={<BetSlip />}/>
        </Routes>
      </Router>
    </>
  )
  
}