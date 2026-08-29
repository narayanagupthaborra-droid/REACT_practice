import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const increase =()=>{
    setnum(num+1);
  }
  const decrease=()=>{
    setnum(num-1);
  }
  const reset=() =>{
    setnum(0);
  }
  return (
    <div className='counter'>
      <h1> counter</h1>
      <div className='number'>{num}</div>
      <div className='buttons'>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>-</button>
      </div>
      <p>{num >0?"count is positive" : num < 0 ? "count is negative" : "count is zero"} </p>
    </div>
  )
}

export default App
