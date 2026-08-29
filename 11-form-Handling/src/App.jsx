import React from 'react'

const App = () => {
  const submitted =(ele)=>{
    ele.preventDefault();
    console.log("form submitted...")
  }
  return (
    <div>
      <form onSubmit={(ele)=>{
        submitted(ele)}}>
        <input type ="text" placeholder='enter your name'/>
        <button > submit</button>
      </form>
    </div>
  )
}

export default App
