import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import ChatBot from '../../components/chatBot/ChatBot'
// import { useState } from 'react'

export default function Root() {

  // const [ isAdmin, setIsAdmin ] = useState<boolean>(false);
  
  return (
    <div className='pageContainer'>
        <NavBar />
        <Outlet />
        <ChatBot />
    </div>
  )
}
