import { Outlet } from 'react-router-dom'
import NavBar from '../../components/navbar/NavBar'
import ChatBot from '../../components/chatBot/ChatBot'

export default function Root() {

  return (
    <div className='pageContainer'>
        <NavBar />
        <Outlet />
        <ChatBot />
    </div>
  )
}
