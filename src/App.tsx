
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './pages/root/Root';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> } >
      
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
