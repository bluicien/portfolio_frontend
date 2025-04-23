
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css';
import Root from './pages/root/Root.tsx';
import Homepage from './pages/homepage/Homepage.tsx';
import Projects from './pages/projects/Projects.tsx'
import AboutMe from './pages/aboutMe/AboutMe.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } >
      <Route path='/' element={ <Homepage /> } />
      <Route path='projects' element={ <Projects /> } />
      <Route path='about-me' element={ <AboutMe /> } />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
