import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className="card">
               <div className='top'>
                  <img src ={props.logo}/>
                  <button>save <Bookmark /></button>
                </div>
                <div className='center'>
                    <h3>{props.company} <span>{props.date}</span></h3>
                    <h2>{props.poat}</h2>
                    <div>
                       <h4>{props.tag1}</h4>
                       <h4>{props.tag2}</h4>
                    </div>
                </div>
                <div className='bottom'>
                  <div>
                    <h3>{props.payment}</h3>
                    <p> {props.location}</p>
                  </div>
                  <div>
                    <button>Apply now</button>
                  </div>
                </div>
          </div>
  )
}

export default card
