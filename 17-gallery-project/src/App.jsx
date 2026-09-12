import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import ImageCard from './components/ImageCard'
import Pagination from './components/Pagination'

const App = () => {

  const [userdata, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(function () {
    getData()
  }, [index])
  let printUserData = <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map(function (ele, idx) {
      return (
      <div key={idx}>
        <ImageCard ele={ele} />
      </div>
      )
    })
  }

  return (
    <div className ='bg-black overflow-auto h-screen p-4 text-white'>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-4 items-center p-4'>
        <Pagination index={index} setIndex={setIndex} />
      </div>
    </div>
  )
}
export default App
