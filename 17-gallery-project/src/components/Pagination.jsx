import React from 'react'

const Pagination = ({ index, setIndex }) => {

  const previousPage = () => {
    if (index > 1) {
      setIndex(index - 1)
    }
  }

  const nextPage = () => {
    setIndex(index + 1)
  }

  return (
    <div className='flex justify-center gap-4 items-center p-6'>

      <button
        onClick={previousPage}
        disabled={index === 1}
        className='bg-amber-500 text-black rounded px-4 py-2 font-bold disabled:opacity-40 disabled:cursor-not-allowed'
      >
        Prev
      </button>

      <p className='bg-gray-800 px-4 py-2 rounded font-bold'>
        Page {index}
      </p>

      <button
        onClick={nextPage}
        className='bg-amber-500 text-black rounded px-4 py-2 font-bold'
      >
        Next
      </button>

    </div>
  )
}

export default Pagination