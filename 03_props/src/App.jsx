import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user ="Narayana guptha" age ={19} img ="https://plus.unsplash.com/premium_photo-1787066994157-526d2b7200dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D"/>
      <Card user ="marraya" age ={18} img ="https://images.unsplash.com/photo-1786543534590-6fb9eec71a0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"/>
      <Card user ="chandu" age ={17}img ="https://images.unsplash.com/photo-1787404200329-78b2aaee13c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D"/>
      <Card user ="manoj" age ={20} img ="https://images.unsplash.com/photo-1787456863881-10d4cecf6e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjR8fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App
