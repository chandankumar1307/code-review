import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
   <Routes>
 <Route exact path="/Home" element={<Home />}></Route>

   </Routes>
  )
}

export default App