import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Card from './components/card/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Card/> 
      <h1></h1>
    </>
  )
}

export default App
