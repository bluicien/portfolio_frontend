import { Outlet } from 'react-router-dom'
import NavBar from '../../common/navbar/NavBar'

export default function Root() {
  return (
    <div className='pageContainer'>
        <NavBar />
        <Outlet />
    </div>
  )
}
