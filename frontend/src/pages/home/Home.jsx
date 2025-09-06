import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessageContainer from '../../components/MessageContainer'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-dude-cont'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
