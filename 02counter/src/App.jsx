import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(15)

  // let counter = 5


  const addValue = () => {
      if(count >=20) {
        setCount(20);
      }
      else {
        setCount(count+1); 
      }
  }

  const removeValue = () => {
    if(count <= 0) {
      setCount(0);
    }
    else {
      setCount(count-1);
    }
}
  return (
    <>
    <h1>Learning Hooks!</h1>
    <h2>Counter value : {count}</h2>

    <button
    onClick = {addValue}
    >Add value {count}</button>

    
    <br />
    <button
    onClick={removeValue}
    >Decrease value {count}</button>
    </>
  )
}

export default App
