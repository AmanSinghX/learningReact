import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "aman",
    age : 21
  }

  let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg - bg-green-400 text-black p - 4 
    rounded - xl'> Tailwind Test</h1>
    <Card username = "Radha Vallabh" someObject = {myObj} newObje = {newArr} />
    <Card username = "Radha" btnText = "click me"/>
    </>
  )
}

export default App
