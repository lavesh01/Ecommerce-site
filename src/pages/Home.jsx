import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import React from 'react'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home