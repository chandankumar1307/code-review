import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Stats from './components/Stats'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/navbar" element={<NavBar />}></Route>
      <Route exact path="/header" element={<Header />}></Route>
      <Route exact path="/stats" element={<Stats />}></Route>

    </Routes>
  )
}

export default App