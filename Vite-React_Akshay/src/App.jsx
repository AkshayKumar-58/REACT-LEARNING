import { useState } from 'react'
import Chai from "./chai"

function App() {
  const [count, setCount] = useState(0)

  return (  //react export only accepts single tag to inject multiple tags use fragments from div
   
  //  <div>
  //   <Chai/>
  //   <p>
  //     Hello how are you
  //   </p>
  //  </div>
  //you can also use only fragments
  <>
  <Chai/>
  <h2>
    This is wonderful
  </h2>
  </>
  )
}

export default App
