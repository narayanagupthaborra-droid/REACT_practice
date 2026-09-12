import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('a is changing')
  }
  function bChanging(){
    console.log('b is changing')
  }
  useEffect(function(){
    aChanging()
  }, [])
  useEffect(function(){
    bChanging()
  }, [b]) 

  return (
    <div>
      <h1> a is {a}</h1>
      <h1> b is {b}</h1>
      <button onClick={() => setA(a + 1)}>change a</button>
      <button onClick={() => setB(b - 1)}>change b</button>
    </div>
  )
}

export default App
