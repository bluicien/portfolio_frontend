
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './pages/root/Root';
import './App.css';
import Homepage from './pages/homepage/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } >
      <Route path='/' element={ <Homepage /> } />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
