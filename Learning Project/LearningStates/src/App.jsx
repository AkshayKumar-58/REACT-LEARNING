import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20)
    {
      setCounter(counter + 1)
    }
    
  
  }

  const removeValue = () => {
    if(counter > 0)
    {
      setCounter(counter - 1)
    }
    else{counter =0}
      
    
  }
  return (
    <>
      <h1>Me and React</h1>
      <h2>Counter Value: 1</h2>

      <button
      onClick={addValue} id='b' color='blue' > Add Value {counter}</button>
      <br />

      <button
      onClick={removeValue} id='b'> Remove Value </button>
      <footer>
        Value: {counter}
      </footer>
    </>
  )
}

export default App
