import { Outlet } from 'react-router-dom'
import NavBar from '../../common/navbar/NavBar'
// import { useState } from 'react'

export default function Root() {

  // const [ isAdmin, setIsAdmin ] = useState<boolean>(false);
  
  return (
    <div className='pageContainer'>
        <NavBar />
        <Outlet />
    </div>
  )
}
