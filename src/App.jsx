import React from 'react'
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Allproducts from './pages/Allproducts'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Card from './pages/Card'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/allpro' element={<Allproducts/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/card' element={<Card/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
