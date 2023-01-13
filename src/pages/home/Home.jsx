import React from 'react'
import Feed from '../../components/feed/Feed'
import Navbar from '../../components/navbar/Navbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
const Home = () => {
  return (
   <div style={{display:"flex", flexDirection:"column"}}>
    <div><Navbar /></div>
        <div className='home__container'>
          
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </div>
  )
}

export default Home