import React from 'react'

const card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <img src={props.img}alt=''/>
        <h1>{props.user}</h1>
        <h3>{props.user} is {props.age}'s old</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      </div>
      
    </div>
  )
}

export default card
