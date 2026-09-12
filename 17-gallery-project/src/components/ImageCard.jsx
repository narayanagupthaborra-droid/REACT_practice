import React from 'react'

const ImageCard = (props) => {
  return (
    <div>
      <a href={props.ele.url} target='_blank' rel='noopener noreferrer'>
          <div className='h-40 w-44  overflow-hidden rounded-md p-2'>
             <img src={props.ele.download_url} alt={props.ele.author} className='w-full h-full object-cover rounded-md' />
        </div>
         <h2 className=' font-bold text-white text-lg text-center'>{props.ele.author}</h2>
      </a>
    </div>
  )
}

export default ImageCard
